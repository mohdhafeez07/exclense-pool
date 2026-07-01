import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import AnimateIn from "@/components/ui/AnimateIn";
import { QuoteForm } from "@/components/ui/Forms";
import { IMAGES } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Request a private consultation and quote for your luxury swimming pool project.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Request a Private Quote"
        subtitle="Share your vision with our senior design team. All inquiries are treated with complete confidentiality."
        image={IMAGES.modern}
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="What to Expect"
                title="Your Consultation Journey"
                description="After submitting your request, a senior design consultant will contact you within 24 hours to schedule a private consultation—either in person at your property or via secure video conference."
              />
              <AnimateIn delay={0.15}>
                <div className="mt-10 space-y-6 sm:space-y-8">
                  {[
                    {
                      title: "Confidential Review",
                      desc: "Your project details are protected under our strict confidentiality agreement.",
                    },
                    {
                      title: "Site Assessment",
                      desc: "We evaluate topography, access, utilities, and architectural context.",
                    },
                    {
                      title: "Preliminary Concept",
                      desc: "Receive initial design direction and investment range within two weeks.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 rounded-xl border border-silver-light/20 bg-white p-4 transition-colors duration-400 hover:border-gold/25 sm:p-5">
                      <div className="mt-1 h-px w-6 shrink-0 bg-gold" />
                      <div>
                        <h3 className="text-sm font-medium text-navy">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-silver">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <div className="mt-10 rounded-2xl border border-silver-light/20 bg-white p-6 transition-colors duration-400 hover:border-gold/25 sm:mt-12 sm:p-7">
                  <p className="text-xs font-medium uppercase tracking-widest text-silver">
                    Prefer to speak directly?
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="mt-2 block font-serif text-xl text-navy transition-colors hover:text-gold"
                  >
                    {SITE.phone}
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm text-silver transition-colors hover:text-gold"
                  >
                    {SITE.email}
                  </a>
                </div>
              </AnimateIn>
            </div>

            <div className="lg:col-span-3">
              <AnimateIn>
                <div className="glass-card rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10">
                  <h2 className="mb-8 font-serif text-2xl font-light text-navy">
                    Project Inquiry Form
                  </h2>
                  <QuoteForm />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-48 overflow-hidden sm:h-64 lg:h-80">
        <Image
          src={IMAGES.cta}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
      </section>
    </>
  );
}
