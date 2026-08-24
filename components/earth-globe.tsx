"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const RADIUS = 1.72;

const cities = {
  london: { lat: 51.51, lon: -0.13, label: "United Kingdom" },
  dubai: { lat: 25.2, lon: 55.27, label: "United Arab Emirates" },
  mumbai: { lat: 19.08, lon: 72.88, label: "India" },
} as const;

const routes: [keyof typeof cities, keyof typeof cities, number][] = [
  ["london", "dubai", 0],
  ["dubai", "mumbai", 0.9],
  ["mumbai", "london", 1.8],
  ["london", "mumbai", 2.7],
  ["dubai", "london", 3.6],
];

function publicUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function arcCurve(from: THREE.Vector3, to: THREE.Vector3) {
  const mid = from.clone().add(to).multiplyScalar(0.5);
  const lift = from.distanceTo(to) * 0.42;
  mid.normalize().multiplyScalar(RADIUS + lift);
  return new THREE.QuadraticBezierCurve3(from, mid, to);
}

function Earth({ spinning }: { spinning: boolean }) {
  const group = useRef<THREE.Group>(null);
  const spinY = useRef(2.35);
  const [night, bump] = useTexture(
    [publicUrl("/images/earth-night.jpg"), publicUrl("/images/earth-bump.png")],
    (loaded) => {
      const maps = (Array.isArray(loaded) ? loaded : [loaded]) as THREE.Texture[];
      maps[0].colorSpace = THREE.SRGBColorSpace;
      maps[0].anisotropy = 8;
      maps[1].anisotropy = 4;
      maps[1].colorSpace = THREE.NoColorSpace;
    },
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    if (spinning) spinY.current += delta * 0.07;
    group.current.rotation.set(0.28, spinY.current, 0.05);
  });

  return (
    <group ref={group}>
      <mesh castShadow>
        <sphereGeometry args={[RADIUS, 96, 96]} />
        <meshStandardMaterial
          map={night}
          bumpMap={bump}
          bumpScale={0.045}
          roughness={0.78}
          metalness={0.08}
          emissive="#ffffff"
          emissiveMap={night}
          emissiveIntensity={1.05}
        />
      </mesh>
      <mesh scale={1.018}>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshPhongMaterial
          color="#7eb6ff"
          transparent
          opacity={0.07}
          shininess={80}
          specular="#88c4ff"
        />
      </mesh>
      <mesh scale={1.12}>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float i = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.2);
              gl_FragColor = vec4(0.72, 0.12, 0.1, 1.0) * i;
            }
          `}
        />
      </mesh>
      {Object.values(cities).map((city) => (
        <CityMarker key={city.label} lat={city.lat} lon={city.lon} />
      ))}
      {routes.map(([from, to, delay]) => (
        <DeliveryArc
          key={`${from}-${to}-${delay}`}
          from={cities[from]}
          to={cities[to]}
          delay={delay}
          animate={spinning}
        />
      ))}
    </group>
  );
}

function CityMarker({ lat, lon }: { lat: number; lon: number }) {
  const pos = useMemo(() => latLonToVec3(lat, lon, RADIUS + 0.01), [lat, lon]);
  return (
    <group position={pos}>
      <mesh>
        <sphereGeometry args={[0.018, 16, 16]} />
        <meshBasicMaterial color="#ff2b2b" toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.042, 16, 16]} />
        <meshBasicMaterial
          color="#ff2b2b"
          transparent
          opacity={0.22}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function DeliveryArc({
  from,
  to,
  delay,
  animate,
}: {
  from: { lat: number; lon: number };
  to: { lat: number; lon: number };
  delay: number;
  animate: boolean;
}) {
  const comet = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);
  const tail = useRef<THREE.Group>(null);
  const curve = useMemo(
    () =>
      arcCurve(
        latLonToVec3(from.lat, from.lon, RADIUS + 0.012),
        latLonToVec3(to.lat, to.lon, RADIUS + 0.012),
      ),
    [from, to],
  );
  const { tube, glowTube } = useMemo(() => {
    return {
      tube: new THREE.TubeGeometry(curve, 80, 0.007, 8, false),
      glowTube: new THREE.TubeGeometry(curve, 80, 0.02, 8, false),
    };
  }, [curve]);

  useFrame(({ clock }) => {
    if (!animate || !comet.current || !glow.current) return;
    const cycle = 3.6;
    const t = ((clock.elapsedTime + delay) % cycle) / cycle;
    const eased = t * t * (3 - 2 * t);
    const p = curve.getPointAt(eased);
    comet.current.position.copy(p);
    glow.current.position.copy(p);
    const fade = Math.sin(t * Math.PI);
    (comet.current.material as THREE.MeshBasicMaterial).opacity = 0.45 + fade * 0.55;
    (glow.current.material as THREE.MeshBasicMaterial).opacity = 0.12 + fade * 0.32;
    tail.current?.children.forEach((child, i) => {
      const behind = Math.max(0, eased - (i + 1) * 0.028);
      child.position.copy(curve.getPointAt(behind));
      const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      mat.opacity = fade * (0.42 - i * 0.07);
    });
  });

  return (
    <group>
      <mesh geometry={glowTube}>
        <meshBasicMaterial
          color="#ff3b3b"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh geometry={tube}>
        <meshBasicMaterial
          color="#ff6a6a"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={glow}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial
          color="#ff4d4d"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <group ref={tail}>
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.015 - i * 0.0016, 12, 12]} />
            <meshBasicMaterial
              color="#ff8a8a"
              transparent
              opacity={0.3}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>
      <mesh ref={comet}>
        <sphereGeometry args={[0.022, 16, 16]} />
        <meshBasicMaterial color="#ffe7e7" toneMapped={false} />
      </mesh>
    </group>
  );
}

function Scene({ spinning }: { spinning: boolean }) {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.35} />
      <hemisphereLight args={["#9eb7d4", "#080808", 0.55]} />
      <directionalLight position={[6, 3.2, 4]} intensity={1.35} color="#fff6ea" />
      <directionalLight position={[-4, -2, -3]} intensity={0.25} color="#4a6a9a" />
      <Stars radius={80} depth={40} count={1800} factor={2.4} saturation={0} fade speed={0.3} />
      <Earth spinning={spinning} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        rotateSpeed={0.35}
        minPolarAngle={Math.PI * 0.28}
        maxPolarAngle={Math.PI * 0.72}
      />
    </>
  );
}

export function EarthGlobe() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full min-h-[420px] w-full">
      <Canvas
        camera={{ position: [0, 0.15, 5.15], fov: 32 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        resize={{ debounce: 80 }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.12;
          const lose = (event: Event) => event.preventDefault();
          gl.domElement.addEventListener("webglcontextlost", lose, false);
        }}
        aria-label="KEAAS delivery across India, the United Arab Emirates and the United Kingdom"
      >
        <Suspense fallback={null}>
          <Scene spinning={!reduce} />
        </Suspense>
      </Canvas>
      <p className="pointer-events-none absolute right-6 bottom-6 text-[0.62rem] tracking-[0.16em] text-white/45 uppercase">
        Active delivery · 3 countries
      </p>
    </div>
  );
}
