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
    return {
      title: "Project Not Found",
    };
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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(59,130,246,0.05),transparent)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Back Button */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to all projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div>
              {/* Meta info */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                <span>{project.role}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6">
                {project.longDescription || project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
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

            {/* Project Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-2xl">
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

      {/* Challenges Section */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Challenges Faced
              </h2>
              <p className="mt-2 text-muted-foreground">
                Key obstacles that shaped the development process
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        <AlertTriangle className="h-5 w-5" />
                      </div>
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

      {/* Solutions Section */}
      {project.solutions && project.solutions.length > 0 && (
        <section className="relative py-16 sm:py-20 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Solutions Implemented
              </h2>
              <p className="mt-2 text-muted-foreground">
                How I tackled each challenge with effective solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Solutions List */}
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 transition-all duration-300 hover:bg-card hover:border-primary/30"
                  >
                    <div className="shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                        <CheckCircle className="h-5 w-5" />
                      </div>
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

              {/* Code Snippet */}
              <div className="rounded-xl border border-border bg-zinc-950 p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-zinc-500 ml-2">
                    tokenManager.ts
                  </span>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-zinc-300">
                    {`class TokenManager {
  private token: string | null = null;
  private expiresAt: number = 0;
  private refreshPromise: Promise<string> | null = null;

  async getToken(): Promise<string> {
    // Return cached token if valid
    if (this.token && Date.now() < this.expiresAt) {
      return this.token;
    }

    // Prevent race conditions with single refresh
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

      {/* Project Details Section */}
      {project.metrics && (
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-md">
              {/* Metrics */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Key Metrics
                </h2>
                <dl className="space-y-3">
                  {project.metrics.lighthouse && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Lighthouse</dt>
                      <dd className="font-medium text-foreground">
                        {project.metrics.lighthouse}/100
                      </dd>
                    </div>
                  )}
                  {project.metrics.users && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Users</dt>
                      <dd className="font-medium text-foreground">
                        {project.metrics.users}
                      </dd>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Performance</dt>
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
