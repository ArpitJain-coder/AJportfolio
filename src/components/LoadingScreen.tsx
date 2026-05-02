"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f5f2]"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-8xl md:text-[120px] font-serif font-bold text-[#111111] tracking-tighter">
                AJ<span className="text-[#C2A27C]">.</span>
              </h1>

              {/* Animated underline/progress */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                className="absolute -bottom-6 left-0 h-[1px] bg-[#C2A27C]/50"
              />
            </motion.div>

            {/* Subtle loading text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 text-[12px] font-sans font-bold tracking-[0.4em] text-[#4b5563] uppercase"
            >
              Machine Learning Engineer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
