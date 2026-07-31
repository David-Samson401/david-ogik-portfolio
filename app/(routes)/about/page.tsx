import AboutHero from "@/components/sections/about/AboutHero";
import AboutJourney from "@/components/sections/about/AboutJourney";
import AboutPhilosophy from "@/components/sections/about/AboutPhilosophy";
import AboutToolchain from "@/components/sections/about/AboutToolchain";
import AboutBeyondCode from "@/components/sections/about/AboutBeyondCode";
import AboutCTA from "@/components/sections/about/AboutCTA";

export const metadata = {
  title: "About | David Ogik",
  description:
    "Learn about David Ogik - a Mid-Level Frontend Developer with 4+ years of experience building performant web applications.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutJourney />
      <AboutPhilosophy />
      <AboutToolchain />
      <AboutBeyondCode />
      <AboutCTA />
    </main>
  );
}
