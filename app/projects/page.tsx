import type { Metadata } from "next";
import PageHero from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import ProjectCard from "@/components/ui/ProjectCard";
import CTASection from "@/components/ui/CTASection";
import { IMAGES, PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of luxury swimming pool projects across private estates, resorts, and architectural landmarks worldwide.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Masterpieces Around the World"
        subtitle="Each project represents a unique collaboration between our team, visionary architects, and discerning clients."
        image={IMAGES.tropical}
      />

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="Selected Works"
            title="Projects That Define Excellence"
            description="From cliffside infinity pools to rooftop lap pools, our portfolio spans the full spectrum of luxury aquatic design."
            align="center"
            className="section-header"
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            <ProjectCard {...PROJECTS[0]} index={0} featured />
            {PROJECTS.slice(1).map((project, i, arr) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={i + 1}
                spanFull={arr.length % 2 === 1 && i === arr.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your Vision Deserves a Place in Our Portfolio"
        description="Let us bring the same level of artistry and precision to your next aquatic project."
        image={IMAGES.hero}
      />
    </>
  );
}
