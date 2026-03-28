"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutTransition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-32"
    >
      {/* Abstract radial shapes behind */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      {/* Center Monochrome Portrait Image Placeholder */}
      <motion.div 
        style={{ y }}
        className="relative z-10 w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-2xl grayscale contrast-125 mx-auto"
      >
        <div className="absolute inset-0 bg-neutral-900 border border-white/10 flex items-center justify-center">
            <span className="text-white/30 text-sm tracking-widest uppercase">Portrait Placeholder</span>
        </div>
      </motion.div>

      {/* Large Horizontal Scrolling Text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-[200vw] z-20 pointer-events-none mix-blend-difference">
        <motion.div style={{ x }} className="flex whitespace-nowrap">
          {Array(8).fill("daksh").map((text, i) => (
            <span key={i} className="text-[150px] md:text-[200px] font-bold text-white uppercase px-8 leading-none opacity-80">
              {text} &bull;
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
