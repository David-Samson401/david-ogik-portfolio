import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-10 sm:pt-20 sm:pb-14">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left: Text Content — 3/5 width */}
          <div className="text-center lg:text-left lg:col-span-3 lg:py-8">
            {/* Status badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 backdrop-blur-sm px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-muted-foreground">Available for work</span>
              <Link
                href="/work"
                className="ml-1 flex items-center gap-1 font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View projects <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block text-foreground">Frontend developer</span>
              <span className="mt-2 block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                who ships products
              </span>
              <span className="block text-foreground">people love to use</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I build performant, accessible web applications with React, Next.js, and TypeScript.
              From OAuth-secured APIs to real-time dashboards — every pixel shipped with intention.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="/David-Ogik-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl border border-border bg-card/60 backdrop-blur-sm font-medium text-foreground hover:border-primary/40 hover:bg-card transition-all duration-200"
              >
                <FileText className="h-4 w-4" />
                Download resume
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
              <Link
                href="https://github.com/David-Samson401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/david-ogik-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
              <span className="text-border select-none">|</span>
              <span>4+ years experience</span>
            </div>
          </div>

          {/* Right: Profile Image — 2/5 width, fills full height */}
          <div className="relative lg:col-span-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 blur-2xl" />
              {/* Image container — large, fills space */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-full lg:h-[460px] xl:h-[520px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                <Image
                  src="/images/david-ogik-profile.jpg"
                  alt="David Ogik"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 40vw"
                />
              </div>
              {/* Floating tech tags — outside image so overflow-hidden doesn't clip them */}
              <div className="absolute bottom-0 left-0 translate-y-[35%] -translate-x-[60%] rounded-lg border border-border/60 bg-card/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground shadow-lg whitespace-nowrap z-10">
                <span className="text-primary">React</span> · Next.js
              </div>
              <div className="absolute top-0 right-0 -translate-y-[35%] translate-x-[60%] rounded-lg border border-border/60 bg-card/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground shadow-lg whitespace-nowrap z-10">
                TypeScript · <span className="text-accent">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
