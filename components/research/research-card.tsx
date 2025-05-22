import Link from "next/link";
import Image from "next/image";
import { ArrowRight,GraduationCap} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaResearchgate,  } from "react-icons/fa";
import { SiIeee,SiArxiv, SiAcm } from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardDate,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Research } from "@/data/research";  // Ensure this points to your type

interface ResearchCardProps {
  research: Research;  // Singular and correctly typed
}

export function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden border-2 transition-all hover:border-primary">
      {research.image && (
        <div className="aspect-video overflow-hidden relative w-full">
          <Image
            src={research.image}
            alt={research.title}
            className="object-cover object-top"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={research.featured}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle>{research.title}</CardTitle>
        <CardDate>{research.publishDate}</CardDate>
        <CardDescription>{research.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {research.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {research.technologies.length > 4 && (
            <Badge variant="outline">+{research.technologies.length - 4}</Badge>
          )}
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {research.achievements.slice(0, 2).map((achievement, i) => (
            <li key={i} className="flex items-start">
              <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="default" size="sm">
          <Link href={`/research/${research.id}`}>
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1"></div>

        {research.scholar && (
          <Button asChild variant="ghost" size="icon">
            <a href={research.scholar} target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <GraduationCap className="h-4 w-4" />
            </a>
          </Button>
        )}
        {research.researchgate && (
          <Button asChild variant="ghost" size="icon">
            <a href={research.researchgate} target="_blank" rel="noopener noreferrer" aria-label="ResearchGate">
              <FaResearchgate className="h-4 w-4" />
            </a>
          </Button>
        )}
        {research.IEEE && (
  <Button asChild variant="ghost" size="icon">
    <a href={research.IEEE} target="_blank" rel="noopener noreferrer" aria-label="IEEE Xplore">
      <SiIeee  className="h-4 w-4" />
    </a>
  </Button>
)}
{research.ACM && (
  <Button asChild variant="ghost" size="icon">
    <a href={research.ACM} target="_blank" rel="noopener noreferrer" aria-label="IEEE Xplore">
      <SiAcm className="h-4 w-4" />
    </a>
  </Button>
)}
        {research.arXiv && (
          <Button asChild variant="ghost" size="icon">
            <a href={research.arXiv} target="_blank" rel="noopener noreferrer" aria-label="arXiv">
              <SiArxiv  className="h-4 w-4" />
            </a>
          </Button>
        )}
        {research.livepdf && (
          <Button asChild variant="ghost" size="icon">
            <a href={research.livepdf} target="_blank" rel="noopener noreferrer" aria-label="Live PDF">
              <Image src="/images/projects/Vrfusenet/pdf.png" alt="pdf" width={16} height={16} className="mr-2" />
            </a>
          </Button>
        )}
        

      </CardFooter>
    </Card>
  );
}
