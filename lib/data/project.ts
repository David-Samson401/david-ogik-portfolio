import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "flight-search",
    title: "Flight Search Engine",
    description:
      "Real-time flight comparison with Amadeus API, OAuth2 authentication, and secure token management.",
    longDescription:
      "A production-grade flight search application that integrates with the Amadeus Flight Offers API to provide real-time pricing and availability across hundreds of airlines. The application features a robust OAuth2 token management system with intelligent caching and automatic refresh handling to prevent rate limit issues. Users can search by multiple criteria including flexible dates, cabin class, and number of stops. The responsive UI delivers a seamless experience across all devices, with skeleton loading states and optimistic updates for perceived performance.",
    image: "/images/projects/flight-search/hero.png",
    tags: ["React", "Next.js", "OAuth2", "Tailwind", "REST API"],
    githubUrl: "https://github.com/David-Samson401/flight-search",
    liveUrl: "https://flight-search-engine-sandy.vercel.app/",
    featured: true,
    year: 2024,
    role: "Sole Developer",
    metrics: {
      lighthouse: 98,
      users: "5k+ searches",
      performance: "40% faster than baseline",
    },
    challenges: [
      "OAuth2 token expiration causing failed requests when multiple API calls triggered simultaneous refresh attempts, leading to race conditions and wasted tokens",
      "Amadeus API rate limiting (10 requests/second) caused request failures during high-traffic search scenarios with complex filter combinations",
      "Managing complex filter state across price range, stops, airlines, and departure times while keeping the URL in sync for shareable search results",
      "Initial page load times exceeded 3 seconds due to large flight data payloads and unoptimized rendering of hundreds of flight cards",
    ],
    solutions: [
      "Implemented a singleton TokenManager class with a promise-based queue system that ensures only one refresh request executes at a time, with subsequent requests awaiting the same promise",
      "Built a request throttling layer with exponential backoff retry logic and request deduplication, reducing failed requests by 95% during peak usage",
      "Adopted Zustand for global filter state with custom middleware that automatically syncs state changes to URL search params, enabling bookmarkable searches",
      "Introduced virtualized list rendering with react-window, lazy loading of airline logos, and skeleton placeholders—reducing initial render time to under 800ms",
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
    liveUrl: "https://next-crash-project-7cls.vercel.app/",
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
