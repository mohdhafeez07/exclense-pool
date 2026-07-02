"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardReveal, viewportOnce } from "@/lib/animations";
import { toRoman } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  index?: number;
  features?: readonly string[];
}

export default function ServiceCard({
  title,
  description,
  image,
  href = "/services",
  index = 0,
  features,
}: ServiceCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={cardReveal(index * 0.07)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-light shadow-[0_10px_32px_-14px_rgba(8,18,32,0.4)] ring-1 ring-white/[0.06] transition-shadow duration-500 hover:shadow-[0_32px_72px_-18px_rgba(8,18,32,0.55)] sm:rounded-[26px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-[1.4s] ease-out group-hover:scale-[1.1]"
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
          quality={88}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-navy/10 to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-6">
        <span
          aria-hidden
          className="numeral-ghost-light pointer-events-none absolute -top-1 right-2 text-[3.5rem] leading-none select-none sm:-top-2 sm:right-3 sm:text-[5rem]"
        >
          {toRoman(index)}
        </span>

        <span className="pointer-events-none absolute top-2.5 left-2.5 h-2.5 w-2.5 border-t border-l border-gold-light/30 transition-colors duration-500 group-hover:border-gold-light/70 sm:top-3.5 sm:left-3.5" />
        <span className="pointer-events-none absolute right-2.5 bottom-2.5 h-2.5 w-2.5 border-r border-b border-gold-light/30 transition-colors duration-500 group-hover:border-gold-light/70 sm:right-3.5 sm:bottom-3.5" />

        <p className="relative font-serif text-lg font-light text-gold-light/80 sm:text-2xl">
          {toRoman(index)}
        </p>

        {features && features[0] && (
          <p className="relative mt-2.5 text-[8px] font-semibold tracking-[0.18em] text-silver-light/45 uppercase sm:mt-3 sm:text-[10px] sm:tracking-[0.22em]">
            {features[0]}
          </p>
        )}

        <h3 className="relative mt-1.5 font-serif text-[0.95rem] leading-tight font-medium text-white sm:mt-2 sm:text-xl">
          {title}
        </h3>

        <div className="relative mt-3 h-px w-7 bg-gold-light/40 sm:mt-4 sm:w-9" />

        <p className="relative mt-3 line-clamp-2 text-[11px] leading-relaxed text-silver-light/65 sm:mt-4 sm:text-sm sm:leading-relaxed">
          {description}
        </p>

        <div className="relative mt-auto pt-4 sm:pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-[8px] font-semibold tracking-[0.16em] text-gold-light uppercase transition-colors hover:text-white sm:gap-3 sm:text-[10px] sm:tracking-[0.22em]"
          >
            <span className="sm:hidden">View</span>
            <span className="hidden sm:inline">Learn More</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold-light/25 bg-white/5 transition-all duration-400 group-hover:border-gold-light group-hover:bg-gold-light group-hover:text-navy sm:h-8 sm:w-8">
              <svg
                className="h-3 w-3 transition-transform duration-400 group-hover:translate-x-0.5 sm:h-3.5 sm:w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
