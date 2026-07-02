"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { HERO_SLIDES, IMAGES } from "@/lib/data";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 7000;
const luxuryEase = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  title,
  subtitle,
  image = IMAGES.hero,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative flex min-h-[58svh] items-end overflow-hidden pt-28 sm:min-h-[62svh] sm:pt-32 lg:min-h-[68svh]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="img-overlay absolute inset-0" />
      </div>

      <span className="pointer-events-none absolute top-6 left-4 z-20 hidden h-6 w-6 border-t border-l border-gold-light/50 sm:left-6 sm:block lg:left-8" />
      <span className="pointer-events-none absolute top-6 right-4 z-20 hidden h-6 w-6 border-t border-r border-gold-light/50 sm:right-6 sm:block lg:right-8" />

      <div className="section-container relative w-full pb-14 sm:pb-16 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          {eyebrow && (
            <motion.p
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-light sm:text-xs"
            >
              <span className="h-px w-6 bg-gold-light/60" />
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            variants={fadeUp}
            className="hero-text-shadow font-serif text-[2.125rem] font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-sm leading-[1.75] text-white/80 sm:text-base lg:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function HomeHero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(elapsed / SLIDE_DURATION, 1));
    }, 50);
    return () => clearInterval(tick);
  }, [current]);

  const slide = HERO_SLIDES[current];

  return (
    <section className="relative h-[100svh] min-h-[580px] max-h-[1100px] overflow-hidden bg-navy">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: luxuryEase }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.12, x: 0, y: 0 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 3, ease: "linear" }}
            className="relative h-full w-full"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={current === 0}
              className={cn(slide.position)}
              sizes="100vw"
              quality={92}
            />
          </motion.div>
          <div className="img-overlay-hero absolute inset-0" />
          <div className="img-overlay-center absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* Fine gold corner frame — subtle couture accent */}
      <div className="pointer-events-none absolute inset-4 z-20 hidden border border-white/[0.14] sm:inset-6 sm:block lg:inset-8" />
      <span className="pointer-events-none absolute top-4 left-4 z-20 hidden h-6 w-6 border-t border-l border-gold-light/50 sm:top-6 sm:left-6 sm:block lg:top-8 lg:left-8" />
      <span className="pointer-events-none absolute top-4 right-4 z-20 hidden h-6 w-6 border-t border-r border-gold-light/50 sm:top-6 sm:right-6 sm:block lg:top-8 lg:right-8" />
      <span className="pointer-events-none absolute bottom-4 left-4 z-20 hidden h-6 w-6 border-b border-l border-gold-light/50 sm:bottom-6 sm:left-6 sm:block lg:bottom-8 lg:left-8" />
      <span className="pointer-events-none absolute right-4 bottom-4 z-20 hidden h-6 w-6 border-r border-b border-gold-light/50 sm:right-6 sm:bottom-6 sm:block lg:right-8 lg:bottom-8" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-4xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center justify-center gap-4 sm:mb-8"
          >
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-light/70 sm:w-14" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-light sm:text-[11px]">
              {SITE.tagline}
            </p>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-light/70 sm:w-14" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="hero-text-shadow font-serif text-[2.125rem] font-light leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
          >
            Where Water Meets
            <br />
            <span className="text-gradient">Extraordinary Living</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-lg text-sm leading-[1.8] text-white/80 sm:mt-8 sm:max-w-xl sm:text-base lg:text-lg"
          >
            Bespoke swimming pool design, construction, and maintenance for
            private homes, villas, resorts, and commercial properties.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:mt-11 sm:flex-row sm:gap-4"
          >
            <Button href="/quote" variant="secondary" size="lg" className="w-full sm:w-auto">
              Request a Consultation
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Projects
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-32">
        <div className="flex items-center gap-2.5 sm:gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="group relative h-1 w-8 overflow-hidden rounded-full bg-white/20 sm:w-10"
            >
              <span
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-gold-light transition-all duration-300",
                  i === current ? "opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40"
                )}
                style={i === current ? { width: `${progress * 100}%` } : undefined}
              />
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/45">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-white/35 to-transparent" />
        </motion.div>
      </motion.div>

      <div className="absolute right-5 bottom-8 z-20 hidden items-baseline gap-1 font-serif sm:flex sm:right-8">
        <span className="text-2xl font-light text-gold-light">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-sm text-white/35">
          / {String(HERO_SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
