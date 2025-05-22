import * as React from "react";
import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className)}
      {...props}
    />
  );
}

// ✅ Updated CardHeader with Optional Logo Slot
function CardHeader({
  className,
  logoUrl,
  children,
  ...props
}: React.ComponentProps<"div"> & { logoUrl?: string }) {
  return (
    <div
      data-slot="card-header"
      className={cn("@container/card-header grid auto-rows-min grid-cols-1 items-start gap-4 px-6 [.border-b]:pb-6 w-full", className)}
      {...props}
    >
      {logoUrl && (
        <div className="h-16 w-16 rounded-full overflow-hidden border border-border flex items-center justify-center bg-white mb-2">
          <img src={logoUrl} alt="Logo" className="object-contain h-full w-full" />
        </div>
      )}
      {children}
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-title" className={cn("leading-none font-semibold w-full", className)} {...props} />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-description" className={cn("text-muted-foreground text-sm", className)} {...props} />
  );
}

function CardDate({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-date" className={cn("text-xs text-muted-foreground italic", className)} {...props} />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-action" className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)} {...props} />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("px-6", className)} {...props} />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-footer" className={cn("flex items-center px-6 [.border-t]:pt-6", className)} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDate,
  CardAction,
  CardDescription,
  CardContent,
};
