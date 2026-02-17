import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "flight-search",
    title: "Flight Search Engine",
    description:
      "Real-time flight comparison with Amadeus API, OAuth2 authentication, and secure token management.",
    longDescription:
      "A production-grade flight search application that integrates with Amadeus API. Features include OAuth2 token caching to handle rate limits, real-time flight data, and responsive design for all devices.",
    image: "/images/projects/flight-search/hero.png",
    tags: ["React", "Next.js", "OAuth2", "Tailwind", "REST API"],
    githubUrl: "https://github.com/David-Samson401/flight-search",
    liveUrl: "https://flight-search.davidogik.dev",
    featured: true,
    year: 2024,
    role: "Sole Developer",
    metrics: {
      lighthouse: 98,
      users: "5k+ searches",
      performance: "40% faster than baseline",
    },
    challenges: [
      "OAuth2 token expiration and refresh race conditions",
      "Rate limiting from Amadeus API",
      "Complex filter state management",
    ],
    solutions: [
      "Implemented token caching with queue system to prevent race conditions",
      "Built request queue with retry logic for rate limits",
      "Used Zustand for performant filter state with URL sync",
    ],
  },
  {
    id: "poll-guru",
    title: "Poll Guru",
    description:
      "Real-time polling application built with SvelteKit, featuring live updates and data visualization.",
    image: "/images/projects/poll-guru/hero.png",
    tags: ["Svelte", "SvelteKit", "Tailwind", "Chart.js", "WebSockets"],
    githubUrl: "https://github.com/David-Samson401/poll-guru",
    liveUrl: "https://poll-guru.vercel.app",
    featured: true,
    year: 2024,
    role: "Sole Developer",
    metrics: {
      lighthouse: 96,
      users: "1k+ polls created",
    },
  },
  {
    id: "devhub",
    title: "DevHub Dashboard",
    description:
      "Developer dashboard for tracking GitHub activity, PRs, and repository metrics.",
    image: "/images/projects/devhub/hero.png",
    tags: ["React", "Zustand", "GitHub API", "Chart.js", "Tailwind"],
    githubUrl: "https://github.com/David-Samson401/devhub",
    liveUrl: "https://devhub.davidogik.dev",
    featured: true,
    year: 2023,
    role: "Sole Developer",
    metrics: {
      lighthouse: 95,
      users: "500+ developers",
    },
  },
  {
    id: "recipe-app",
    title: "Recipe Sharing Platform",
    description:
      "Community-driven recipe sharing with user authentication and rich text editing.",
    image: "/images/projects/recipe-app/hero.jpg",
    tags: ["Next.js", "MongoDB", "NextAuth", "Tailwind"],
    githubUrl: "https://github.com/David-Samson401/recipe-app",
    featured: false,
    year: 2023,
    role: "Sole Developer",
  },
];
