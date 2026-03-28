"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacity and y transforms for sections
  const firstOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const firstY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const secondOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
  const secondY = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [100, 0, -100]);

  const thirdOpacity = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [0, 1, 0]);
  const thirdY = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [100, 0, -100]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 cinematic-vignette">
      {/* Animated Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none animate-noise" />
      
      {/* Cinematic Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,166,35,0.15)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] animate-float-delayed pointer-events-none" />

      {/* 0% Scroll Text */}
      <motion.div
        style={{ opacity: firstOpacity, y: firstY }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <span className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium animate-pulse">Cinematic Storytelling</span>
        <h1 className="text-[60px] md:text-[100px] font-bold tracking-tighter leading-[1.1] mb-6 drop-shadow-2xl text-white">
          DAKSH
        </h1>
        <p className="text-xl md:text-2xl font-medium tracking-wide text-white/90 max-w-lg drop-shadow-xl mb-4">
          Filmmaker &bull; Video Editor &bull; Visual Storyteller
        </p>
        <p className="text-base md:text-lg text-white/60 max-w-md drop-shadow-md mb-10">
          I craft visual stories that turn moments into emotion.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center pointer-events-auto">
          <a href="#portfolio" className="px-8 py-4 rounded-full bg-white text-primary font-bold text-sm tracking-wide hover:bg-accent hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
            View Portfolio
          </a>
          <a href="#showreel" className="px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-wide hover:border-accent hover:text-accent transition-all duration-300">
            Watch Showreel
          </a>
        </div>
      </motion.div>

      {/* 30% Scroll Text */}
      <motion.div
        style={{ opacity: secondOpacity, y: secondY }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-[60px] md:text-[90px] font-bold leading-tight max-w-3xl drop-shadow-2xl text-white">
          Editing <span className="text-accent italic">Emotion</span> Into Motion.
        </h2>
      </motion.div>

      {/* 60% Scroll Text */}
      <motion.div
        style={{ opacity: thirdOpacity, y: thirdY }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-[60px] md:text-[90px] font-bold leading-tight max-w-3xl drop-shadow-2xl text-white">
          Films That Leave An <span className="text-accent italic">Impact</span>.
        </h2>
      </motion.div>
    </div>
  );
}
