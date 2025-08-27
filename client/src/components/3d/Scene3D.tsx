import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

import FloatingJhola from "./FloatingJhola";
import EnvironmentalParticles from "./EnvironmentalParticles";

const Scene3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Environment and Lighting */}
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={1000} factor={4} saturation={0} fade speed={1} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} color="#ffffff" />
      
      {/* Main directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Green accent light */}
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="#22c55e" />
      <pointLight position={[10, -5, 10]} intensity={0.3} color="#16a34a" />

      {/* Floating Jhola Bags */}
      <FloatingJhola position={[-5, 2, -8]} scale={0.8} />
      <FloatingJhola position={[6, -1, -12]} scale={1.2} />
      <FloatingJhola position={[0, 4, -15]} scale={0.6} />
      <FloatingJhola position={[-8, -2, -20]} scale={1.0} />
      <FloatingJhola position={[8, 3, -18]} scale={0.9} />

      {/* Environmental Particles */}
      <EnvironmentalParticles count={200} />

      {/* Ground plane with subtle transparency */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshLambertMaterial color="#0a0f0a" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default Scene3D;
