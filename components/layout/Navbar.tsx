"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Glass backdrop */}
      <div className="absolute inset-0 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50" />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
            <Code2 className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            David Ogik
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:items-center md:gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/David-Ogik-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Resume
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="relative border-b border-border bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/David-Ogik-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="block rounded-lg border border-primary/30 bg-primary/10 px-3 py-2.5 text-center text-base font-medium text-primary transition-colors hover:bg-primary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
