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
    githubUrl: "https://github.com/David-Samson401/flight-search-engine",
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
    id: "devents",
    title: "DevEvents - Developer Events Platform",
    description:
      "A full-stack event discovery platform where developers can find, create, and book conferences, meetups, and hackathons.",
    longDescription:
      "Built with Next.js, MongoDB, and Cloudinary, DevEvents allows users to browse upcoming tech events, view detailed agendas, book spots, and even create their own events. Features include image uploads, real-time booking, event filtering by mode (virtual/in-person/hybrid), and a complete admin flow for event creation.",
    image: "/images/projects/devents/hero.png",
    tags: ["Next.js", "MongoDB", "Cloudinary", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/David-Samson401/DevEvents",
    liveUrl: "https://next-crash-project-m6f5.vercel.app/",
    featured: true,
    year: 2024,
    role: "Sole Developer",
    metrics: {
      lighthouse: 96,
      users: "Live platform",
    },
    challenges: [
      "Handling image uploads with Cloudinary",
      "Building booking system without authentication",
      "Managing event dates and filtering",
      "Deploying with MongoDB on Vercel",
    ],
    solutions: [
      "Integrated Cloudinary API with server actions",
      "Used email-based booking with unique IDs",
      "Implemented date comparisons with ISO strings",
      "Added environment variables and IP whitelisting",
    ],
  },
  {
    id: "javascript-amazon-project",
    title: "Amazon-Style E-Commerce (JavaScript Mastery Project)",
    description:
      "Interactive e-commerce interface built with vanilla JavaScript featuring dynamic product rendering, cart functionality, and local storage persistence.",
    longDescription:
      "I built this project from scratch to deeply understand core JavaScript concepts: DOM manipulation, event handling, state management with local storage, and dynamic UI updates. The challenge was implementing a fully functional shopping cart experience without any frameworks - just pure JavaScript.",
    image: "/images/projects/javascript-amazon/hero.png",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "DOM Manipulation"],
    githubUrl: "https://github.com/David-Samson401/Javascript-Amazon-Project",
    liveUrl: "https://javascript-amazon-project-orcin.vercel.app/",
    featured: true,
    year: 2023,
    role: "Sole Developer",
    metrics: {
      lighthouse: 92,
      users: "40+ items",
    },
  },
  {
    id: "amazon-html-css-project",
    title: "Amazon Homepage Clone (CSS Mastery Project)",
    description:
      "Pixel-perfect Amazon homepage clone built with pure HTML and CSS, demonstrating advanced Grid, Flexbox, and responsive design techniques.",
    longDescription:
      "This project was all about mastering CSS. I challenged myself to recreate Amazon's complex homepage layout without any frameworks, focusing on: pixel-perfect responsive design, CSS Grid for complex layouts, Flexbox for components, and mobile-first breakpoints. No framework, no JavaScript - just pure HTML and CSS craftsmanship.",
    image: "/images/projects/amazon-html-css/hero.png",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"],
    githubUrl: "https://github.com/David-Samson401/Amazon.com-HTML-CSS-Project",
    liveUrl: "https://amazon-com-html-css-project.vercel.app/",
    featured: true,
    year: 2023,
    role: "Sole Developer",
    metrics: {
      lighthouse: 95,
      users: "20+ sections",
    },
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
];
