import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  issueDate?: string;
  technologies: string[];
  image: string;
  credentialUrl?: string;
  featured?: boolean;
}

interface CertificateDetailsProps {
  certificate: Certificate;
  onBack: () => void;
}

export function CertificateDetails({ certificate, onBack }: CertificateDetailsProps) {
  return (
    <div className="container px-4 md:px-6 mx-auto">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={onBack}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Certificates
      </Button>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              {certificate.title}
            </h1>

            {certificate.image && (
              <div className="rounded-lg overflow-hidden mb-6 relative aspect-video">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            )}

            <p className="text-xl text-muted-foreground mb-2">
              Issued by {certificate.issuer}
            </p>

            {certificate.issueDate && (
              <p className="text-sm text-muted-foreground italic mb-8">
                Issued: {certificate.issueDate}
              </p>
            )}

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="mb-6">{certificate.description}</p>
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
            <h2 className="text-xl font-bold mb-4">Certificate Details</h2>
            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Skills & Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {certificate.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              {certificate.credentialUrl && (
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Credential Link</h3>
                  <a
                    href={certificate.credentialUrl}
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
  );
}
