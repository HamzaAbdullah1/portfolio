import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GREEN = '#a8f45f';
const NODE_COUNT = 90;
const RADIUS = 1.5;

function NeuralCore() {
  const group = useRef<THREE.Group>(null!);
  const core = useRef<THREE.Mesh>(null!);
  const ringA = useRef<THREE.Mesh>(null!);
  const ringB = useRef<THREE.Mesh>(null!);

  // Nodes spread evenly on a sphere + lines between close nodes
  const { nodes, lineGeo } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const radius = RADIUS + (Math.random() - 0.5) * 0.25;
      pts.push(
        new THREE.Vector3(
          Math.cos(t) * r * radius,
          y * radius,
          Math.sin(t) * r * radius
        )
      );
    }

    const positions: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.9) {
          positions.push(pts[i].x, pts[i].y, pts[i].z);
          positions.push(pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    return { nodes: pts, lineGeo: geo };
  }, []);

  useFrame(({ clock, pointer }, delta) => {
    const t = clock.getElapsedTime();

    // slow rotation + soft mouse parallax
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.35,
      0.05
    );
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      pointer.x * 0.25,
      0.05
    );

    // pulsing core
    const pulse = 1 + Math.sin(t * 1.6) * 0.06;
    core.current.scale.setScalar(pulse);

    ringA.current.rotation.z += delta * 0.4;
    ringB.current.rotation.z -= delta * 0.3;
  });

  return (
    <group ref={group}>
      {/* connections */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color={GREEN} transparent opacity={0.3} />
      </lineSegments>

      {/* nodes */}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshBasicMaterial color="#d6ff9e" />
        </mesh>
      ))}

      {/* glowing core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[0.7, 2]} />
        <meshBasicMaterial color={GREEN} wireframe transparent opacity={0.85} />
      </mesh>

      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial
          color={GREEN}
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* outer halo */}
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial
          color={GREEN}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* orbit rings */}
      <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.1, 0.008, 8, 160]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.55} />
      </mesh>

      <mesh ref={ringB} rotation={[Math.PI / 1.7, 0.6, 0]}>
        <torusGeometry args={[2.35, 0.006, 8, 160]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 420 }}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <NeuralCore />
      </Canvas>
    </div>
  );
}