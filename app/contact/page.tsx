import type { Metadata } from "next";
import PageHero from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import AnimateIn from "@/components/ui/AnimateIn";
import { ContactForm } from "@/components/ui/Forms";
import { IMAGES } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Exclusive Swimming Pool for luxury pool design consultations and inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        subtitle="Whether you're beginning a new project or seeking expert advice, our concierge team is here to assist."
        image={IMAGES.resort}
      />

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Get in Touch"
                title="Our Concierge Team"
                description="Reach out through any channel below. We respond to all inquiries within one business day."
              />

              <div className="mt-10 space-y-8">
                {[
                  {
                    label: "Phone",
                    value: SITE.phone,
                    href: SITE.phoneHref,
                  },
                  {
                    label: "Email",
                    value: SITE.email,
                    href: `mailto:${SITE.email}`,
                  },
                  {
                    label: "WhatsApp",
                    value: "Message us on WhatsApp",
                    href: SITE.whatsappHref,
                  },
                ].map((item, i) => (
                  <AnimateIn key={item.label} delay={i * 0.1}>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-silver">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="mt-1 block font-serif text-lg text-navy transition-colors hover:text-gold"
                        {...(item.label === "WhatsApp"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.value}
                      </a>
                    </div>
                  </AnimateIn>
                ))}

                <AnimateIn delay={0.3}>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-silver">
                      Studio
                    </p>
                    <p className="mt-1 font-serif text-lg text-navy">
                      {SITE.address}
                    </p>
                    <p className="text-sm text-silver">{SITE.city}</p>
                    <p className="mt-2 text-sm text-silver">{SITE.hours}</p>
                  </div>
                </AnimateIn>
              </div>
            </div>

            <div className="lg:col-span-3">
              <AnimateIn>
                <div className="glass-card rounded-2xl p-6 sm:rounded-3xl sm:p-8 lg:p-10">
                  <h2 className="mb-8 font-serif text-2xl font-light text-navy">
                    Send a Message
                  </h2>
                  <ContactForm />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 sm:py-16">
        <div className="section-container text-center">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-widest text-white/40">
              Global Presence
            </p>
            <p className="mt-4 font-serif text-2xl font-light text-white sm:text-3xl">
              Miami · Dubai · London · Singapore · Gstaad
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
