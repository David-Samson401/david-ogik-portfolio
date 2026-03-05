import type { Metadata } from "next";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | David Ogik",
  description:
    "Get in touch with David Ogik — frontend developer open to freelance, full-time, and contract opportunities. Based in Kenya, working with teams worldwide.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,rgba(59,130,246,0.05),transparent)]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Let&apos;s Connect
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Interested in working together? Reach out through any of these
              channels. I&apos;m always excited to discuss new projects and
              opportunities.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
