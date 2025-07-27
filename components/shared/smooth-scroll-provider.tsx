// components/shared/smooth-scroll-provider.tsx
"use client";

import { ReactNode, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

// Enhanced page transition variants with spring animations
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  animate: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth feel
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  }
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  
  // Smooth spring-based scroll tracking
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  // Smooth scroll to top on route change
  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, []);

  // Enhanced scroll event handler with throttling
  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      scrollY.set(window.scrollY);
    }
  }, [scrollY]);

  useEffect(() => {
    // Enhanced smooth scrolling configuration
    const root = document.documentElement;
    const body = document.body;
    
    // Apply smooth scrolling with enhanced CSS
    root.style.scrollBehavior = "smooth";
    root.style.scrollPaddingTop = "0px";
    
    // Optimize scroll performance
    body.style.overflowX = "hidden";
    
    // Add CSS for hardware acceleration
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 0px;
      }
      
      body {
        -webkit-overflow-scrolling: touch;
      }
      
      [data-scroll] {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: opacity, transform;
      }
      
      [data-scroll].in-view {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Smooth scrollbar styling */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(128, 128, 128, 0.3);
        border-radius: 4px;
        transition: background 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(128, 128, 128, 0.5);
      }
    `;
    document.head.appendChild(style);
    
    // Enhanced intersection observer with better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // Stop observing once animated to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
      }
    );
    
    // Set up scroll event listener with passive flag
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Observe elements with scroll animation
    const observeScrollElements = () => {
      const scrollElements = document.querySelectorAll("[data-scroll]:not(.in-view)");
      scrollElements.forEach((el) => {
        observer.observe(el);
      });
    };
    
    // Initial observation
    observeScrollElements();
    
    // Re-observe on pathname change (for new elements)
    const timeoutId = setTimeout(observeScrollElements, 100);
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      document.head.removeChild(style);
      root.style.scrollBehavior = "";
      body.style.overflowX = "";
      clearTimeout(timeoutId);
    };
  }, [pathname, handleScroll]);

  // Scroll to top on route change
  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  return (
    <div ref={containerRef} className="min-h-screen">
      <AnimatePresence mode="wait" onExitComplete={() => scrollToTop()}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="w-full"
          style={{
            willChange: 'opacity, transform'
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}