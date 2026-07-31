import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { projects } from "@/lib/data/project";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | David Ogik`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60 pt-14 sm:pt-20 pb-10 sm:pb-14">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            Back to all projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Info */}
            <div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                <span>{project.role}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {project.longDescription || project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/60 shadow-2xl">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-12 sm:py-16 border-b border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-medium text-warning mb-2">Challenges</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Challenges Faced
              </h2>
              <p className="mt-2 text-muted-foreground">
                Key obstacles that shaped the development process
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-warning/30 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warning/10 text-warning">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Challenge {index + 1}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions */}
      {project.solutions && project.solutions.length > 0 && (
        <section className="relative py-12 sm:py-16 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-success/5 via-transparent to-transparent" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-medium text-success mb-2">Solutions</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Solutions Implemented
              </h2>
              <p className="mt-2 text-muted-foreground">
                How I tackled each challenge with effective solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-success/30 hover:shadow-md"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">
                        Solution {index + 1}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code snippet */}
              <div className="rounded-2xl border border-border/60 bg-[#0A0B10] p-5 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-success/70" />
                  </div>
                  <span className="text-[11px] text-muted-foreground ml-2 font-mono">
                    tokenManager.ts
                  </span>
                </div>
                <pre className="text-xs overflow-x-auto">
                  <code className="text-muted-foreground">
                    {`class TokenManager {
  private token: string | null = null;
  private expiresAt: number = 0;
  private refreshPromise: Promise<string> | null = null;

  async getToken(): Promise<string> {
    if (this.token && Date.now() < this.expiresAt) {
      return this.token;
    }

    if (!this.refreshPromise) {
      this.refreshPromise = this.refresh();
    }

    return this.refreshPromise;
  }

  private async refresh(): Promise<string> {
    const response = await fetch('/api/oauth/token');
    const { access_token, expires_in } = await response.json();
    
    this.token = access_token;
    this.expiresAt = Date.now() + (expires_in * 1000) - 60000;
    this.refreshPromise = null;
    
    return this.token;
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && (
        <section className="py-12 sm:py-16 border-t border-border/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-md">
              <div className="rounded-2xl border border-border/60 bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Key Metrics
                </h2>
                <dl className="space-y-3">
                  {project.metrics.lighthouse && (
                    <div className="flex justify-between items-center">
                      <dt className="text-muted-foreground text-sm">Lighthouse</dt>
                      <dd className="font-semibold text-success">
                        {project.metrics.lighthouse}/100
                      </dd>
                    </div>
                  )}
                  {project.metrics.users && (
                    <div className="flex justify-between items-center">
                      <dt className="text-muted-foreground text-sm">Users</dt>
                      <dd className="font-medium text-foreground">
                        {project.metrics.users}
                      </dd>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div className="flex justify-between items-center">
                      <dt className="text-muted-foreground text-sm">Performance</dt>
                      <dd className="font-medium text-foreground">
                        {project.metrics.performance}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
