"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ResearchCard } from "@/components/research/research-card";
import { Badge } from "@/components/ui/badge";
import { research } from "@/data/research";

const allTechnologies = Array.from(
  new Set(research.flatMap((r) => r.technologies))
).sort();

export default function ResearchPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // ✅ Sort researches by publishDate descending (latest first)
  const sortedResearches = [...research].sort((a, b) => {
    const dateA = new Date(a.publishDate || "1970-01-01").getTime();
    const dateB = new Date(b.publishDate || "1970-01-01").getTime();
    return dateB - dateA;
  });

  // ✅ Apply filter after sorting
  const filteredResearches = activeFilter
    ? sortedResearches.filter((r) => r.technologies.includes(activeFilter))
    : sortedResearches;

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Research Works
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A showcase of my research contributions
          </p>
        </motion.div>

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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {filteredResearches.map((r, index) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ResearchCard research={r} />
            </motion.div>
          ))}
        </div>

        {filteredResearches.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No research found with the selected technology. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
