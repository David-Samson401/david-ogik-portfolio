import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://david-ogik-portfolio-jjvb.vercel.app/sitemap.xml",
  };
}
