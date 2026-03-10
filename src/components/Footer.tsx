"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left */}
        <div>
          <h3 className="text-3xl font-bold tracking-tighter text-white mb-2">DAKSH<span className="text-accent">.</span></h3>
          <p className="text-textSecondary text-sm max-w-sm">
            Filmmaker and Video Editor creating cinematic visual experiences for brands and narratives.
          </p>
        </div>

        {/* Center / Links */}
        <div className="flex gap-12 text-sm font-medium">
          <div className="flex flex-col gap-4">
            <span className="text-accent uppercase tracking-widest text-xs">Pages</span>
            <Link href="#" className="text-textSecondary hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="text-textSecondary hover:text-white transition-colors">About</Link>
            <Link href="#portfolio" className="text-textSecondary hover:text-white transition-colors">Portfolio</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-accent uppercase tracking-widest text-xs">Socials</span>
            <a href="#" className="text-textSecondary hover:text-white transition-colors flex items-center gap-1 group">
              Instagram <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#" className="text-textSecondary hover:text-white transition-colors flex items-center gap-1 group">
              Vimeo <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#" className="text-textSecondary hover:text-white transition-colors flex items-center gap-1 group">
              LinkedIn <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-textSecondary gap-4">
        <p>&copy; {currentYear} Daksh. All rights reserved.</p>
        <p>Designed with cinematic precision.</p>
      </div>
    </footer>
  );
}
