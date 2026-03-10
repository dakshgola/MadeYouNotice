"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Commercial Film", category: "Automotive", span: "row-span-2 col-span-1 md:col-span-2 h-[600px]", isAccent: false },
  { id: 2, title: "Narrative Short", category: "Drama", span: "row-span-1 col-span-1 md:col-span-1 h-[280px]", isAccent: true },
  { id: 3, title: "Brand Reel", category: "Fashion", span: "row-span-1 col-span-1 md:col-span-1 h-[280px]", isAccent: false },
  { id: 4, title: "Travel Diary", category: "Documentary", span: "row-span-1 col-span-1 md:col-span-2 h-[400px]", isAccent: false },
  { id: 5, title: "Music Video", category: "Entertainment", span: "row-span-1 col-span-1 h-[400px]", isAccent: false },
  { id: 6, title: "Experimental", category: "Art", span: "row-span-1 col-span-1 h-[400px]", isAccent: false },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-primary py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[56px] font-bold tracking-tight mb-20 whitespace-pre-line">Selected<br/>Works.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {projects.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={project.id}
              className={`relative rounded-2xl overflow-hidden group border border-white/10 ${project.span} ${project.isAccent ? 'bg-accent/20' : 'bg-neutral-900'}`}
            >
              {/* Background Mock */}
              <div className="absolute inset-0 bg-black/20 group-hover:scale-105 transition-transform duration-700 ease-out" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <p className="text-accent font-medium text-sm mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <span className="text-sm font-medium tracking-wide border-b border-white pb-1">View Project</span>
                </div>
              </div>

              {/* Glassmorphism shine effect */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
