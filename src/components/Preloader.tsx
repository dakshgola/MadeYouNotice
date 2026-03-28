"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3D rendering can block main thread, so give it ~1.5s to initialize before revealing
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center">
            <motion.div 
              className="w-12 h-12 border-t-2 border-r-2 border-accent1 rounded-full animate-spin"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span 
              className="mt-6 text-sm tracking-[0.3em] text-accent1 uppercase font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Loading Reality
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
