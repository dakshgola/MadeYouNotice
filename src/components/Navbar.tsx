"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-500 ${
          isScrolled ? "bg-[#0B0B0B]/80 backdrop-blur-lg border-b border-white/5 shadow-xl" : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }} // Account for initial preloader
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="text-xl md:text-2xl font-black tracking-tighter text-white hover:text-accent1 transition-colors uppercase">
            Made You Notice
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium text-white/70 hover:text-accent1 transition-colors uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,255,178,0.4)] transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Elevate Your Presence
            </a>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7 hover:text-accent1 transition-colors" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#0B0B0B] bg-noise flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            <div className="px-6 h-20 flex items-center justify-between border-b border-white/5">
              <span className="text-xl font-black text-white tracking-tighter uppercase">Made You Notice</span>
              <button 
                className="text-white p-2 hover:text-accent1 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            
            <div className="flex flex-col px-8 py-16 gap-10">
              {NAV_LINKS.map((link, i) => (
                <motion.a 
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-4xl font-bold text-white hover:text-accent1 transition-colors uppercase tracking-tight"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.a 
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="mt-8 px-8 py-5 bg-gradient-to-r from-accent1 to-accent2 text-black text-center font-bold rounded-full shadow-[0_0_20px_rgba(0,255,178,0.2)] uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              >
                Elevate Your Presence
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
