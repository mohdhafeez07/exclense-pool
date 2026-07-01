import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimateIn from "@/components/ui/AnimateIn";
import CTASection from "@/components/ui/CTASection";
import { IMAGES, SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Luxury swimming pool design, construction, infinity pools, wellness spas, water features, and renovation services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Aquatic Solutions"
        subtitle="Every service is delivered with the same uncompromising standards that define our reputation."
        image={IMAGES.infinity}
      />

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="Full Spectrum"
            title="Everything Your Pool Project Needs"
            description="Our integrated pool building team covers design, construction, equipment, finishes, renovation, and maintenance—so you work with one trusted partner from start to finish."
            align="center"
            className="section-header"
          />
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                features={service.features}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="Our Process"
            title="The ESP Methodology"
            align="center"
            light
            className="section-header"
          />
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Private consultation to understand your vision, site conditions, and lifestyle aspirations.",
              },
              {
                step: "02",
                title: "Design",
                desc: "Architectural concepts, 3D renderings, and engineering studies refined to perfection.",
              },
              {
                step: "03",
                title: "Construction",
                desc: "White-glove build management with weekly progress reports and quality inspections.",
              },
              {
                step: "04",
                title: "Delivery",
                desc: "Final commissioning, staff training, and lifetime maintenance support program.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.step} delay={i * 0.1}>
                <div className="group relative overflow-hidden glass rounded-2xl p-6 text-center transition-all duration-500 hover:border-gold-light/25 sm:p-8">
                  <span className="font-serif text-3xl font-light text-gold-light sm:text-4xl">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-light text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                  <div className="mx-auto mt-5 h-px w-0 bg-gold-light/60 transition-all duration-500 group-hover:w-8" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <AnimateIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src={IMAGES.waterFeature}
                  alt="Luxury water feature installation"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
            <div>
              <SectionHeading
                eyebrow="Maintenance"
                title="Lifetime Care Program"
                description="Our relationship doesn't end at handover. Our dedicated maintenance division provides seasonal servicing, water chemistry management, equipment upgrades, and 24/7 emergency response for all ESP-built pools."
              />
              <AnimateIn delay={0.15}>
                <ul className="mt-8 space-y-4">
                  {[
                    "Quarterly professional servicing",
                    "Remote monitoring & automation",
                    "Priority emergency response",
                    "Annual structural inspections",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-silver"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10">
                        <svg
                          className="h-3 w-3 text-gold"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discuss Your Project Requirements"
        description="Our senior consultants are available for confidential discussions about your upcoming pool project."
        image={IMAGES.spa}
        primaryLabel="Request a Quote"
        primaryHref="/quote"
      />
    </>
  );
}
