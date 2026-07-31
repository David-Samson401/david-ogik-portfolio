import { Code2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const cards = [
  {
    color: "bg-success/10 text-success",
    title: "Performance First",
    description:
      "98+ Lighthouse scores aren't accidents. I optimize Core Web Vitals from the start — lazy loading, code splitting, and efficient rendering.",
  },
  {
    color: "bg-primary/10 text-primary",
    title: "Full-Stack Ready",
    description:
      "From MongoDB to Cloudinary, I build end-to-end. All projects ship with live demos — I deliver, not just code.",
  },
  {
    color: "bg-blue-500/10 text-blue-400",
    title: "Accessibility by Default",
    description:
      "WCAG 2.2 AA compliance is baked in. Semantic HTML, keyboard navigation, and screen reader support from day one.",
  },
  {
    color: "bg-accent/10 text-accent",
    title: "Clean Code",
    description:
      "Maintainable, documented, tested. I write code my future self — and teammates — will thank me for.",
  },
  {
    color: "bg-purple-500/10 text-purple-400",
    title: "The 30-Minute Rule",
    description:
      "Stuck? I spend 30 minutes solving independently, then escalate. Efficiency over ego saves everyone time.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <Code2 className="h-3 w-3" />
            Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            How I Build
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Principles that guide every line of code I write
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.color} mb-3 transition-colors`}
              >
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
