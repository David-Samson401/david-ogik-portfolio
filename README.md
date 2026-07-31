# David Ogik Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?style=flat-square&logo=vercel)

A modern, performant portfolio showcasing my journey as a **Mid-Level Frontend Developer** with 4+ years of experience building production web applications.

## Live Demo

**[-> View Live Portfolio](https://david-ogik-portfolio-jjvb.vercel.app/)**

---

## Features

- **5 Featured Projects** with detailed case studies, challenges & solutions
- **Dark Theme** -- clean, modern dark interface
- **Fully Responsive** -- mobile-first design approach
- **98+ Lighthouse Score** -- optimized for performance
- **Contact Form** with Zod validation and Resend email integration
- **Resume Download** -- PDF resume readily available
- **Project Filtering** -- filter by technology stack
- **Modern UI** -- custom components with Tailwind CSS v4
- **Accessible** -- semantic HTML, keyboard navigation, ARIA labels
- **Deployed on Vercel** -- CI/CD with GitHub integration

---

## Tech Stack

| Category             | Technologies                       |
| -------------------- | ---------------------------------- |
| **Framework**        | Next.js 15, React 19               |
| **Language**         | TypeScript 5                       |
| **Styling**          | Tailwind CSS v4, CSS Variables     |
| **UI Components**    | Custom components, Lucide Icons    |
| **Validation**       | Zod                                |
| **API**              | Next.js API Routes                 |
| **Email**            | Resend                             |
| **Deployment**       | Vercel                             |
| **Analytics**        | Vercel Analytics                   |
| **Tooling**          | ESLint, Prettier                   |

---

## Projects Showcase

### 1. Flight Search Engine

> Real-time flight comparison with Amadeus API integration

- **Tech:** React, Next.js, OAuth2, Tailwind, REST API
- **Highlights:** Token management, rate limiting, 98 Lighthouse score
- [Live Demo](https://flight-search-engine-sandy.vercel.app/) . [GitHub](https://github.com/David-Samson401/flight-search)

### 2. DevEvents - Developer Events Platform

> Full-stack event discovery platform for conferences, meetups & hackathons

- **Tech:** Next.js, MongoDB, Cloudinary, TypeScript, Tailwind
- **Highlights:** Image uploads, booking system, event filtering
- [Live Demo](https://next-crash-project-m6f5.vercel.app/) . [GitHub](https://github.com/David-Samson401/DevEvents)

### 3. Amazon E-Commerce Clone (JavaScript)

> Interactive e-commerce interface with vanilla JavaScript

- **Tech:** JavaScript, HTML5, CSS3, LocalStorage, DOM Manipulation
- **Highlights:** Cart functionality, dynamic rendering, 40+ products
- [Live Demo](https://javascript-amazon-project-orcin.vercel.app/) . [GitHub](https://github.com/David-Samson401/Javascript-Amazon-Project)

### 4. Amazon Homepage Clone (CSS)

> Pixel-perfect Amazon homepage recreation

- **Tech:** HTML5, CSS3, Flexbox, CSS Grid, Responsive Design
- **Highlights:** Pure CSS, 20+ sections, mobile-first approach
- [Live Demo](https://amazon-com-html-css-project.vercel.app/) . [GitHub](https://github.com/David-Samson401/Amazon.com-HTML-CSS-Project)

### 5. Poll Guru

> Real-time polling application with live updates

- **Tech:** Svelte, SvelteKit, Tailwind, Chart.js, WebSockets
- **Highlights:** Real-time updates, data visualization, 1k+ polls
- [Live Demo](https://poll-guru.vercel.app) . [GitHub](https://github.com/David-Samson401/poll-guru)

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/David-Samson401/david-ogik-portfolio.git

# Navigate to project directory
cd david-ogik-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
david-ogik-portfolio/
├── app/
│   ├── (routes)/
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page with form
│   │   └── work/
│   │       ├── page.tsx    # Projects listing
│   │       └── [slug]/     # Dynamic project pages
│   ├── api/
│   │   └── contact/        # Contact form API route
│   ├── layout.tsx
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── projects/           # ProjectCard
│   ├── sections/           # Hero, FeaturedProjects, ContactForm
│   └── ui/                 # Button, Badge, Card
├── hooks/                  # Custom React hooks
├── lib/
│   ├── data/
│   │   └── project.ts      # Projects data
│   └── utils/
├── public/
│   └── images/projects/    # Project screenshots
└── types/
    └── project.ts          # TypeScript types
```

---

## Environment Variables

Create a `.env.local` file for local development:

```env
# Contact form (optional - logs to console if not set)
RESEND_API_KEY=your_resend_api_key
```

---

## Connect

- **Portfolio:** [david-ogik-portfolio-jjvb.vercel.app](https://david-ogik-portfolio-jjvb.vercel.app/)
- **GitHub:** [github.com/David-Samson401](https://github.com/David-Samson401)
- **LinkedIn:** [linkedin.com/in/david-ogik-dev](https://linkedin.com/in/david-ogik-dev)
- **Email:** divokorino284@gmail.com

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built by <a href="https://github.com/David-Samson401">David Ogik</a>
</p>
