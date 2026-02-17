import Link from "next/link";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(59,130,246,0.05),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Experience badge */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-foreground/20 transition-colors">
              ⚡ 4+ years building production React applications.{" "}
              <Link href="/work" className="font-semibold text-primary">
                See my work <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Frontend developer who turns{" "}
            <span className="text-primary">complex requirements</span> into
            smooth experiences
          </h1>

          {/* Value proposition */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            I architect and build performant, accessible web applications with
            React, Next.js, and Tailwind. From OAuth-secured flight search
            engines to real-time dashboards—I deliver code that scales and users
            love.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-col sm:flex-row">
            <Button size="lg">
              <Link href="/work">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              <Link href="/resume.pdf" target="_blank" className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download resume
              </Link>
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link
              href="https://github.com/David-Samson401"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/in/david-ogik-17784627a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
