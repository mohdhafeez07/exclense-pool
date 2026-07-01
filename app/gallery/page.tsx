import type { Metadata } from "next";
import PageHero from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import GalleryGrid from "@/components/ui/GalleryGrid";
import CTASection from "@/components/ui/CTASection";
import { IMAGES, GALLERY_IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of luxury swimming pools, infinity edges, wellness spas, and water features.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Visual Celebration of Water"
        subtitle="Explore the artistry, craftsmanship, and breathtaking environments we create for our clients."
        image={IMAGES.spa}
      />

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="Collection"
            title="Curated Imagery"
            description="Filter by category or browse our complete collection of luxury aquatic environments."
            align="center"
            className="section-header"
          />
          <GalleryGrid images={GALLERY_IMAGES} />
        </div>
      </section>

      <CTASection
        title="Inspired by What You See?"
        description="Share your vision with our design team and let us create something equally extraordinary for you."
        image={IMAGES.night}
        primaryLabel="Start Your Project"
        primaryHref="/quote"
      />
    </>
  );
}
