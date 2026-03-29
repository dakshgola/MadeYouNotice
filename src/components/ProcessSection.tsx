"use client";

import { motion } from "framer-motion";
import { Lightbulb, Camera, Rocket, TrendingUp } from "lucide-react";

const PROCESS = [
  { id: 1, title: "Understand", icon: Lightbulb, desc: "We dive into your brand and what makes it worth noticing." },
  { id: 2, title: "Create", icon: Camera, desc: "Scroll-stopping content designed to capture attention instantly." },
  { id: 3, title: "Launch", icon: Rocket, desc: "Strategic posting and optimization for maximum reach." },
  { id: 4, title: "Scale", icon: TrendingUp, desc: "We double down on what works and turn attention into growth." },
];

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-primary w-full relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
          <p className="text-textSecondary text-lg max-w-xl mx-auto">A seamless pipeline designed purely for attention.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.id}
              className="relative p-8 rounded-2xl bg-secondary border border-white/5 hover:border-accent2/40 transition-colors duration-500 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <span className="text-8xl font-black text-white">{step.id}</span>
              </div>
              
              <div className="w-14 h-14 rounded-full bg-accent1/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent1/20 transition-all duration-300">
                <step.icon className="w-6 h-6 text-accent1" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-textSecondary">{step.desc}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent2 to-accent1 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
