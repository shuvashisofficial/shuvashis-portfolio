"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, SkillCategory } from "@/data/skills";

export default function AboutPage() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get to know more about my background and skills
          </p>
        </motion.div>

        {/* 🔹 Banner Section with Two Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 mb-16 flex flex-col items-center"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full max-w-5xl">
            <div className="w-full">
              <img
                src="/images/2.jpg"
                alt="Award Ceremony"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
            <div className="w-full">
              <img
                src="/images/1.jpg"
                alt="Conference Presentation"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* 🔹 Left Column: Bio + Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m Shuvashis Sarker, a passionate AI researcher, developer, and educator specializing in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing. I&apos;m currently working as an Adjunct Lecturer at Southeast University, teaching Digital Logic Design and Algorithm courses.
              </p>
              <p>
                With practical experience in TensorFlow, PyTorch, and advanced deep learning frameworks, I enjoy developing AI-driven solutions for healthcare, language technologies, and signal processing. My academic and industry work equips me with a strong foundation in algorithms, system design, and optimization.
              </p>
              <p>
                I&apos;m particularly interested in explainable AI and real-world applications of machine learning, where I have contributed through research publications and collaborative projects in healthcare and language processing.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <CardHeader className="p-4">
                    <CardTitle>
                      <div>
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-muted-foreground">{edu.location}</span>
                    </div>
                    {edu.gpa && (
                      <Badge variant="outline" className="mt-2">
                        CGPA: {edu.gpa}
                      </Badge>
                    )}
                    {edu.description && (
                      <p className="mt-2 text-sm">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* 🔹 Right Column: Skills + Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            {Object.keys(skills).map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category as SkillCategory].map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-bold mt-8 mb-4">Achievements</h2>
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-3">
                  {[
                    "Awarded Best Technical Presentation at ICCIT 2024 for presenting a deep learning-based lung disease detection system with explainable AI.",
                    "Published research on heart sound classification using Butterfly Optimization and Deep Learning at ESCI 2025, Pune.",
                    "Presented a study on Bangladeshi leaf disease detection using Transfer Learning and XAI at ICCIT 2024.",
                    "Published research on Vision Transformer and Transfer Learning for Brain Disease Detection at ICCIT 2024.",
                    "Presented a deep learning-based lung disease detection system with Explainable AI at ICCIT 2024.",
                    "Published research on Eye Disease Classification using Fuzzy Rank-Based Ensemble Learning at ICECE 2024.",
                    "Published a study on Brain Tumor Classification using Transfer Learning and Explainable AI at STI 2024.",
                    "Presented an analysis of COVID-19 Detection using Bangladeshi data and Explainable AI at ICISET 2024.",
                    "Published research on Bangla Regional Dialect Detection using BERT, LLMs, and XAI at COMPAS 2024.",
                    "Published research on Advanced CNN and Explainable AI for Brain MRI Analysis at ICCA 2024.",
                    "Organized and managed Inter-University Programming Contests as Executive Member of AUST Programming and Informatics Club.",
                    "Led sponsorship and logistics management for 2 National Science Carnivals as Treasurer of DRMC Science Club."
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 font-bold">•</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
