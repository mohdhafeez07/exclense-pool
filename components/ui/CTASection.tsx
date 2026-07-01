"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description: string;
  image: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title,
  description,
  image,
  primaryLabel = "Request a Quote",
  primaryHref = "/quote",
  secondaryLabel = "View Our Work",
  secondaryHref = "/projects",
}: CTASectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden section-padding">
      <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy/88" />

      <div className="section-container relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/6 px-7 py-12 text-center shadow-[0_32px_80px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-14 sm:py-16"
        >
          <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-gold-light sm:text-[11px]">
            <span className="h-px w-6 bg-gold-light/50" />
            Begin Your Journey
            <span className="h-px w-6 bg-gold-light/50" />
          </p>
          <h2 className="font-serif text-2xl font-light leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="luxury-divider mx-auto my-7 opacity-60" />
          <p className="mx-auto mb-9 max-w-xl text-sm leading-[1.85] text-white/70 sm:mb-11 sm:text-base">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={primaryHref} variant="secondary" size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
