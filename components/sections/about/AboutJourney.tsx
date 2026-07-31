import { Cpu } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const data = [
  {
    color: "bg-blue-500/10 text-blue-400",
    title: "Analytical Thinking",
    description:
      "EE taught me to break complex systems into manageable components — exactly what React encourages.",
  },
  {
    color: "bg-success/10 text-success",
    title: "Systems Thinking",
    description:
      "Understanding how components interact helps me architect scalable applications and debug efficiently.",
  },
  {
    color: "bg-purple-500/10 text-purple-400",
    title: "Performance Optimization",
    description:
      "Optimizing circuits for power efficiency translates directly to optimizing apps for speed and user experience.",
  },
];

export default function AboutJourney() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 gap-1.5">
              <Cpu className="h-3 w-3" />
              My Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              From Circuits to Components
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My path to frontend development started in the electrical engineering lab. Analyzing circuit
              behavior, debugging hardware systems, and optimizing for efficiency taught me how to think in systems.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When I discovered web development, the same principles applied: understanding data flow, debugging
              complex interactions, and optimizing performance. The transition felt natural because the
              problem-solving mindset is universal.
            </p>
          </div>

          <div className="space-y-4">
            {data.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}
                  >
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
