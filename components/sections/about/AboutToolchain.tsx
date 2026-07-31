import { Code2, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const categories = [
  {
    icon: Code2,
    title: "Development",
    tools: ["VS Code", "Vite", "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "MongoDB", "Cloudinary"],
  },
  {
    icon: Sparkles,
    title: "Deployment",
    tools: ["Vercel", "Netlify", "GitHub Actions", "Docker (basics)"],
  },
  {
    icon: Github,
    title: "Version Control",
    tools: ["Git", "GitHub", "Feature Branches", "PR Reviews"],
  },
  {
    icon: Code2,
    title: "Testing",
    tools: ["Jest", "React Testing Library", "Vitest", "Cypress (learning)"],
  },
  {
    icon: Sparkles,
    title: "Design",
    tools: ["Figma", "Responsive Design", "Design Systems", "UI/UX Principles"],
  },
  {
    icon: Github,
    title: "State Management",
    tools: ["Zustand", "React Query", "Context API", "Redux (familiar)"],
  },
];

export default function AboutToolchain() {
  return (
    <section className="py-12 sm:py-16 border-b border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 gap-1.5">
            <Code2 className="h-3 w-3" />
            Toolchain
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            My Tech Stack
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use daily to build great products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30"
            >
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <category.icon className="h-4 w-4 text-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
