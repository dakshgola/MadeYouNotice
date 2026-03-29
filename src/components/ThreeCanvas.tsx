"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import EyeModel from "./EyeModel";
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";

function ScrollEyes() {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ invalidate }) => {
    if (!group.current) return;
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const progress = Math.min(scrollY / 1000, 1);
    const targetScale = progress; // scales from 0 to 1
    const currentScale = group.current.scale.x;
    
    // Throttle invalidation to only when actually changing
    if (Math.abs(targetScale - currentScale) > 0.001) {
      group.current.scale.setScalar(THREE.MathUtils.lerp(currentScale, targetScale, 0.05));
      invalidate();
    }
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

  // Mobile Fallback: Completely remove WebGL and use purely CSS / static image
  if (isMobile) {
    return (
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div 
          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full border-[8px] border-accent1/20 animate-spin relative"
          style={{ animationDuration: '8s' }}
        >
          <div 
            className="absolute inset-0 m-auto w-16 h-16 rounded-full border-[4px] border-accent2/40 animate-spin"
            style={{ animationDuration: '3s', animationDirection: 'reverse' }}
          ></div>
          <div className="absolute top-1 right-2 w-4 h-4 rounded-full bg-accent1 blur-sm opacity-80"></div>
          <div className="absolute bottom-1 left-2 w-5 h-5 rounded-full bg-accent2 blur-sm opacity-80"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Aggressive render loop limits and reduced pixel ratio */}
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1]} frameloop="demand" shadows={false}>
        <ambientLight intensity={0.8} />
        {/* Simplified lights */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00FFB2" />
        <directionalLight position={[-5, -10, -5]} intensity={1} color="#3B82F6" />
        
        {/* Main Eye */}
        <EyeModel position={[0, 0, 0]} scale={1.2} />
        
        {/* Background Eyes */}
        <ScrollEyes />
      </Canvas>
    </div>
  );
}
