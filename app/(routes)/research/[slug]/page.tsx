"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { research as researchData, Research } from "@/data/research";
import React from "react";
import { FaResearchgate,  } from "react-icons/fa";
import { SiIeee,SiArxiv, SiAcm } from "react-icons/si";

export default function ResearchPage() {
  const router = useRouter();
  const params = useParams();
  const [research, setResearch] = useState<Research | null>(null);

  useEffect(() => {
    const slug = params?.slug?.toString() || "";
    const foundResearch = researchData.find((r) => r.id === slug);
    if (foundResearch) {
      setResearch(foundResearch);
    } else {
      router.push("/research");
    }
  }, [params, router]);

  if (!research) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="animate-pulse text-center">
          <p>Loading Research...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Researches
        </Button>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                {research.title}
              </h1>

              {/* Published Date */}
              {research.publishDate && (
                <p className="text-muted-foreground mb-4">
                  <strong>Published:</strong> {research.publishDate}
                </p>
              )}
              {research.image && (
                <div className="rounded-lg overflow-hidden mb-6 relative aspect-video">
                  <Image
                    src={research.image}
                    alt={research.title}
                    className="object-cover object-top"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
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
                  {/* Authors List */}
              {Array.isArray(research.authors) && research.authors.length > 0 && (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Authors</h2>
                  <ul className="space-y-2">
                    {research.authors.map((author, index) => (
                      <li key={index} className="text-sm">
                        <strong>{author.name}</strong><br />
                        {author.affiliation}<br />
                        <a href={`mailto:${author.email}`} className="text-blue-500 hover:underline">{author.email}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
               <Separator className="my-4" />

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Links</h3>
                  {research.scholar && (
                    <a href={research.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                      <GraduationCap className="h-4 w-4 mr-2" />
                     Google Scholar
                    </a>
                  )}
                  {research.researchgate && (
                    <a href={research.researchgate} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                     <FaResearchgate className="h-4 w-4 mr-2" />
                      ResearchGate
                    </a>
                  )}
                  {research.arXiv && (
                    <a href={research.arXiv} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                      <SiArxiv className="h-4 w-4 mr-2" />
                      arXiv Page
                    </a>
                  )}
                  {research.IEEE && (
                    <a href={research.IEEE} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                      <SiIeee className="h-4 w-4 mr-2" />
                      IEEE
                    </a>
                  )}
                  {research.livepdf && (
                    <a href={research.livepdf} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                      <Image src="/images/projects/Vrfusenet/pdf.png" alt="pdf" width={16} height={16} className="mr-2" />
                      Download PDF
                    </a>
                  )}
                </div>
                <Separator className="my-4" />
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {research.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

               
                
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

