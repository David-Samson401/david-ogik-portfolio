import { BookOpen, Users, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const items = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Currently diving deeper into SvelteKit, GraphQL, and advanced TypeScript patterns. Staying curious and growing every day.",
  },
  {
    icon: Users,
    title: "Community Involvement",
    description:
      "I enjoy helping others learn through code reviews, mentoring junior developers, and participating in tech discussions online.",
  },
  {
    icon: Sparkles,
    title: "Personal Interests",
    description:
      "Tech podcasts, open source exploration, strategy games, and the occasional hiking trip to reset and recharge.",
  },
];

export default function AboutBeyondCode() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Badge variant="secondary" className="mb-4 gap-1.5">
              <Users className="h-3 w-3" />
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

            <div className="mt-8 space-y-5">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-border/60 bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 p-8 lg:p-12">
              <blockquote className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                &ldquo;The best code is the code you don&apos;t have to explain
                — it speaks for itself through clarity and intention.&rdquo;
              </blockquote>
              <p className="mt-6 text-muted-foreground">
                — My approach to writing maintainable software
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
