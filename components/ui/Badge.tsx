import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-primary text-primary-foreground shadow-sm",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground",
        variant === "outline" &&
          "border border-border/60 bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
