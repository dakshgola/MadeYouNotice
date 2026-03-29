"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <section className="py-40 px-6 bg-secondary relative z-10 overflow-hidden border-y border-white/5 flex flex-col items-center justify-center text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-accent1/10 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10">
        
        {/* Glow Accent Line / Divider */}
        <motion.div 
          className="w-12 h-[2px] bg-gradient-to-r from-accent1 to-accent2 mx-auto mb-10 shadow-[0_0_15px_rgba(0,255,178,0.6)]"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white tracking-tight leading-tight uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          STOP POSTING. START<br className="hidden md:block" /> STANDING OUT.
        </motion.h2>

        <motion.h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2 drop-shadow-[0_0_15px_rgba(0,255,178,0.3)]">
            CONTENT DESIGNED TO<br className="hidden md:block" /> CAPTURE ATTENTION.
          </span>
        </motion.h3>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-textSecondary uppercase tracking-widest font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          BUILT FOR REACH. OPTIMIZED FOR GROWTH.
        </motion.p>

      </div>
    </section>
  );
}
