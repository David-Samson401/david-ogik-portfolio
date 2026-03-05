import Link from "next/link";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold">David Ogik</span>
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link
              href="https://github.com/David-Samson401"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/david-ogik-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:divokorino284@gmail.com"
              aria-label="Email"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} David Ogik. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
