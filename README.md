# David Ogik Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000?style=flat-square&logo=vercel)
![Lighthouse](https://img.shields.io/badge/Lighthouse-98+-4285F4?style=flat-square&logo=lighthouse)

A modern, performant portfolio showcasing my journey as a **Mid-Level Frontend Developer** with 4+ years of experience building production web applications.

## 🚀 Live Demo

**[→ View Live Portfolio](https://david-ogik-portfolio-jjvb.vercel.app/)**

---

## 📸 Screenshots

| Homepage                                     | Projects Grid                                |
| -------------------------------------------- | -------------------------------------------- |
| ![Homepage](public/screenshots/homepage.png) | ![Projects](public/screenshots/projects.png) |

| Case Study                                       | Mobile View                              |
| ------------------------------------------------ | ---------------------------------------- |
| ![Case Study](public/screenshots/case-study.png) | ![Mobile](public/screenshots/mobile.png) |

> 💡 _Screenshots coming soon — run locally to preview_

---

## ✨ Features

- 🎯 **5 Featured Projects** with detailed case studies, challenges & solutions
- 🌓 **Dark/Light Mode** with system preference detection
- 📱 **Fully Responsive** — mobile-first design approach
- ⚡ **98+ Lighthouse Score** — optimized for performance
- 📧 **Contact Form** with server-side validation and API route
- 📄 **Resume Download** — PDF resume readily available
- 🔍 **Project Filtering** — filter by technology stack
- 🎨 **Modern UI** — clean design with subtle animations
- ♿ **Accessible** — WCAG 2.2 AA compliant
- 🚀 **Deployed on Vercel** — CI/CD with GitHub integration

---

## 🛠️ Tech Stack

| Category             | Technologies                       |
| -------------------- | ---------------------------------- |
| **Framework**        | Next.js 15, React 19               |
| **Language**         | TypeScript 5                       |
| **Styling**          | Tailwind CSS v4, CSS Variables     |
| **UI Components**    | Custom components, Lucide Icons    |
| **State Management** | React useState, Zustand            |
| **Form Handling**    | React Hook Form, Zod validation    |
| **API**              | Next.js API Routes, Server Actions |
| **Deployment**       | Vercel                             |
| **Other**            | ESLint, Prettier                   |

---

## 📂 Projects Showcase

### 1. Flight Search Engine

> Real-time flight comparison with Amadeus API integration

- **Tech:** React, Next.js, OAuth2, Tailwind, REST API
- **Highlights:** Token management, rate limiting, 98 Lighthouse score
- 🔗 [Live Demo](https://flight-search-engine-sandy.vercel.app/) • [GitHub](https://github.com/David-Samson401/flight-search)

### 2. DevEvents - Developer Events Platform

> Full-stack event discovery platform for conferences, meetups & hackathons

- **Tech:** Next.js, MongoDB, Cloudinary, TypeScript, Tailwind
- **Highlights:** Image uploads, booking system, event filtering
- 🔗 [Live Demo](https://next-crash-project-7cls.vercel.app) • [GitHub](https://github.com/David-Samson401/DevEvents)

### 3. Amazon E-Commerce Clone (JavaScript)

> Interactive e-commerce interface with vanilla JavaScript

- **Tech:** JavaScript, HTML5, CSS3, LocalStorage, DOM Manipulation
- **Highlights:** Cart functionality, dynamic rendering, 40+ products
- 🔗 [Live Demo](https://javascript-amazon-project-orcin.vercel.app/) • [GitHub](https://github.com/David-Samson401/Javascript-Amazon-Project)

### 4. Amazon Homepage Clone (CSS)

> Pixel-perfect Amazon homepage recreation

- **Tech:** HTML5, CSS3, Flexbox, CSS Grid, Responsive Design
- **Highlights:** Pure CSS, 20+ sections, mobile-first approach
- 🔗 [Live Demo](https://amazon-com-html-css-project.vercel.app/) • [GitHub](https://github.com/David-Samson401/Amazon.com-HTML-CSS-Project)

### 5. Poll Guru

> Real-time polling application with live updates

- **Tech:** Svelte, SvelteKit, Tailwind, Chart.js, WebSockets
- **Highlights:** Real-time updates, data visualization, 1k+ polls
- 🔗 [Live Demo](https://poll-guru.vercel.app) • [GitHub](https://github.com/David-Samson401/poll-guru)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/David-Samson401/david-ogik-portfolio.git

# Navigate to project directory
cd david-ogik-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

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
│   ├── sections/           # Hero, FeaturedProjects
│   ├── shared/             # Shared components
│   └── ui/                 # Button, Badge, Card
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

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Contact form (optional - logs to console if not set)
RESEND_API_KEY=your_resend_api_key
```

---

## 📊 Performance

| Metric         | Score |
| -------------- | ----- |
| Performance    | 98    |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 100   |

_Lighthouse scores measured on production deployment_

---

## 🤝 Connect

- **Portfolio:** [david-ogik-portfolio-jjvb.vercel.app](https://david-ogik-portfolio-jjvb.vercel.app/)
- **GitHub:** [github.com/David-Samson401](https://github.com/David-Samson401)
- **LinkedIn:** [linkedin.com/in/david-ogik-17784627a](https://linkedin.com/in/david-ogik-17784627a)
- **Email:** divokorino284@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/David-Samson401">David Ogik</a>
</p>
