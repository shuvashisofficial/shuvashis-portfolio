"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CertificateCard } from "@/components/ui/certificatecard";
import { Badge } from "@/components/ui/badge";
import { achievements } from "@/data/achievement";

// Create filter list from all technologies
const allTechnologies = Array.from(
  new Set(achievements.flatMap((item) => item.technologies || []))
).sort();

export default function AchievementsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredAchievements = activeFilter
    ? achievements.filter((item) => item.technologies.includes(activeFilter))
    : achievements;

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Achievements & Certificates
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of certified skills and accomplishments across various fields.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Badge
              variant={activeFilter === null ? "default" : "outline"}
              className="cursor-pointer text-sm py-2 px-3"
              onClick={() => setActiveFilter(null)}
            >
              All
            </Badge>
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={activeFilter === tech ? "default" : "outline"}
                className="cursor-pointer text-sm py-2 px-3"
                onClick={() => setActiveFilter(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <CertificateCard
                imageUrl={item.image}
                title={item.title}
                description={item.description}
                issuer={item.issuer}
                issueDate={item.issueDate}
                credentialUrl={item.credentialUrl}
              />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No achievements found with the selected topic. Try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
