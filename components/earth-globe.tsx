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
  const spinY = useRef(-2.18);
  const map = useTexture(publicUrl("/images/earth-dark.jpg"), (tex) => {
    tex.colorSpace = THREE.NoColorSpace;
    tex.anisotropy = 8;
  });
  const uniforms = useMemo(
    () => ({
      uMap: { value: map },
      uLight: { value: new THREE.Vector3(-0.35, 0.4, 1.0).normalize() },
    }),
    [map],
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    if (spinning) spinY.current += delta * 0.035;
    group.current.rotation.set(0.2, spinY.current, 0.02);
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS, 64, 64]} />
        <shaderMaterial
          uniforms={uniforms}
          vertexShader={`
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
              vUv = uv;
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            uniform sampler2D uMap;
            uniform vec3 uLight;
            varying vec2 vUv;
            varying vec3 vNormal;
            void main() {
              vec3 sampleColor = texture2D(uMap, vUv).rgb;
              float luminance = dot(sampleColor, vec3(0.299, 0.587, 0.114));
              float land = 1.0 - smoothstep(0.018, 0.065, luminance);
              vec2 cell = fract(gl_FragCoord.xy / 3.25) - 0.5;
              float stipple = 1.0 - smoothstep(0.16, 0.29, length(cell));
              float landInk = mix(0.34, 1.0, stipple);
              vec3 ocean = vec3(0.988, 0.988, 0.985);
              vec3 ground = vec3(0.72, 0.73, 0.74) * landInk + vec3(0.26) * (1.0 - landInk);
              vec3 col = mix(ocean, ground, land * 0.78);
              float diff = clamp(dot(normalize(vNormal), uLight), 0.0, 1.0);
              float rim = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.0);
              col *= 0.92 + 0.08 * diff;
              col = mix(col, vec3(1.0), rim * 0.58);
              gl_FragColor = vec4(col, 0.96);
            }
          `}
          transparent
        />
      </mesh>
      <mesh scale={1.035}>
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
              float i = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.2);
              gl_FragColor = vec4(0.68, 0.68, 0.68, 1.0) * i * 0.16;
            }
          `}
        />
      </mesh>
      {Object.entries(cities).map(([id, city]) => (
        <group key={id} position={latLonToVec3(city.lat, city.lon, RADIUS + 0.018)}>
          <mesh>
            <sphereGeometry args={[0.022, 16, 16]} />
            <meshBasicMaterial color="#ef1b16" toneMapped={false} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial
              color="#ef1b16"
              transparent
              opacity={0.18}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
        </group>
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
    () => new THREE.TubeGeometry(curve, 96, 0.005, 6, false),
    [curve],
  );
  const guide = useMemo(
    () => new THREE.TubeGeometry(curve, 96, 0.003, 5, false),
    [curve],
  );

  useFrame(({ clock }) => {
    if (!animate || !comet.current || !line.current) return;
    const t = ((clock.elapsedTime + delay) % 5.4) / 5.4;
    const draw = t < 0.78 ? t / 0.78 : 1;
    const fade = t < 0.82 ? 1 : Math.max(0, 1 - (t - 0.82) / 0.18);
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
      <mesh geometry={guide}>
        <meshBasicMaterial
          color="#df1713"
          transparent
          opacity={0.22}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={line} geometry={tube}>
        <meshBasicMaterial
          color="#ef1b16"
          transparent
          opacity={0.82}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={comet}>
        <sphereGeometry args={[0.026, 12, 12]} />
        <meshBasicMaterial color="#ff2a24" transparent toneMapped={false} />
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
    <div className="relative h-full min-h-[320px] w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[9%] left-1/2 h-10 w-[54%] -translate-x-1/2 rounded-[100%] bg-black/8 blur-3xl"
      />
      <Canvas
        camera={{ position: [0, 0.08, 5.35], fov: 34 }}
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
      <p className="pointer-events-none absolute right-[12%] bottom-2 hidden text-[0.58rem] tracking-[0.16em] text-muted uppercase sm:block">
        Active delivery · 3 countries
      </p>
    </div>
  );
}
