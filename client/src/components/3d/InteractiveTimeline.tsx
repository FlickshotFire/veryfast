import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const InteractiveTimeline = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const timelineData = [
    { year: 2013, event: "NGO Founded", description: "Raghukul Aryawart established" },
    { year: 2015, event: "First Jhola Campaign", description: "Started anti-plastic movement" },
    { year: 2017, event: "Women Empowerment", description: "Employment opportunities created" },
    { year: 2019, event: "Education Initiative", description: "Free BPL education started" },
    { year: 2022, event: "Rex Karamveer Award", description: "Dr. Anubha honored" },
    { year: 2025, event: "Rashtriya Ratan Award", description: "National recognition" },
  ];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]}>
      {timelineData.map((item, index) => {
        const angle = (index / timelineData.length) * Math.PI * 2;
        const radius = 8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (index - timelineData.length / 2) * 2;

        return (
          <group key={item.year} position={[x, y, z]}>
            {/* Timeline node */}
            <mesh
              onPointerOver={() => setHoveredYear(item.year)}
              onPointerOut={() => setHoveredYear(null)}
            >
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshLambertMaterial 
                color={hoveredYear === item.year ? "#22c55e" : "#16a34a"}
                emissive={hoveredYear === item.year ? "#0f5132" : "#000000"}
              />
            </mesh>

            {/* Year text */}
            <Text
              position={[0, 0.8, 0]}
              fontSize={0.4}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              font="/fonts/inter.json"
            >
              {item.year}
            </Text>

            {/* Event text */}
            <Text
              position={[0, -0.8, 0]}
              fontSize={0.2}
              color="#22c55e"
              anchorX="center"
              anchorY="middle"
              font="/fonts/inter.json"
              maxWidth={3}
            >
              {item.event}
            </Text>

            {/* Description (shown on hover) */}
            {hoveredYear === item.year && (
              <Text
                position={[0, -1.5, 0]}
                fontSize={0.15}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                font="/fonts/inter.json"
                maxWidth={4}
                textAlign="center"
              >
                {item.description}
              </Text>
            )}

            {/* Connection line to center */}
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, radius, 8]} />
              <meshLambertMaterial color="#22c55e" transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}

      {/* Central hub */}
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshLambertMaterial color="#22c55e" emissive="#0f5132" />
      </mesh>

      <Text
        position={[0, 0, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.json"
      >
        11+ YEARS
      </Text>
    </group>
  );
};

export default InteractiveTimeline;
