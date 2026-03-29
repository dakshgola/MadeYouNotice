"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  { id: 1, title: "Cinematic Shoot", src: "/placeholder1.jpg" },
  { id: 2, title: "AI Reel", src: "/placeholder2.jpg" },
  { id: 3, title: "Viral Edit", src: "/placeholder3.jpg" },
  { id: 4, title: "Brand Story", src: "/placeholder4.jpg" },
];

export default function ShowcaseSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-primary w-full relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Recent Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-secondary border border-transparent hover:border-accent1/50 transition-colors duration-500 cursor-pointer subtle-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="w-full h-full bg-noise opacity-30 absolute inset-0 mix-blend-overlay z-0" />
              <div className="w-full h-full bg-gradient-to-br from-accent2/20 to-accent1/10 group-hover:scale-105 transition-transform duration-700 ease-out z-0" />
              
              <div className="absolute bottom-6 left-6 z-20">
                <span className="inline-block px-4 py-1 rounded-full bg-black/60 backdrop-blur-md text-sm text-textPrimary font-medium border border-white/10 group-hover:border-accent1/50 transition-colors">
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
