"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), { 
  ssr: false, 
  loading: () => <div className="absolute inset-0 bg-primary z-0" />
});

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary">
      <ThreeCanvas />
      
      <div className="z-10 flex flex-col items-center text-center px-6 max-w-4xl pointer-events-none">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          You Don’t Need Content.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2 drop-shadow-[0_0_15px_rgba(0,255,178,0.5)]">
            You Need Attention.
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-textSecondary mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          From content creation to social media management — we help your brand get noticed.
        </motion.p>
        
        <motion.button 
          className="pointer-events-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,255,178,0.5)] transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Elevate Your Presence
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-50">
        <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
