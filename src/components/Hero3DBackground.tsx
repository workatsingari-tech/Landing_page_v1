import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="hsl(42, 78%, 58%)"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);
  const mesh3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
    }
    
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = time * 0.15;
      mesh2Ref.current.rotation.z = time * 0.25;
      mesh2Ref.current.position.y = Math.cos(time * 0.4) * 0.4;
    }
    
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y = time * 0.25;
      mesh3Ref.current.rotation.z = time * 0.2;
      mesh3Ref.current.position.x = Math.sin(time * 0.3) * 0.5;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[-2, 0, -3]}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="hsl(42, 78%, 58%)"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <mesh ref={mesh2Ref} position={[2, 1, -4]}>
        <icosahedronGeometry args={[0.6, 0]} />
        <meshStandardMaterial
          color="hsl(215, 45%, 28%)"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      
      <mesh ref={mesh3Ref} position={[0, -1, -5]}>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial
          color="hsl(42, 78%, 58%)"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </>
  );
}

export const Hero3DBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="hsl(42, 78%, 58%)" />
        
        <FloatingParticles />
        <FloatingGeometry />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
