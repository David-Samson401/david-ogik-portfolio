"use client";

import { useState, useMemo } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import { projects } from "@/lib/data/project";
import ProjectCard from "@/components/projects/ProjectCard";

type SortOption = "newest" | "oldest" | "a-z";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const tags = projects.flatMap((project) => project.tags);
    return Array.from(new Set(tags)).sort();
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Apply filter
    if (activeFilter !== "All") {
      result = result.filter((project) => project.tags.includes(activeFilter));
    }

    // Apply sort
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "oldest":
        result.sort((a, b) => a.year - b.year);
        break;
      case "a-z":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [activeFilter, sortBy]);

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

      {/* Filters Section */}
      <section className="border-b border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>Filter:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter("All")}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                    activeFilter === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  All
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setActiveFilter(tech)}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                      activeFilter === tech
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowUpDown className="h-4 w-4" />
                <span>Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-input bg-background px-3 py-1.5 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Count */}
          <p className="mb-8 text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <Filter className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No projects match
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Try selecting a different technology filter
              </p>
              <button
                onClick={() => setActiveFilter("All")}
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
