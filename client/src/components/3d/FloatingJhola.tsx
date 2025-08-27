import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface FloatingJholaProps {
  position: [number, number, number];
  scale: number;
}

const FloatingJhola = ({ position, scale }: FloatingJholaProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  // Pre-calculate random values to avoid re-renders
  const randomOffset = useMemo(() => ({
    amplitude: 0.5 + Math.random() * 0.5,
    frequency: 0.5 + Math.random() * 0.3,
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    phaseZ: Math.random() * Math.PI * 2,
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Floating animation
      meshRef.current.position.y = position[1] + 
        Math.sin(time * randomOffset.frequency + randomOffset.phaseY) * randomOffset.amplitude;
      
      // Gentle rotation
      meshRef.current.rotation.x = Math.sin(time * 0.3 + randomOffset.phaseX) * 0.1;
      meshRef.current.rotation.z = Math.cos(time * 0.2 + randomOffset.phaseZ) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }

    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Jhola Bag - represented as a cloth bag shape */}
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* Bag body */}
        <group>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.5, 2, 0.8]} />
            <meshLambertMaterial color="#2d5a3d" />
          </mesh>
          
          {/* Bag handles */}
          <mesh position={[-0.6, 1.2, 0]}>
            <torusGeometry args={[0.3, 0.1, 8, 16]} />
            <meshLambertMaterial color="#1f4d32" />
          </mesh>
          <mesh position={[0.6, 1.2, 0]}>
            <torusGeometry args={[0.3, 0.1, 8, 16]} />
            <meshLambertMaterial color="#1f4d32" />
          </mesh>
          
          {/* Eco symbol on bag */}
          <mesh position={[0, 0, 0.41]}>
            <circleGeometry args={[0.4, 16]} />
            <meshLambertMaterial color="#22c55e" />
          </mesh>
        </group>
      </mesh>

      {/* Floating text */}
      <Text
        ref={textRef}
        position={[0, 3, 0]}
        fontSize={0.5}
        color="#22c55e"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.json"
      >
        ECO-FRIENDLY
      </Text>

      {/* Particle effect around jhola */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4,
            (Math.random() - 0.5) * 4
          ]}
        >
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshLambertMaterial color="#22c55e" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingJhola;
