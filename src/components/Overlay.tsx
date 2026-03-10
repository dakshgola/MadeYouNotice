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
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10">
      {/* 0% Scroll Text */}
      <motion.div
        style={{ opacity: firstOpacity, y: firstY }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-[80px] md:text-[120px] font-bold tracking-tighter leading-none mb-6 drop-shadow-2xl text-white">
          DAKSH
        </h1>
        <p className="text-xl md:text-2xl font-medium tracking-wide text-white/80 max-w-lg shadow-black drop-shadow-xl">
          Cinematic Filmmaker & Video Editor
        </p>
      </motion.div>

      {/* 30% Scroll Text */}
      <motion.div
        style={{ opacity: secondOpacity, y: secondY }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center px-8 md:px-24"
      >
        <h2 className="text-[60px] md:text-[90px] font-bold leading-tight max-w-3xl drop-shadow-2xl text-white">
          I turn <span className="text-accent italic">moments</span> into stories.
        </h2>
      </motion.div>

      {/* 60% Scroll Text */}
      <motion.div
        style={{ opacity: thirdOpacity, y: thirdY }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-end justify-center px-8 md:px-24 text-right"
      >
        <h2 className="text-[60px] md:text-[90px] font-bold leading-tight max-w-3xl drop-shadow-2xl text-white">
          Crafting <span className="text-accent italic">emotion</span> through editing.
        </h2>
      </motion.div>
    </div>
  );
}
