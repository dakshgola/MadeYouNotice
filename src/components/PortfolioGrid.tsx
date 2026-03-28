"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id: 1, title: "Commercial Film", category: "Automotive", span: "row-span-2 col-span-1 md:col-span-2 h-[600px]", isAccent: false, link: "#" },
  { id: 2, title: "Brand Reel", category: "Fashion", span: "row-span-1 col-span-1 md:col-span-1 h-[280px]", isAccent: true, link: "#" },
  { id: 3, title: "Travel Film", category: "Documentary", span: "row-span-1 col-span-1 md:col-span-1 h-[280px]", isAccent: false, link: "#" },
  { id: 4, title: "Short Film", category: "Narrative", span: "row-span-1 col-span-1 md:col-span-2 h-[400px]", isAccent: false, link: "#" },
  { id: 5, title: "Fashion Reel", category: "Editorial", span: "row-span-1 col-span-1 h-[400px]", isAccent: false, link: "#" },
  { id: 6, title: "Music Video", category: "Entertainment", span: "row-span-1 col-span-1 h-[400px]", isAccent: false, link: "#" },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-primary py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <h2 className="text-[56px] font-bold tracking-tight whitespace-pre-line text-white shadow-xl">Selected<br/>Works.</h2>
          <a
            href="https://drive.google.com/drive/folders/1fDPE7QHy5Mj0oBhevDzFhelM1x31rUGJ?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-md"
          >
            View Full Portfolio
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={project.id}
              className={`relative rounded-2xl overflow-hidden group border border-white/10 ${project.span} ${project.isAccent ? 'bg-accent/20' : 'bg-neutral-900'} hover:subtle-glow transition-shadow duration-500`}
            >
              {/* Background Mock */}
              <div className="absolute inset-0 bg-black/20 group-hover:scale-105 transition-transform duration-700 ease-out" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <p className="text-accent font-medium text-sm mb-2">{project.category}</p>
                <h3 className="text-3xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
                  {project.title}
                </h3>
                
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <span className="text-sm font-medium tracking-wide border-b border-accent text-accent pb-1 flex items-center w-fit gap-1">
                    Watch Film <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Glassmorphism shine effect */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
