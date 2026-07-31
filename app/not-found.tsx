import Link from "next/link";
import { Code2, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Code2 className="h-8 w-8" />
          </div>
        </div>

        <h1 className="text-7xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-foreground mb-3">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          Looks like this page doesn&apos;t exist. It may have been moved,
          deleted, or you may have mistyped the URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium border border-border bg-card hover:border-primary/40 transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            View My Work
          </Link>
        </div>
      </div>
    </main>
  );
}
