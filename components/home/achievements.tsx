"use client";

import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Code, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Awarded Best Technical Presentation at ICCIT 2024 for presenting a deep learning-based lung disease detection system with explainable AI.",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Published research on heart sound classification using Butterfly Optimization and Deep Learning at ESCI 2025, Pune.",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Presented a study on Bangladeshi leaf disease detection using Transfer Learning and XAI at ICCIT 2024.",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Published research on Vision Transformer and Transfer Learning for Brain Disease Detection at ICCIT 2024.",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Presented a deep learning-based lung disease detection system with Explainable AI at ICCIT 2024.",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Published research on Eye Disease Classification using Fuzzy Rank-Based Ensemble Learning at ICECE 2024.",
    colorClass: "text-red-600 dark:text-red-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Published a study on Brain Tumor Classification using Transfer Learning and Explainable AI at STI 2024.",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Presented an analysis of COVID-19 Detection using Bangladeshi data and Explainable AI at ICISET 2024.",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Published research on Bangla Regional Dialect Detection using BERT, LLMs, and XAI at COMPAS 2024.",
    colorClass: "text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Published research on Advanced CNN and Explainable AI for Brain MRI Analysis at ICCA 2024.",
    colorClass: "text-pink-600 dark:text-pink-400",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Organized and managed Inter-University Programming Contests as Executive Member of AUST Programming and Informatics Club.",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Led sponsorship and logistics management for 2 National Science Carnivals as Treasurer of DRMC Science Club.",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
];

export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/0 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>
        
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 100,
                damping: 15
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Research</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Presentation</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Leadership</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Event Management</Badge>
        </div>
      </div>
    </section>
  );
}
