"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-primary py-40 px-6 md:px-12 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-medium tracking-widest uppercase mb-8"
        >
          Next Steps
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[60px] md:text-[100px] font-bold leading-[1.1] tracking-tighter mb-16 text-white"
        >
          Let's create something <span className="text-accent italic">cinematic.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a href="mailto:hello@example.com" className="px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
            Send an Email
          </a>
          <a href="#" className="px-10 py-5 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:border-accent hover:text-accent transition-all duration-300">
            Instagram
          </a>
          <a href="#" className="px-10 py-5 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:border-accent hover:text-accent transition-all duration-300">
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
