import * as React from "react";
import { cn } from "@/lib/utils";

interface CertificateCardProps extends React.ComponentProps<"div"> {
  imageUrl: string;
  title: string;
  issuer: string;
  description: string;
  issueDate?: string;
  credentialUrl?: string;
}

export function CertificateCard({
  imageUrl,
  title,
  issuer,
  description,
  issueDate,
  credentialUrl,
  className,
  ...props
}: CertificateCardProps) {
  return (
    <div
      className={cn(
        "bg-background border rounded-xl overflow-hidden shadow-md transition hover:shadow-lg hover:border-white flex flex-col",
        className
      )}
      {...props}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover object-top"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">Issued by {issuer}</p>

        {issueDate && (
          <p className="text-xs text-muted-foreground italic">
            Issued: {issueDate}
          </p>
        )}

        {/* 🔽 New: Add description */}
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>

        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline mt-2"
          >
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
}
