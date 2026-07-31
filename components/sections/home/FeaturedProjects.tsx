import { projects } from "@/lib/data/project";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Portfolio</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-2 text-muted-foreground max-w-lg">
              Selected projects that showcase my approach to building performant, user-focused applications.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all projects <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
