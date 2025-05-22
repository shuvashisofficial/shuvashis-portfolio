// components/Researches/Research-details.tsx
import Image from "next/image";
import { ArrowLeft, ExternalLink, BookOpen,GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Research } from "@/data/research";
interface ResearchDetailsProps {
  research: Research;
  onBack: () => void;
}

export function ResearchDetails({ research, onBack }: ResearchDetailsProps) {
  return (
    <div className="container px-4 md:px-6 mx-auto">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Researches
      </Button>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {research.title}
            </h1>

            {research.image && (
              <div className="rounded-lg overflow-hidden mb-6 relative">
                <div className="aspect-video w-full relative">
                  <Image
                    src={research.image}
                    alt={research.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}

            <p className="text-xl text-muted-foreground mb-8">
              {research.description}
            </p>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              
              <p className="mb-6">{research.longDescription || research.description}</p>

              <h2 className="text-2xl font-bold mb-4">Achievements</h2>
              <ul className="space-y-2 mb-6">
                {research.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
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
            <h2 className="text-xl font-bold mb-4">Research Details</h2>
            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {research.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold">Links</h3>
                {research.scholar && (
                  <a
                    href={research.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Google Scholar
                  </a>
                )}
                {research.researchgate && (
                  <a
                    href={research.researchgate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    ResearchGate
                  </a>
                )}
                {research.arXiv && (
                  <a
                    href={research.arXiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    arXiv Page
                  </a>
                )}
                {research.IEEE && (
                  <a
                    href={research.IEEE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    IEEE
                  </a>
                )}
                {research.ACM && (
                  <a
                    href={research.ACM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    ACM
                  </a>
                )}
                {research.livepdf && (
                  <a
                    href={research.livepdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live PDF
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
