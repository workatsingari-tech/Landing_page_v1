import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport, mouse } = useThree();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const distance = 2;

    for (let i = 0; i < 1000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      let x = distance * Math.sin(theta) * Math.cos(phi)
      let y = distance * Math.sin(theta) * Math.sin(phi);
      let z = distance * Math.cos(theta);

      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;

      const t = state.clock.getElapsedTime();
      pointsRef.current.position.x = Math.sin(t * 0.1) * 0.2;
      pointsRef.current.position.y = Math.cos(t * 0.1) * 0.2;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="hsl(210, 100%, 75%)"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      const x = (mouse.x * viewport.width) / 20;
      const y = (mouse.y * viewport.height) / 20;
      meshRef.current.rotation.x += 0.005 * (y - meshRef.current.rotation.x);
      meshRef.current.rotation.y += 0.005 * (x - meshRef.current.rotation.y);
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial
        color="hsl(210, 60%, 50%)"
        wireframe
        transparent
        opacity={0.15}
        emissive="hsl(210, 80%, 30%)"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="hsl(210, 100%, 80%)" />
        
        <FloatingParticles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};
