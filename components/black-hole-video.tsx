"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function BlackHoleVideo() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lightVideoLoaded, setLightVideoLoaded] = useState(false);
  const [darkVideoLoaded, setDarkVideoLoaded] = useState(false);
  
  // Preload videos
  useEffect(() => {
    const preloadVideo = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.preload = 'metadata';
        video.onloadeddata = () => resolve();
        video.onerror = () => resolve(); // Resolve even on error to prevent hanging
      });
    };

    // Preload both videos
    preloadVideo("/1.mov").then(() => setLightVideoLoaded(true));
    preloadVideo("/Artificial Intelligence, AI Stock Footage Video.mp4").then(() => setDarkVideoLoaded(true));
  }, []);
  
  useEffect(() => {
    // Force theme to dark if no theme set yet (initial load)
    if (!theme) {
      setTheme("dark");
    }
    setMounted(true);
  }, [theme, setTheme]);

  // Default to dark theme during hydration
  const currentTheme = mounted ? theme : 'dark';
  const isDark = currentTheme === 'dark';
  const videoLoaded = isDark ? darkVideoLoaded : lightVideoLoaded;

  return (
    <>
      {/* Fallback background while video loads */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: videoLoaded ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 z-[-3] ${
          isDark 
            ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
            : 'bg-gradient-to-br from-gray-100 via-white to-gray-200'
        }`}
      />
      
      {/* Video background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none"
      >
        <video
          src={isDark 
            ? "/Artificial Intelligence, AI Stock Footage Video.mp4" 
            : "/1.mov"
          }
          className="w-full h-full object-cover filter blur-sm opacity-70"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={() => {
            if (isDark) {
              setDarkVideoLoaded(true);
            } else {
              setLightVideoLoaded(true);
            }
          }}
        />
      </motion.div>
    </>
  );
}