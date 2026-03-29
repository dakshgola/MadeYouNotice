"use client";

import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-primary w-full relative z-10 flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[400px] bg-accent1/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Glow Accent Line / Divider */}
        <motion.div 
          className="w-12 h-[2px] bg-gradient-to-r from-accent1 to-accent2 mx-auto mb-12 shadow-[0_0_15px_rgba(0,255,178,0.6)]"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-white tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>

        <motion.div 
          className="space-y-10 text-lg md:text-xl text-textSecondary leading-relaxed md:leading-loose font-light mx-auto max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            We’re the team behind <strong className="font-semibold text-white">Made You Notice</strong> — a creative studio built to help local brands stand out in a world full of noise.
          </motion.p>
          
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="py-6">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
              We don’t just create content.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent1 to-accent2 drop-shadow-[0_0_10px_rgba(0,255,178,0.2)]">We create attention.</span>
            </p>
          </motion.div>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            From cinematic cafe shoots to high-impact reels and AI-powered visuals, everything we produce is designed to make people stop scrolling and start noticing your brand. Because in today’s market, visibility isn’t optional — it’s everything.
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            We work closely with cafes, outlets, and small businesses to turn their space, food, and vibe into content that attracts real customers — not just views. No complicated processes. No agency fluff. Just clean execution and results that matter.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="pt-6">
            <p className="text-xl md:text-2xl text-white font-medium">
              If your brand deserves more attention,<br />
              we make sure it gets it.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
