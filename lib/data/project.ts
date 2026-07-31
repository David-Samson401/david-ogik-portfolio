import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "nyumba-find",
    title: "Nyumba Find — Property Search Platform",
    description:
      "Interactive property discovery platform with map-based search, Supabase backend, and smooth animations powered by Framer Motion.",
    longDescription:
      "A full-stack property search platform built with Next.js 16 and Supabase. \"Nyumba\" means \"house\" in Swahili — the app enables users to discover rental properties through an interactive Leaflet map with custom markers and popups. Features include server-side search with real-time filtering by location, price range, and property type, backed by a Supabase PostgreSQL database with Row-Level Security. Smooth page transitions and micro-interactions are handled by Framer Motion, while the UI is built with Radix primitives and Tailwind CSS for a polished, accessible experience across all devices.",
    image: "/images/projects/nyumba-find/hero.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Leaflet", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/David-Samson401/nyumba-find",
    liveUrl: "https://nyumba-find.vercel.app",
    featured: true,
    year: 2026,
    role: "Sole Developer",
    metrics: {
      lighthouse: 97,
      users: "Live platform",
    },
    challenges: [
      "Integrating interactive Leaflet maps with server-rendered React components required careful handling of browser-only APIs and hydration mismatches",
      "Implementing Supabase Row-Level Security policies to enforce property data access rules at the database level without compromising query performance",
      "Coordinating map viewport state with search results across URL search params, requiring bidirectional sync between the map and filter panels",
      "Managing Next.js 16 server components alongside client-side map interactions, balancing SSR benefits with interactive map requirements",
    ],
    solutions: [
      "Used dynamic imports with `ssr: false` for Leaflet components and created a client-side Map wrapper that hydrates after mount, eliminating hydration errors",
      "Designed a layered RLS policy system with helper database functions that enforced property visibility rules while maintaining sub-100ms query times",
      "Built a custom `useMapSync` hook that watches URL search params changes and updates the map bounds/filters reactively using React 19's `use` hook",
      "Structured the app with clear server/client boundaries: server components handle data fetching and SEO, while client islands manage map interactivity and animations",
    ],
  },
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
    id: "javascript-amazon",
    title: "Amazon E-Commerce Clone (JavaScript)",
    description:
      "Interactive e-commerce interface built with vanilla JavaScript featuring cart functionality and dynamic product rendering.",
    longDescription:
      "A fully interactive Amazon e-commerce clone built from scratch with vanilla JavaScript. Features include a dynamic product catalog with 40+ items, a fully functional shopping cart with add/remove/update capabilities, persistent state via LocalStorage, and real-time order summary calculations. The UI is built with semantic HTML5 and CSS3, demonstrating strong DOM manipulation skills and an understanding of state management without frameworks.",
    image: "/images/projects/javascript-amazon/hero.png",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "DOM"],
    githubUrl: "https://github.com/David-Samson401/Javascript-Amazon-Project",
    liveUrl: "https://javascript-amazon-project-orcin.vercel.app/",
    featured: true,
    year: 2023,
    role: "Sole Developer",
    metrics: {
      lighthouse: 95,
      users: "40+ products",
    },
    challenges: [
      "Managing complex cart state without a framework required careful orchestration of DOM updates and event handling",
      "Persisting cart data across page reloads while handling edge cases like expired storage and data corruption",
      "Rendering dynamic product listings efficiently with filtering and sorting without virtual DOM diffing",
      "Calculating real-time order totals across multiple tax and shipping scenarios",
    ],
    solutions: [
      "Built a centralized state object with pub/sub pattern for predictable updates and clean separation from DOM logic",
      "Implemented a storage abstraction layer with JSON serialization, schema validation, and graceful fallback defaults",
      "Used DocumentFragment for batch DOM updates and template cloning to minimize reflow and layout thrashing",
      "Created a modular pricing utility with chainable calculation methods that handle all edge cases deterministically",
    ],
  },
  {
    id: "amazon-html-css",
    title: "Amazon Homepage Clone (CSS)",
    description:
      "Pixel-perfect Amazon homepage recreation using pure HTML5 and CSS3 with responsive design.",
    longDescription:
      "A meticulous pixel-perfect clone of the Amazon.com homepage built entirely with HTML5 and CSS3. The project recreates 20+ distinct sections including the navigation bar, hero carousel, product grids, recommendation carousels, and footer. It demonstrates mastery of CSS layout techniques including Flexbox, CSS Grid, positioning, and responsive design patterns. Every detail from hover states to spacing matches the original, achieving a faithful reproduction without any JavaScript.",
    image: "/images/projects/amazon-html-css/hero.png",
    tags: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive"],
    githubUrl: "https://github.com/David-Samson401/Amazon.com-HTML-CSS-Project",
    liveUrl: "https://amazon-com-html-css-project.vercel.app/",
    featured: true,
    year: 2023,
    role: "Sole Developer",
    metrics: {
      lighthouse: 98,
      users: "20+ sections",
    },
    challenges: [
      "Recreating complex nested layouts from a live production site without access to source code, requiring careful inspection of visual patterns",
      "Building a fully responsive design that matches Amazon's adaptive layout behavior across mobile, tablet, and desktop breakpoints",
      "Managing CSS specificity across 20+ distinct sections while keeping styles maintainable and avoiding unintended style leaks",
      "Implementing the multi-level navigation menu with flyout submenus using only CSS hover states and sibling selectors",
    ],
    solutions: [
      "Used browser DevTools to extract layout patterns and color palettes, then rebuilt from scratch with clean architectural decisions rather than copying code",
      "Adopted a mobile-first approach with progressive enhancement, using min-width media queries to layer complexity at each breakpoint",
      "Organized CSS using a component-scoped naming convention (BEM-inspired) that mirrors section boundaries, eliminating cascade conflicts",
      "Leveraged CSS :hover, :focus-within, and adjacent sibling combinators to create fully functional dropdown menus with smooth transitions",
    ],
  },
];
