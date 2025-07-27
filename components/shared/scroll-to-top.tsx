// components/shared/scroll-to-top.tsx
"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollAnimationRef = useRef<number | null>(null);
  const scrollProgress = useMotionValue(0);
  
  // Smooth spring for scroll progress indicator
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.8
  });

  // Optimized scroll handler with requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (scrollAnimationRef.current) return;
    
    scrollAnimationRef.current = requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / documentHeight, 1);
      
      setIsVisible(scrollY > 500);
      scrollProgress.set(progress);
      
      scrollAnimationRef.current = null;
    });
  }, [scrollProgress]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [handleScroll]);

  // Enhanced smooth scroll with easing
  const scrollToTop = useCallback(() => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = Math.min(1500, Math.max(800, startPosition / 3)); // Dynamic duration
    
    // Smooth easing function
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      const currentPosition = startPosition * (1 - easedProgress);
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, [isScrolling]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            opacity: 0, 
            scale: 0.8, 
            y: 20,
            rotate: -180 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotate: 0,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              mass: 1
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.6, 
            y: 20,
            rotate: 180,
            transition: {
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            transition: { duration: 0.2 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          className="fixed right-6 bottom-6 z-50"
        >
          <div className="relative">
            {/* Progress ring */}
            <svg
              className="absolute inset-0 w-12 h-12 -rotate-90"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground/20"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary"
                style={{
                  pathLength: smoothProgress,
                  strokeDasharray: "125.66 125.66" // 2 * π * 20
                }}
              />
            </svg>
            
            <Button
              onClick={scrollToTop}
              disabled={isScrolling}
              size="icon"
              className="relative rounded-full h-12 w-12 bg-primary/90 backdrop-blur-sm text-primary-foreground shadow-lg border border-primary/20 transition-all duration-300 hover:bg-primary hover:shadow-xl disabled:opacity-70"
            >
              <motion.div
                animate={{ 
                  rotate: isScrolling ? 360 : 0,
                  y: isScrolling ? [-1, 1, -1] : 0
                }}
                transition={{ 
                  rotate: { duration: 1, repeat: isScrolling ? Infinity : 0, ease: "linear" },
                  y: { duration: 0.5, repeat: isScrolling ? Infinity : 0, ease: "easeInOut" }
                }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.div>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}