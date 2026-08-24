"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const RADIUS = 1.58;

const cities = {
  london: { lat: 51.51, lon: -0.13 },
  dubai: { lat: 25.2, lon: 55.27 },
  mumbai: { lat: 19.08, lon: 72.88 },
} as const;

const routes: [keyof typeof cities, keyof typeof cities, number][] = [
  ["london", "dubai", 0],
  ["dubai", "mumbai", 1.4],
  ["london", "mumbai", 2.8],
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
  mid.normalize().multiplyScalar(RADIUS + from.distanceTo(to) * 0.38);
  return new THREE.QuadraticBezierCurve3(from, mid, to);
}

function Earth({ spinning }: { spinning: boolean }) {
  const group = useRef<THREE.Group>(null);
  const spinY = useRef(2.4);
  const map = useTexture(publicUrl("/images/earth-dark.jpg"), (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
  });

  useFrame((_, delta) => {
    if (!group.current) return;
    if (spinning) spinY.current += delta * 0.055;
    group.current.rotation.set(0.32, spinY.current, 0.04);
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={map}
          roughness={0.55}
          metalness={0.12}
          color="#d8d8d8"
        />
      </mesh>
      <mesh scale={1.09}>
        <sphereGeometry args={[RADIUS, 48, 48]} />
        <shaderMaterial
          transparent
          depthWrite={false}
          side={THREE.BackSide}
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
              float i = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 4.0);
              gl_FragColor = vec4(0.75, 0.12, 0.1, 1.0) * i * 0.55;
            }
          `}
        />
      </mesh>
      {Object.entries(cities).map(([id, city]) => (
        <mesh key={id} position={latLonToVec3(city.lat, city.lon, RADIUS + 0.01)}>
          <sphereGeometry args={[0.016, 12, 12]} />
          <meshBasicMaterial color="#b40000" toneMapped={false} />
        </mesh>
      ))}
      {routes.map(([from, to, delay]) => (
        <Trail
          key={`${from}-${to}`}
          from={cities[from]}
          to={cities[to]}
          delay={delay}
          animate={spinning}
        />
      ))}
    </group>
  );
}

function Trail({
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
  const line = useRef<THREE.Mesh>(null);
  const curve = useMemo(
    () =>
      arcCurve(
        latLonToVec3(from.lat, from.lon, RADIUS + 0.012),
        latLonToVec3(to.lat, to.lon, RADIUS + 0.012),
      ),
    [from, to],
  );
  const tube = useMemo(
    () => new THREE.TubeGeometry(curve, 64, 0.008, 8, false),
    [curve],
  );

  useFrame(({ clock }) => {
    if (!animate || !comet.current || !line.current) return;
    const t = ((clock.elapsedTime + delay) % 4.6) / 4.6;
    const draw = t < 0.72 ? t / 0.72 : 1;
    const fade = t < 0.78 ? 1 : Math.max(0, 1 - (t - 0.78) / 0.22);
    tube.setDrawRange(0, Math.floor(tube.attributes.position.count * draw));
    comet.current.position.copy(curve.getPointAt(Math.min(0.999, draw)));
    comet.current.visible = fade > 0.05;
    const mat = line.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.9 * fade;
    const cmat = comet.current.material as THREE.MeshBasicMaterial;
    cmat.opacity = fade;
  });

  return (
    <group>
      <mesh ref={line} geometry={tube}>
        <meshBasicMaterial
          color="#e10600"
          transparent
          opacity={0.9}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={comet}>
        <sphereGeometry args={[0.024, 12, 12]} />
        <meshBasicMaterial color="#b40000" transparent toneMapped={false} />
      </mesh>
    </group>
  );
}

function Scene({ spinning }: { spinning: boolean }) {
  return (
    <>
      <ambientLight intensity={0.95} />
      <hemisphereLight args={["#ffffff", "#e6e6e6", 0.65]} />
      <directionalLight position={[4.5, 2.8, 3.2]} intensity={1.35} color="#ffffff" />
      <Earth spinning={spinning} />
    </>
  );
}

export function EarthGlobe() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full min-h-[420px] w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] left-1/2 h-8 w-[58%] -translate-x-1/2 rounded-[100%] bg-black/12 blur-2xl"
      />
      <Canvas
        camera={{ position: [0, 0.12, 4.7], fov: 34 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        resize={{ debounce: 80 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0xffffff, 0);
          const lose = (event: Event) => event.preventDefault();
          gl.domElement.addEventListener("webglcontextlost", lose, false);
        }}
        aria-label="KEAAS delivery across India, the United Arab Emirates and the United Kingdom"
      >
        <Suspense fallback={null}>
          <Scene spinning={!reduce} />
        </Suspense>
      </Canvas>
      <p className="pointer-events-none absolute right-2 bottom-2 text-[0.62rem] tracking-[0.16em] text-muted uppercase">
        Active delivery · 3 countries
      </p>
    </div>
  );
}
