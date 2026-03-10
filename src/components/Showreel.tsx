"use client";

import { Play } from "lucide-react";

export default function Showreel() {
  return (
    <section className="bg-primary py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[56px] font-bold tracking-tight">Showreel <span className="text-accent">2024</span></h2>
        </div>

        {/* Video Container Placeholder */}
        <div className="relative w-full aspect-video bg-neutral-900 rounded-3xl overflow-hidden group cursor-pointer border border-white/5 shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-500 ease-out border border-white/20 group-hover:border-accent">
                <Play className="w-10 h-10 text-white ml-2" />
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-white/20 font-medium tracking-widest text-lg">Vimeo Embed Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
