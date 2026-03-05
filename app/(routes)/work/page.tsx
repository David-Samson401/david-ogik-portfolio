import type { Metadata } from "next";
import WorkFilter from "@/components/sections/work/WorkFilter";

export const metadata: Metadata = {
  title: "Projects | David Ogik",
  description:
    "A collection of frontend projects by David Ogik — from production React applications to experimental side projects built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(59,130,246,0.05),transparent)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
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
