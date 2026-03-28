"use client";

import { motion } from "framer-motion";

const STATEMENTS = [
  "We don’t post. We make people stop.",
  "Cinematic reels that sell your food visually.",
  "AI-powered storytelling for maximum reach."
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 bg-secondary relative z-10 overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-accent1/10 rounded-full blur-[60px] lg:blur-[80px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto flex flex-col gap-24 relative z-10">
        {STATEMENTS.map((statement, idx) => (
          <motion.div
            key={idx}
            className={`text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight ${
              idx % 2 !== 0 ? "text-right text-transparent bg-clip-text bg-gradient-to-r from-accent2 to-white drop-shadow-lg" : "text-left text-white"
            }`}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {statement}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
