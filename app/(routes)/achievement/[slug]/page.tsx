"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { achievements, Achievement } from "@/data/achievement";

export default function AchievementPage() {
  const router = useRouter();
  const params = useParams();
  const [achievement, setAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    const id = params?.id?.toString() || "";
    const found = achievements.find((a) => a.id === id);
    if (found) {
      setAchievement(found);
    } else {
      router.push("/achievements");
    }
  }, [params, router]);

  if (!achievement) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-pulse text-center">
          <p>Loading achievement...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Achievements
        </Button>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                {achievement.title}
              </h1>

              {achievement.image && (
                <div className="rounded-lg overflow-hidden mb-6 relative aspect-video">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              )}

              <p className="text-xl text-muted-foreground mb-2">
                Issued by {achievement.issuer}
              </p>

              {achievement.issueDate && (
                <p className="text-sm text-muted-foreground italic mb-8">
                  Issued: {achievement.issueDate}
                </p>
              )}

              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="mb-6">{achievement.description}</p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-muted rounded-lg p-6 sticky top-24"
            >
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <Separator className="my-4" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Skills / Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                {achievement.credentialUrl && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">Credential</h3>
                    <a
                      href={achievement.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:underline"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
