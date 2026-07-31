import Link from "next/link";
import { Sparkles, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 pt-14 sm:pt-20 pb-10 sm:pb-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Badge className="gap-1.5 bg-primary/10 text-primary border-primary/20 px-3 py-1">
              <Sparkles className="h-3 w-3" />
              4+ Years Experience
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            David Ogik
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mid-Level Frontend Developer
          </p>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">
              Electrical Engineer turned Frontend Developer.
            </span>{" "}
            I bring an analytical mindset and systems-thinking approach to
            building performant, accessible web applications. Based in Kenya,
            working with teams worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
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
        </div>
      </div>
    </section>
  );
}
