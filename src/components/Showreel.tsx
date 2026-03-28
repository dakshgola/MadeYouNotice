"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="showreel" className="bg-primary py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-[56px] font-bold tracking-tight">Showreel <span className="text-accent">2024</span></h2>
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video bg-neutral-900 rounded-3xl overflow-hidden group border border-white/5 shadow-2xl">
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/60 group-hover:bg-black/40 transition-all duration-500 z-20 cursor-pointer backdrop-blur-sm"
              onClick={() => setIsPlaying(true)}
            >
              <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20" />
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-500 ease-out border border-white/20 group-hover:border-accent shadow-2xl">
                  <Play className="w-10 h-10 text-white ml-2" />
              </div>
            </div>
          )}
          
          <iframe 
            src="https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID_HERE/preview" 
            className="absolute inset-0 w-full h-full border-0 z-10" 
            allow="autoplay"
            title="Daksh Showreel"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
