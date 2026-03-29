"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-primary relative z-10 w-full">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent subtle-glow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 rounded-3xl bg-noise opacity-20 pointer-events-none" />
          
          <div className="rounded-3xl bg-[#0e0e0e] p-8 md:p-16 flex flex-col md:flex-row gap-12 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-64 h-64 bg-accent1/10 blur-[50px] rounded-full pointer-events-none" />
            
            <div className="flex-1 z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let’s Grow <br/>
                <span className="text-accent1">Your Brand</span>
              </h2>
              <p className="text-textSecondary mb-10 text-lg">
                Content creation and social media management for businesses looking to build a strong online presence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-4 bg-accent1 text-black font-bold rounded-full hover:shadow-[0_0_25px_rgba(0,255,178,0.4)] transition-all hover:-translate-y-1 text-center"
                >
                  Chat on WhatsApp
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-center backdrop-blur-md"
                >
                  View Our Work
                </a>
              </div>
            </div>

            <div className="flex-1 z-10">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent1/50 transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Your Brand / Business Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent1/50 transition-colors"
                />
                <textarea 
                  placeholder="Tell us about your requirement" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-accent1/50 transition-colors resize-none"
                />
                <button 
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold rounded-xl mt-2 hover:bg-white/90 hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
