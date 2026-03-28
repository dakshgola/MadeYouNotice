"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export default function EyeModel({ position = [0, 0, 0], scale = 1, isBackground = false }: { position?: [number, number, number], scale?: number, isBackground?: boolean }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (!group.current) return;
    
    if (!isBackground) {
      // Main eye follows cursor
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.1);
    } else {
      // background eyes slowly rotate
      group.current.rotation.y += delta * 0.2;
      group.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Float floatIntensity={isBackground ? 2 : 0.5} rotationIntensity={isBackground ? 1 : 0.2}>
      <group ref={group} position={position as any} scale={scale}>
        {/* Sclera / Outer Shell (Dark/Glassy) - Reduced Poly */}
        <mesh>
          <sphereGeometry args={[1, 16, 16]} />
          <meshPhysicalMaterial 
            color="#111111" 
            transparent 
            opacity={0.8} 
            roughness={0.2} 
            transmission={0.8} 
            thickness={0.5} 
          />
        </mesh>
        
        {/* Iris (Neon Green & Blue) - Reduced Poly */}
        <mesh position={[0, 0, 0.6]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.3, 0.1, 8, 16]} />
          <meshStandardMaterial color="#00FFB2" emissive="#00FFB2" emissiveIntensity={1.5} />
        </mesh>
        
        <mesh position={[0, 0, 0.65]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.2, 0.05, 8, 16]} />
          <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.8} />
        </mesh>

        {/* Pupil - Reduced Poly */}
        <mesh position={[0, 0, 0.75]}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshStandardMaterial color="#0B0B0B" roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
}
