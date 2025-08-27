import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface EnvironmentalParticlesProps {
  count: number;
}

const EnvironmentalParticles = ({ count }: EnvironmentalParticlesProps) => {
  const pointsRef = useRef<THREE.Points>(null);

  // Pre-calculate particle positions and properties
  const { positions, velocities, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Position
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Velocity
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = Math.random() * 0.01 + 0.005;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

      // Colors (green variations)
      const greenVariation = Math.random();
      colors[i3] = 0.1 + greenVariation * 0.2; // Red
      colors[i3 + 1] = 0.6 + greenVariation * 0.4; // Green
      colors[i3 + 2] = 0.1 + greenVariation * 0.3; // Blue
    }

    return { positions, velocities, colors };
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Update positions based on velocity
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Reset particles that go too far
        if (positions[i3 + 1] > 25) {
          positions[i3] = (Math.random() - 0.5) * 100;
          positions[i3 + 1] = -25;
          positions[i3 + 2] = (Math.random() - 0.5) * 100;
        }

        // Wrap particles horizontally
        if (Math.abs(positions[i3]) > 50) {
          positions[i3] = -positions[i3];
        }
        if (Math.abs(positions[i3 + 2]) > 50) {
          positions[i3 + 2] = -positions[i3 + 2];
        }
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export default EnvironmentalParticles;
