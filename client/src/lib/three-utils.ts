import * as THREE from "three";

// Utility functions for Three.js operations

export const createFloatingAnimation = (
  object: THREE.Object3D,
  amplitude: number = 1,
  frequency: number = 1,
  offset: number = 0
) => {
  const originalY = object.position.y;
  
  return (time: number) => {
    object.position.y = originalY + Math.sin(time * frequency + offset) * amplitude;
  };
};

export const createRotationAnimation = (
  object: THREE.Object3D,
  speedX: number = 0,
  speedY: number = 0,
  speedZ: number = 0
) => {
  return (deltaTime: number) => {
    object.rotation.x += speedX * deltaTime;
    object.rotation.y += speedY * deltaTime;
    object.rotation.z += speedZ * deltaTime;
  };
};

export const createPulseAnimation = (
  object: THREE.Object3D,
  minScale: number = 0.8,
  maxScale: number = 1.2,
  frequency: number = 1
) => {
  const originalScale = object.scale.clone();
  
  return (time: number) => {
    const scale = minScale + (maxScale - minScale) * (Math.sin(time * frequency) + 1) / 2;
    object.scale.copy(originalScale).multiplyScalar(scale);
  };
};

export const createParticleSystem = (
  count: number,
  range: number = 50,
  colors: THREE.Color[] = [new THREE.Color('#22c55e'), new THREE.Color('#16a34a')]
) => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const colorArray = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // Random positions
    positions[i3] = (Math.random() - 0.5) * range;
    positions[i3 + 1] = (Math.random() - 0.5) * range;
    positions[i3 + 2] = (Math.random() - 0.5) * range;

    // Random velocities
    velocities[i3] = (Math.random() - 0.5) * 0.02;
    velocities[i3 + 1] = Math.random() * 0.01 + 0.005;
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

    // Random colors from the provided palette
    const color = colors[Math.floor(Math.random() * colors.length)];
    colorArray[i3] = color.r;
    colorArray[i3 + 1] = color.g;
    colorArray[i3 + 2] = color.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

  const material = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });

  return {
    points: new THREE.Points(geometry, material),
    velocities,
    update: () => {
      const positions = geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Reset particles that go too far
        if (positions[i3 + 1] > range / 2) {
          positions[i3] = (Math.random() - 0.5) * range;
          positions[i3 + 1] = -range / 2;
          positions[i3 + 2] = (Math.random() - 0.5) * range;
        }

        // Wrap particles horizontally
        if (Math.abs(positions[i3]) > range / 2) {
          positions[i3] = -positions[i3];
        }
        if (Math.abs(positions[i3 + 2]) > range / 2) {
          positions[i3 + 2] = -positions[i3 + 2];
        }
      }

      geometry.attributes.position.needsUpdate = true;
    }
  };
};

export const createJholaBagGeometry = () => {
  const group = new THREE.Group();

  // Bag body
  const bodyGeometry = new THREE.BoxGeometry(1.5, 2, 0.8);
  const bodyMaterial = new THREE.MeshLambertMaterial({ color: '#2d5a3d' });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  group.add(body);

  // Bag handles
  const handleGeometry = new THREE.TorusGeometry(0.3, 0.1, 8, 16);
  const handleMaterial = new THREE.MeshLambertMaterial({ color: '#1f4d32' });
  
  const leftHandle = new THREE.Mesh(handleGeometry, handleMaterial);
  leftHandle.position.set(-0.6, 1.2, 0);
  group.add(leftHandle);

  const rightHandle = new THREE.Mesh(handleGeometry, handleMaterial);
  rightHandle.position.set(0.6, 1.2, 0);
  group.add(rightHandle);

  // Eco symbol
  const symbolGeometry = new THREE.CircleGeometry(0.4, 16);
  const symbolMaterial = new THREE.MeshLambertMaterial({ color: '#22c55e' });
  const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
  symbol.position.set(0, 0, 0.41);
  group.add(symbol);

  return group;
};

export const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const lerp = (start: number, end: number, t: number): number => {
  return start * (1 - t) + end * t;
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

export const map = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
): number => {
  return toMin + ((value - fromMin) / (fromMax - fromMin)) * (toMax - toMin);
};
