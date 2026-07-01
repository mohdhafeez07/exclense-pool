"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeHero } from "@/components/ui/Hero";
import { SectionHeading } from "@/components/ui/AnimateIn";
import ServiceCard from "@/components/ui/ServiceCard";
import ProjectCard from "@/components/ui/ProjectCard";
import CTASection from "@/components/ui/CTASection";
import AnimateIn from "@/components/ui/AnimateIn";
import Button from "@/components/ui/Button";
import {
  IMAGES,
  STATS,
  SERVICES,
  PROJECTS,
  TESTIMONIALS,
} from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <>
      <HomeHero />

      {/* Stats */}
      <section className="relative z-10 section-padding-sm !pt-0">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="relative -mt-14 grid grid-cols-2 divide-x divide-y divide-silver-light/20 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_28px_72px_-20px_rgba(8,18,32,0.18)] sm:-mt-20 sm:rounded-3xl lg:grid-cols-4 lg:divide-y-0"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-light to-transparent" />
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="group px-5 py-8 text-center transition-colors duration-500 hover:bg-navy/[0.015] sm:px-8 sm:py-10"
              >
                <p className="font-serif text-3xl font-light text-navy sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.18em] text-silver sm:text-[10px]">
                  {stat.label}
                </p>
                <div className="mx-auto mt-3 h-px w-0 bg-gold-light transition-all duration-500 group-hover:w-8" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
            <AnimateIn>
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_24px_64px_-20px_rgba(8,18,32,0.18)] sm:rounded-3xl">
                  <Image
                    src={IMAGES.about}
                    alt="Luxury estate with swimming pool"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-2xl border border-gold/25 sm:-right-6 sm:-bottom-6 sm:rounded-3xl" />
              </div>
            </AnimateIn>
            <div className="lg:pl-4">
              <SectionHeading
                eyebrow="Our Legacy"
                title="Defining Aquatic Excellence Since 1999"
                description="For over two decades, Exclusive Swimming Pool has been the trusted partner of architects, developers, and private clients who demand nothing less than perfection. From concept sketches to the final tile, we orchestrate every detail with white-glove precision."
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="mt-9 sm:mt-10"
              >
                <Button href="/about" variant="ghost">
                  Discover Our Story
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Complete Pool Building Services"
            description="From initial design and excavation to equipment installation, finishing, and ongoing maintenance—we handle every stage of your pool project."
            align="center"
            className="section-header"
          />
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
            {SERVICES.slice(0, 3).map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                index={i}
              />
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-12 text-center sm:mt-14"
          >
            <Button href="/services" variant="ghost">
              View All Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Masterpieces"
            description="A curated selection of our most celebrated projects across private estates, luxury resorts, and architectural landmarks."
            align="center"
            className="section-header"
          />
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard {...featuredProjects[0]} index={0} featured />
            {featuredProjects.slice(1).map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i + 1} />
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-12 text-center sm:mt-14"
          >
            <Button href="/projects" variant="primary">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.modern}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={88}
          />
          <div className="absolute inset-0 bg-navy/93" />
        </div>
        <div className="section-container relative">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted by the World's Finest"
            align="center"
            light
            className="section-header"
          />
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <AnimateIn key={t.author} delay={i * 0.12}>
                <blockquote className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-7 backdrop-blur-md transition-all duration-500 hover:border-gold-light/25 hover:bg-white/[0.08] sm:rounded-3xl sm:p-9">
                  <span
                    aria-hidden
                    className="numeral-ghost-light pointer-events-none absolute -top-4 right-4 text-6xl select-none sm:text-7xl"
                  >
                    &ldquo;
                  </span>
                  <svg
                    className="mb-6 h-7 w-7 text-gold-light/45 sm:h-8 sm:w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="relative flex-1 font-serif text-base font-light leading-[1.8] text-white/90 sm:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="relative mt-7 border-t border-white/10 pt-6">
                    <p className="text-sm font-medium text-white">{t.author}</p>
                    <p className="mt-1 text-xs text-gold-light/70">{t.role}</p>
                  </footer>
                </blockquote>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="section-container">
          <div className="section-header flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Visual Journey"
              title="Gallery of Excellence"
              description="Immerse yourself in a collection of our finest aquatic environments."
              className="mb-0"
            />
            <Button href="/gallery" variant="ghost" className="shrink-0">
              View Full Gallery
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {[IMAGES.infinity, IMAGES.spa, IMAGES.tropical, IMAGES.night].map(
              (src, i) => (
                <AnimateIn key={src} delay={i * 0.08}>
                  <Link
                    href="/gallery"
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_4px_24px_-8px_rgba(8,18,32,0.12)] ring-1 ring-navy/5 transition-shadow duration-500 hover:shadow-[0_20px_48px_-14px_rgba(8,18,32,0.22)] sm:aspect-square"
                  >
                    <Image
                      src={src}
                      alt="Gallery preview"
                      fill
                      className="object-cover object-center transition-transform duration-[1.3s] ease-out group-hover:scale-[1.08]"
                      sizes="25vw"
                      quality={88}
                    />
                    <div className="absolute inset-0 bg-navy/0 transition-all duration-500 group-hover:bg-navy/35" />
                    <span className="corner-frame tl" />
                    <span className="corner-frame br" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-white">
                        <span className="h-px w-3 bg-gold-light" />
                        View Gallery
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              )
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Create Your Aquatic Masterpiece?"
        description="Schedule a private consultation with our senior design team and begin the journey toward your dream pool."
        image={IMAGES.cta}
      />
    </>
  );
}
