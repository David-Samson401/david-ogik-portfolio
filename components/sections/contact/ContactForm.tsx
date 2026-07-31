"use client";

import {
  Copy,
  Check,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Clock,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useContactForm } from "@/hooks/useContactForm";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

export default function ContactForm() {
  const { formData, formStatus, errors, handleInputChange, handleSubmit } =
    useContactForm();
  const { copied, copy } = useCopyToClipboard();

  const email = "divokorino284@gmail.com";

  return (
    <>
      {/* Contact cards */}
      <section className="py-10 sm:py-12 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                icon: Mail,
                title: "Email",
                subtitle: email,
                onAction: () => copy(email),
                actionLabel: copied ? "Copied!" : "Copy",
                actionDone: copied,
              },
              {
                icon: Github,
                title: "GitHub",
                subtitle: "github.com/David-Samson401",
                href: "https://github.com/David-Samson401",
              },
              {
                icon: Linkedin,
                title: "LinkedIn",
                subtitle: "linkedin.com/in/david-ogik-dev",
                href: "https://www.linkedin.com/in/david-ogik-dev",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="h-5 w-5" />
                  </div>
                  {"onAction" in card ? (
                    <button
                      onClick={card.onAction}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Copy email address"
                    >
                      {card.actionDone ? (
                        <>
                          <Check className="h-4 w-4 text-success" />
                          <span className="text-success">{card.actionLabel}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>{card.actionLabel}</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <Link
                      href={card.href!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Open</span>
                    </Link>
                  )}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{card.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground break-all">
                  {card.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + availability */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                Send a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>

              {formStatus.type === "success" && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <p className="text-sm text-success">{formStatus.message}</p>
                </div>
              )}

              {formStatus.type === "error" && (
                <div className="mb-6 flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/10 p-4">
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm text-destructive">{formStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${
                      errors.name ? "border-destructive" : "border-input"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 ${
                      errors.email ? "border-destructive" : "border-input"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none ${
                      errors.message ? "border-destructive" : "border-input"
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={formStatus.type === "loading"}
                  className="w-full sm:w-auto"
                >
                  {formStatus.type === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Availability sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border/60 bg-card p-6 lg:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Availability
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Open to Opportunities
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Freelance, full-time, and contract work
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <Badge variant="outline" className="text-xs">
                          Freelance
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Full-time
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Contract
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">
                        Response Time
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Typically within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <p className="text-sm text-muted-foreground">
                      Based in{" "}
                      <span className="text-foreground font-medium">
                        Kenya (EAT, UTC+3)
                      </span>
                      . Flexible with meeting times across timezones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
