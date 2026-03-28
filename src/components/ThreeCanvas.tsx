"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import EyeModel from "./EyeModel";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

function ScrollEyes() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!group.current) return;
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const progress = Math.min(scrollY / 1000, 1);
    const targetScale = progress; // scales from 0 to 1
    group.current.scale.setScalar(THREE.MathUtils.lerp(group.current.scale.x, targetScale, 0.05));
  });

  return (
    <group ref={group} scale={0}>
      <EyeModel position={[-3, 2, -2]} scale={0.5} isBackground />
      <EyeModel position={[3.5, 1, -3]} scale={0.4} isBackground />
      <EyeModel position={[-2, -2.5, -1]} scale={0.6} isBackground />
      <EyeModel position={[2.5, -2, -2]} scale={0.45} isBackground />
      <EyeModel position={[-4, -1, -4]} scale={0.7} isBackground />
      <EyeModel position={[4, 0, -3]} scale={0.55} isBackground />
    </group>
  );
}

export default function ThreeCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00FFB2" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
        
        {/* Main Eye - static fallback or simpler on mobile? Just scaled down */}
        <EyeModel position={[0, 0, 0]} scale={isMobile ? 0.9 : 1.2} />
        
        {/* Background Eyes - Only active on Desktop to save performance */}
        {!isMobile && <ScrollEyes />}
      </Canvas>
    </div>
  );
}
