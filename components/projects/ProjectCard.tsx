import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Users, Zap } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-primary/10">
            <span className="text-4xl">🚀</span>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute left-3 top-3">
            <Badge
              variant="default"
              className="bg-primary text-primary-foreground"
            >
              Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground border-t pt-4">
            {project.metrics.lighthouse && (
              <span className="flex items-center gap-1">
                <Zap size={14} className="text-yellow-500" />
                {project.metrics.lighthouse}
              </span>
            )}
            {project.metrics.users && (
              <span className="flex items-center gap-1">
                <Users size={14} />
                {project.metrics.users}
              </span>
            )}
          </div>
        )}

        {/* Role & Year */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>

        {/* View Details Link */}
        <Link
          href={`/work/${project.id}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View case study
          <ExternalLink size={14} className="ml-1" />
        </Link>
      </div>
    </Card>
  );
}
