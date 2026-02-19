import Link from "next/link";
import {
  Zap,
  Accessibility,
  Code2,
  Clock,
  Github,
  Linkedin,
  Download,
  Mail,
  BookOpen,
  Users,
  Cpu,
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "About | David Ogik",
  description:
    "Learn about David Ogik - a Mid-Level Frontend Developer with 4+ years of experience building performant web applications.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(59,130,246,0.05),transparent)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            {/* Experience Badge */}
            <div className="mb-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="mr-1.5 h-3 w-3" />
                4+ Years Experience
              </Badge>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              David Ogik
            </h1>
            <p className="mt-2 text-xl sm:text-2xl text-primary font-medium">
              Mid-Level Frontend Developer
            </p>

            {/* Brief Intro */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">
                Electrical Engineer turned Frontend Developer.
              </span>{" "}
              I bring an analytical mindset and systems-thinking approach to
              building performant, accessible web applications. Based in Kenya,
              working with teams worldwide.
            </p>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Cpu className="mr-1.5 h-3 w-3" />
                My Journey
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                From Circuits to Components
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                My path to frontend development started in an unexpected
                place—the electrical engineering lab. Analyzing circuit
                behavior, debugging hardware systems, and optimizing for
                efficiency taught me how to think in systems.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When I discovered web development, I found the same principles
                applied: understanding data flow, debugging complex
                interactions, and optimizing performance. The transition felt
                natural because the problem-solving mindset is universal. Today,
                I build full-stack applications like DevEvents with live demos
                that showcase real-world functionality.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Analytical Thinking
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      EE taught me to break complex systems into manageable
                      components—exactly what React encourages.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Systems Thinking
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Understanding how components interact helps me architect
                      scalable applications and debug efficiently.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Performance Optimization
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Optimizing circuits for power efficiency translates
                      directly to optimizing apps for speed and user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Philosophy Section */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Code2 className="mr-1.5 h-3 w-3" />
              Philosophy
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              How I Build
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Principles that guide every line of code I write
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Performance First */}
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-500 mb-4 transition-colors group-hover:bg-yellow-500/20">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Performance First
              </h3>
              <p className="text-sm text-muted-foreground">
                98+ Lighthouse scores aren&apos;t accidents. I optimize for Core
                Web Vitals from the start—lazy loading, code splitting, and
                efficient rendering.
              </p>
            </div>

            {/* Full-Stack Capabilities */}
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 mb-4 transition-colors group-hover:bg-orange-500/20">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Full-Stack Ready
              </h3>
              <p className="text-sm text-muted-foreground">
                From MongoDB to Cloudinary, I build end-to-end. All my projects
                have live demos—I ship, not just code.
              </p>
            </div>

            {/* Accessibility */}}
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 mb-4 transition-colors group-hover:bg-blue-500/20">
                <Accessibility className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Accessibility by Default
              </h3>
              <p className="text-sm text-muted-foreground">
                WCAG 2.2 AA compliance isn&apos;t an afterthought. Semantic
                HTML, keyboard navigation, and screen reader support are baked
                in.
              </p>
            </div>

            {/* Clean Code */}
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-500 mb-4 transition-colors group-hover:bg-green-500/20">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Maintainable, documented, and tested. I write code that my
                future self (and teammates) will thank me for.
              </p>
            </div>

            {/* 30-Minute Rule */}
            <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 mb-4 transition-colors group-hover:bg-purple-500/20">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                The 30-Minute Rule
              </h3>
              <p className="text-sm text-muted-foreground">
                Stuck? I spend 30 minutes solving independently, then escalate.
                It&apos;s about efficiency, not ego—knowing when to ask saves
                everyone time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toolchain & Workflow Section */}
      <section className="py-16 sm:py-24 border-b border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Cpu className="mr-1.5 h-3 w-3" />
              Toolchain
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              My Tech Stack
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use daily to build great products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Development */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Development
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">VS Code</Badge>
                <Badge variant="outline">Vite</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">Cloudinary</Badge>
              </div>
            </div>

            {/* State Management */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                State Management
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Zustand</Badge>
                <Badge variant="outline">React Query</Badge>
                <Badge variant="outline">Context API</Badge>
                <Badge variant="outline">Redux (familiar)</Badge>
              </div>
            </div>

            {/* Testing */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Testing
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Jest</Badge>
                <Badge variant="outline">React Testing Library</Badge>
                <Badge variant="outline">Vitest</Badge>
                <Badge variant="outline">Cypress (learning)</Badge>
              </div>
            </div>

            {/* Version Control */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                Version Control
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Git</Badge>
                <Badge variant="outline">GitHub</Badge>
                <Badge variant="outline">Feature Branches</Badge>
                <Badge variant="outline">PR Reviews</Badge>
              </div>
            </div>

            {/* Deployment */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Deployment
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Vercel</Badge>
                <Badge variant="outline">Netlify</Badge>
                <Badge variant="outline">GitHub Actions</Badge>
                <Badge variant="outline">Docker (basics)</Badge>
              </div>
            </div>

            {/* Design */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Design
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Responsive Design</Badge>
                <Badge variant="outline">Design Systems</Badge>
                <Badge variant="outline">UI/UX Principles</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Code Section */}
      <section className="py-16 sm:py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Users className="mr-1.5 h-3 w-3" />
                Beyond Code
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                The Human Side
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to the developer community, or
                enjoying some downtime.
              </p>

              <div className="mt-8 space-y-6">
                {/* Continuous Learning */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Continuous Learning
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Currently diving deeper into SvelteKit, GraphQL, and
                      advanced TypeScript patterns. I believe in staying curious
                      and growing every day.
                    </p>
                  </div>
                </div>

                {/* Community */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Community Involvement
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      I enjoy helping others learn through code reviews,
                      mentoring junior developers, and participating in tech
                      discussions online.
                    </p>
                  </div>
                </div>

                {/* Interests */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Personal Interests
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tech podcasts, open source exploration, strategy games,
                      and the occasional hiking trip to reset and recharge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="flex items-center">
              <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-8 lg:p-12">
                <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                  &ldquo;The best code is the code you don&apos;t have to
                  explain—it speaks for itself through clarity and
                  intention.&rdquo;
                </blockquote>
                <p className="mt-6 text-muted-foreground">
                  — My approach to writing maintainable software
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-transparent to-primary/5 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6">
              <Link
                href="https://github.com/David-Samson401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/in/david-ogik-17784627a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
