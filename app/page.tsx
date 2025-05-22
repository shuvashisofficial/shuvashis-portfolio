import { Hero } from "@/components/home/hero";
import { FeaturedResearch } from "@/components/home/featured-research";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
import { Achievements } from "@/components/home/achievements";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedResearch />
      <FeaturedProjects />
      <SkillsShowcase />
      <Achievements />
      <Testimonials />
    </div>
  );
}