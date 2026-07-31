import Link from "next/link";
import { Mail, Download, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutCTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </Link>
            <a
              href="/David-Ogik-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-6">
            <Link
              href="https://github.com/David-Samson401"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              href="https://linkedin.com/in/david-ogik-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
