"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience & { logoUrl?: string }; // Optional logo support
  index: number; // For animation staggering
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-10"
    >
      <Card className="overflow-hidden">
        <CardHeader className="bg-muted/50 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* ✅ Circular Logo */}
            {experience.logoUrl && (
              <div className="h-12 w-12 rounded-full overflow-hidden border border-border flex items-center justify-center bg-white">
                <img src={experience.logoUrl} alt={`${experience.company} logo`} className="object-contain h-full w-full" />
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-sm text-muted-foreground">{experience.company}</p>
            </div>
          </div>

          <Badge variant="outline">
            {experience.startDate} - {experience.endDate}
          </Badge>
        </CardHeader>

        <CardContent className="p-4">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="mr-1 h-4 w-4" />
            {experience.location}
          </div>
          <p className="mb-4">{experience.description}</p>
          <Separator className="my-4" />
          <h4 className="font-medium mb-2">Key Achievements:</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
