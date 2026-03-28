"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Video Editing",
    "Color Grading",
    "Motion Graphics",
    "Cinematic Storytelling",
    "Commercial Films",
    "Short Films"
  ];

  return (
    <section id="about" className="bg-primary py-32 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        
        {/* Left Col - Image */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            <span className="text-white/20 uppercase tracking-widest text-sm text-center">Daksh Portrait<br/>Placeholder</span>
          </div>
        </div>

        {/* Right Col - Text */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] font-bold tracking-tight mb-8 leading-tight text-white"
          >
            I’m Daksh, a filmmaker and video editor focused on <span className="text-accent italic">cinematic storytelling</span>, brand films, and emotionally driven visuals.<br/><br/>
            <span className="text-2xl md:text-3xl text-white/70 font-medium">My work blends editing, motion, and narrative to create compelling visual experiences.</span>
          </motion.h2>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="w-full h-px bg-white/10 my-10"
          />

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-textSecondary text-sm uppercase tracking-widest mb-6 border-l-2 border-accent pl-4">Expertise</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
              {skills.map((skill, i) => (
                <li key={i} className="text-lg font-medium tracking-wide text-white/90">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
