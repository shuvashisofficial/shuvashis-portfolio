"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDate,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { research as allResearch } from "@/data/research";
import Link from "next/link";
import CustomCarousel from "@/components/ui/CustomCarousel";

export function FeaturedResearch() {
  const featuredResearch = allResearch
    .filter((r) => r.featured)
    .sort(
      (a, b) =>
        new Date(b.publishDate || "").getTime() -
        new Date(a.publishDate || "").getTime()
    );
  // Responsive config for react-multi-carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Slide one project at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section id="research" className="py-24 md:py-48 bg-muted/0">
      <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Featured Research Works
        </motion.h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Explore my highlighted contributions to scientific research
        </p>

        <CustomCarousel>
          {featuredResearch.map((r) => (
            <Card
              key={r.id}
              className="h-full flex flex-col overflow-hidden border-2 mx-2"
            >
              {r.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{r.title}</CardTitle>
                <CardDescription>{r.description}</CardDescription>
                {r.publishDate && <CardDate>Published: {r.publishDate}</CardDate>}
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {r.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button asChild variant="default" size="sm">
                  <Link href={`/research/${r.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <div className="flex-1" />
                {r.scholar && (
                  <Button asChild variant="ghost" size="icon">
                    <a
                      href={r.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Scholar"
                    >
                      <BookOpen className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {r.researchgate && (
                  <Button asChild variant="ghost" size="icon">
                    <a
                      href={r.researchgate}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="ResearchGate"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {r.arXiv && (
                  <Button asChild variant="ghost" size="icon">
                    <a
                      href={r.arXiv}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="arXiv"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {r.livepdf && (
                  <Button asChild variant="ghost" size="icon">
                    <a
                      href={r.livepdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="PDF"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </CustomCarousel>

        <Button asChild variant="outline" className="mt-8">
          <Link href="/research">
            View All Research
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
