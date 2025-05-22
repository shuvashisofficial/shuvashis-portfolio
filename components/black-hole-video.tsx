"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function BlackHoleVideo() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Force theme to dark if no theme set yet (initial load)
    if (!theme) {
      setTheme("dark");
    }
    setMounted(true);
  }, [theme, setTheme]);

  if (!mounted) return null;

  if (theme !== 'dark') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none"
      >
        <video
          src="/1.mov"
          className="w-full h-full object-cover filter blur-sm opacity-70"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    );
  }

  // Dark theme video
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none"
    >
      <video
        src="/Artificial Intelligence, AI Stock Footage Video.mp4"
        className="w-full h-full object-cover filter blur-sm opacity-70"
        autoPlay
        loop
        muted
        playsInline
      />
    </motion.div>
  );
}
