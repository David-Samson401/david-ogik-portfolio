import type { Metadata } from "next";
import WorkFilter from "@/components/sections/work/WorkFilter";

export const metadata: Metadata = {
  title: "Projects | David Ogik",
  description:
    "A collection of frontend projects by David Ogik — from production React applications to experimental side projects built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-border/60 pt-14 sm:pt-20 pb-10 sm:pb-14">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-primary">Portfolio</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            My Work
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            A collection of projects I&apos;ve built, from production
            applications to experimental side projects. Each one taught me
            something new.
          </p>
        </div>
      </section>

      <WorkFilter />
    </main>
  );
}
