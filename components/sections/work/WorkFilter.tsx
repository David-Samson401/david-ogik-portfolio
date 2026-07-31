"use client";

import { useState, useMemo } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
import { projects } from "@/lib/data/project";
import ProjectCard from "@/components/projects/ProjectCard";

type SortOption = "newest" | "oldest" | "a-z";

export default function WorkFilter() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  const allTechnologies = useMemo(() => {
    const tags = projects.flatMap((p) => p.tags);
    return Array.from(new Set(tags)).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeFilter !== "All") {
      result = result.filter((p) => p.tags.includes(activeFilter));
    }

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
    <>
      {/* Filters bar */}
      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                <span>Filter:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveFilter("All")}
                  className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                    activeFilter === "All"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  All
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setActiveFilter(tech)}
                    className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-200 ${
                      activeFilter === tech
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowUpDown className="h-4 w-4" />
                <span>Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-lg border border-input bg-card px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="a-z">A-Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
