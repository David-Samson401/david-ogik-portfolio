import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:pointer-events-none disabled:opacity-50",

          variant === "default" &&
            "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5",
          variant === "outline" &&
            "border border-border bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card",
          variant === "ghost" &&
            "hover:bg-secondary hover:text-foreground",

          size === "sm" && "h-8 px-3 text-xs rounded-lg",
          size === "md" && "h-10 px-5 py-2 text-sm",
          size === "lg" && "h-12 px-8 text-base",

          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
