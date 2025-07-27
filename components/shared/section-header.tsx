// components/shared/section-header.tsx
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  parallax?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true, 
  parallax = false 
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Smooth scroll-based animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform values for smooth parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  // Spring animations for smoother movement
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    mass: 0.8
  });
  
  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  });

  // Entrance animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, // Allow re-animation
        margin: "-100px",
        amount: 0.3
      }}
      style={{
        ...(parallax && {
          y: smoothY,
          opacity: smoothOpacity
        })
      }}
      className={`space-y-4 ${centered ? 'text-center mx-auto' : ''} mb-12 will-change-transform`}
    >
      <motion.h2 
        variants={itemVariants}
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        style={{
          willChange: 'transform, opacity'
        }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={itemVariants}
          className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto"
          style={{
            willChange: 'transform, opacity'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}