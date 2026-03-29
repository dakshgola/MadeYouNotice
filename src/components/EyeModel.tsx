"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function EyeModel({ position = [0, 0, 0], scale = 1, isBackground = false }: { position?: [number, number, number], scale?: number, isBackground?: boolean }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (!group.current) return;
    
    let needsUpdate = false;

    if (!isBackground) {
      // Main eye follows cursor
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      const currentY = group.current.rotation.y;
      const currentX = group.current.rotation.x;
      
      if (Math.abs(targetX - currentY) > 0.01 || Math.abs(-targetY - currentX) > 0.01) {
        group.current.rotation.y = THREE.MathUtils.lerp(currentY, targetX, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(currentX, -targetY, 0.1);
        needsUpdate = true;
      }
    } else {
      // background eyes rotate only slightly, no need to invalidate constantly as they are decorative
    }

    if (needsUpdate) {
      state.invalidate();
    }
  });

  return (
    <Float floatIntensity={isBackground ? 0.5 : 0.2} rotationIntensity={isBackground ? 0.2 : 0.1} speed={1}>
      <group ref={group} position={position as any} scale={scale}>
        {/* Sclera / Outer Shell (Dark/Glassy) - Reduced Poly */}
        <mesh receiveShadow={false} castShadow={false}>
          {/* Drastically reduced polygon count */}
          <sphereGeometry args={[1, 12, 12]} />
          {/* Replaced heavy physical material with standard for much better performance */}
          <meshStandardMaterial 
            color="#111111" 
            transparent 
            opacity={0.8} 
            roughness={0.5} 
          />
        </mesh>
        
        {/* Iris (Neon Green & Blue) - Reduced Poly */}
        <mesh position={[0, 0, 0.6]} rotation={[0, 0, 0]} receiveShadow={false} castShadow={false}>
          <torusGeometry args={[0.3, 0.1, 4, 12]} />
          <meshBasicMaterial color="#00FFB2" />
        </mesh>
        
        <mesh position={[0, 0, 0.65]} rotation={[0, 0, 0]} receiveShadow={false} castShadow={false}>
          <torusGeometry args={[0.2, 0.05, 4, 12]} />
          <meshBasicMaterial color="#3B82F6" />
        </mesh>

        {/* Pupil - Reduced Poly */}
        <mesh position={[0, 0, 0.75]} receiveShadow={false} castShadow={false}>
          <sphereGeometry args={[0.15, 6, 6]} />
          <meshBasicMaterial color="#0B0B0B" />
        </mesh>
      </group>
    </Float>
  );
}
