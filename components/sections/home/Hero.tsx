import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20" style={{ backgroundColor: '#0A0C15' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <div className="mb-6 inline-flex items-center rounded-full px-3 py-1 text-sm text-gray-300 ring-1 ring-gray-700">
              ⚡ 4+ years building production React applications.{' '}
              <Link href="/work" className="font-semibold text-primary ml-1">
                See my work <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
              Frontend developer who turns{' '}
              <span className="text-primary">complex requirements</span>{' '}
              into smooth experiences
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              I architect and build performant, accessible web applications with React, Next.js,
              and Tailwind. From OAuth-secured flight search engines to real-time dashboards — I deliver
              code that scales and users love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 text-lg rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="/David-Ogik-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center justify-center gap-2 h-12 px-6 text-lg rounded-md font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <FileText className="h-4 w-4" />
                Download resume
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400 justify-center md:justify-start">
              <Link href="https://github.com/David-Samson401" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <Github size={18} />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/david-ogik-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Profile Photo - Enlarged */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <Image
                src="/images/david-ogik-profile.jpg"
                alt="David Ogik"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
