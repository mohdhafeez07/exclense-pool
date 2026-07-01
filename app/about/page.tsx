import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import AnimateIn from "@/components/ui/AnimateIn";
import CTASection from "@/components/ui/CTASection";
import { IMAGES, TEAM_VALUES, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Exclusive Swimming Pool — over 25 years of luxury pool design and construction excellence worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Legacy of Aquatic Artistry"
        subtitle="Where engineering precision meets architectural vision to create pools that transcend the ordinary."
        image={IMAGES.team}
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Born from a Passion for Perfection"
                description="Founded in Miami Beach in 1999, Exclusive Swimming Pool began with a singular mission: to elevate swimming pool construction from a trade to an art form. What started as a boutique studio has grown into an internationally recognized atelier, delivering aquatic environments across six continents."
              />
              <AnimateIn delay={0.2}>
                <p className="mt-6 text-sm leading-[1.8] text-silver sm:text-base">
                  Our team of architects, hydraulic engineers, and master craftsmen
                  collaborate under one roof, ensuring seamless communication and
                  uncompromising quality from the first sketch to the final
                  inspection. We accept a limited number of commissions each year,
                  allowing us to devote extraordinary attention to every project.
                </p>
              </AnimateIn>
            </div>
            <AnimateIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                  src={IMAGES.about}
                  alt="Exclusive Swimming Pool craftsmanship"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-y border-silver-light/20 bg-white section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Excellence in Every Metric"
            align="center"
            className="section-header"
          />
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-silver-light/20 bg-background p-6 text-center transition-all duration-500 hover:border-gold/25 hover:shadow-[0_16px_44px_-16px_rgba(169,130,79,0.18)] sm:p-8">
                  <p className="font-serif text-3xl font-light text-navy sm:text-4xl lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-silver">
                    {stat.label}
                  </p>
                  <div className="mx-auto mt-4 h-px w-0 bg-gold-light transition-all duration-500 group-hover:w-8" />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="The Principles That Guide Us"
            align="center"
            className="section-header"
          />
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {TEAM_VALUES.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.12}>
                <div className="card-premium relative h-full overflow-hidden rounded-2xl border border-silver-light/20 bg-white p-7 transition-all duration-400 hover:border-gold/25 hover:shadow-[0_20px_48px_-16px_rgba(169,130,79,0.18)] sm:p-8">
                  <span
                    aria-hidden
                    className="numeral-ghost pointer-events-none absolute -top-4 -right-2 text-6xl select-none sm:text-7xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative mb-5 h-px w-10 bg-gradient-to-r from-gold to-transparent" />
                  <h3 className="relative font-serif text-xl font-light text-navy">
                    {value.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-relaxed text-silver">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <Image src={IMAGES.infinity} alt="" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-navy/88" />
        </div>
        <div className="section-container relative mx-auto max-w-3xl text-center">
          <AnimateIn>
            <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.3em] text-gold-light sm:text-xs">
              <span className="h-px w-6 bg-gold-light/50" />
              Our Commitment
              <span className="h-px w-6 bg-gold-light/50" />
            </p>
            <blockquote className="font-serif text-2xl font-light leading-relaxed text-white sm:text-3xl lg:text-4xl">
              &ldquo;We do not build pools. We craft living water experiences that
              become the soul of every space they inhabit.&rdquo;
            </blockquote>
            <div className="luxury-divider mx-auto my-7" />
            <p className="text-sm text-white/50">
              Alessandro Vieri, Founder & Creative Director
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection
        title="Partner With Excellence"
        description="Join the distinguished roster of clients who have entrusted us with their most ambitious aquatic visions."
        image={IMAGES.cta}
      />
    </>
  );
}
