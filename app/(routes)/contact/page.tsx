import type { Metadata } from "next";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | David Ogik",
  description:
    "Get in touch with David Ogik — frontend developer open to freelance, full-time, and contract opportunities. Based in Kenya, working with teams worldwide.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative isolate overflow-hidden border-b border-border/60 pt-14 sm:pt-20 pb-10 sm:pb-14">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-primary">Get in Touch</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Interested in working together? Reach out through any of these
            channels. I&apos;m always excited to discuss new projects and
            opportunities.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
