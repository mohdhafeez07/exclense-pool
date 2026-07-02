"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardReveal, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  location: string;
  category: string;
  image: string;
  description?: string;
  year?: string;
  index?: number;
  featured?: boolean;
  /** Spans both mobile grid columns to avoid a lone orphaned card in the last row. */
  spanFull?: boolean;
}

export default function ProjectCard({
  title,
  location,
  category,
  image,
  description,
  year,
  index = 0,
  featured = false,
  spanFull = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={cardReveal(index * 0.08)}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "group h-full",
        featured && "col-span-2 md:row-span-2",
        !featured && spanFull && "col-span-2 lg:col-span-1"
      )}
    >
      <Link href="/projects" className="block h-full">
        <div
          className={cn(
            "relative h-full overflow-hidden rounded-[20px] shadow-[0_8px_30px_-12px_rgba(8,18,32,0.22)] transition-all duration-500 hover:shadow-[0_32px_72px_-18px_rgba(8,18,32,0.3)] sm:rounded-[28px]",
            featured
              ? "min-h-[240px] aspect-[16/10] sm:min-h-[320px] sm:aspect-[4/3] md:aspect-auto md:min-h-[540px]"
              : "aspect-[4/3] sm:aspect-[5/4]"
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-[1.4s] ease-out group-hover:scale-[1.09]"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 50vw, 33vw"
            }
            quality={88}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/35 via-transparent to-navy/20" />

          <span className="corner-frame tl" />
          <span className="corner-frame tr" />

          <div className="absolute top-3 left-3 flex items-center gap-2 sm:top-5 sm:left-5">
            <span className="rounded-full border border-gold-light/40 bg-black/25 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:px-3.5 sm:py-1.5 sm:text-[9px] sm:tracking-[0.22em]">
              {category}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 sm:top-5 sm:right-5 sm:h-11 sm:w-11">
            <svg className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>

          {/* Floating glass info panel */}
          <div className="absolute inset-x-2 bottom-2 rounded-2xl border border-white/15 bg-navy/45 p-3.5 backdrop-blur-xl transition-all duration-500 group-hover:bg-navy/60 sm:inset-x-4 sm:bottom-4 sm:rounded-3xl sm:p-6">
            <div className="mb-1.5 flex items-center gap-2.5 sm:mb-2.5 sm:gap-3">
              <span className="h-px w-4 bg-gold-light/70 sm:w-6" />
              {year && (
                <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/60 sm:text-[10px] sm:tracking-[0.25em]">
                  {year}
                </p>
              )}
            </div>
            <h3
              className={cn(
                "font-serif font-light leading-tight text-white",
                featured
                  ? "text-lg sm:text-2xl lg:text-[2.375rem]"
                  : "text-sm sm:text-xl"
              )}
            >
              {title}
            </h3>
            <p className="mt-1 text-[11px] text-white/70 sm:mt-2 sm:text-sm">
              {location}
            </p>
            {description && featured && (
              <p className="mt-4 hidden max-w-lg translate-y-2 text-sm leading-[1.75] text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
                {description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
