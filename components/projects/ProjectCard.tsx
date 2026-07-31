"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Zap, Users, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
            <span className="text-5xl">&#128640;</span>
          </div>
        )}

        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute left-4 top-4">
            <Badge className="bg-primary/90 text-primary-foreground text-xs font-medium shadow-lg">
              Featured
            </Badge>
          </div>
        )}

        {/* Quick links overlay */}
        <div className="absolute right-4 top-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.githubUrl && (
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.githubUrl, "_blank", "noopener,noreferrer");
              }}
            >
              <Github size={16} />
            </span>
          )}
          {project.liveUrl && (
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.open(project.liveUrl, "_blank", "noopener,noreferrer");
              }}
            >
              <ExternalLink size={16} />
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">
          {project.title}
        </h3>

        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[11px] font-medium">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-[11px] text-muted-foreground">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Spacer */}
        <div className="mt-auto pt-4">
          {/* Metrics row */}
          {project.metrics && (
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {project.metrics.lighthouse && (
                <span className="flex items-center gap-1.5">
                  <Zap size={13} className="text-success" />
                  <span className="text-success font-medium">{project.metrics.lighthouse}</span>
                  <span>perf</span>
                </span>
              )}
              {project.metrics.users && (
                <span className="flex items-center gap-1.5">
                  <Users size={13} />
                  {project.metrics.users}
                </span>
              )}
            </div>
          )}

          {/* Bottom row */}
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>{project.role}</span>
            <span className="flex items-center gap-1 text-primary group-hover:underline">
              Case study <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
