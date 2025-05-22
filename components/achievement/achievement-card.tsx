import Image from "next/image";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  issueDate?: string;
  image: string;
  credentialUrl?: string;
}

interface CertificateDetailsProps {
  certificate: Certificate;
  onBack: () => void;
}

export function CertificateDetails({ certificate, onBack }: CertificateDetailsProps) {
  return (
    <div className="container px-4 md:px-6 mx-auto">
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Certificates
      </Button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "bg-background border rounded-xl overflow-hidden shadow-md transition hover:shadow-lg max-w-3xl mx-auto"
        )}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        <div className="p-6 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold leading-tight">
            {certificate.title}
          </h1>
          <p className="text-sm text-muted-foreground">Issued by {certificate.issuer}</p>
          {certificate.issueDate && (
            <p className="text-xs text-muted-foreground italic">
              Issued: {certificate.issueDate}
            </p>
          )}

          <p className="text-base text-muted-foreground mt-2">
            {certificate.description}
          </p>

          {certificate.credentialUrl && (
            <Link
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-2 gap-1"
            >
              View Certificate
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
}
