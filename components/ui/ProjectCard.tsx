"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpWithDelay, viewportOnce } from "@/lib/animations";
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
}: ProjectCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpWithDelay(index * 0.1)}
      className={cn("group h-full", featured && "md:col-span-2 md:row-span-2")}
    >
      <Link href="/projects" className="block h-full">
        <div
          className={cn(
            "card-luxury relative h-full overflow-hidden",
            featured
              ? "min-h-[320px] aspect-[4/3] md:aspect-auto md:min-h-[540px]"
              : "aspect-[4/3] sm:aspect-[5/4]"
          )}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-[1.4s] ease-out group-hover:scale-[1.08]"
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw"
            }
            quality={88}
          />
          <div className="img-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-transparent to-white/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <span className="corner-frame tl" />
          <span className="corner-frame tr" />
          <span className="corner-frame bl" />
          <span className="corner-frame br" />

          <div className="absolute top-5 left-5 sm:top-6 sm:left-6">
            <span className="rounded-full border border-gold-light/40 bg-white/10 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
              {category}
            </span>
          </div>

          <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 sm:top-6 sm:right-6 sm:h-11 sm:w-11">
            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-6 bg-gold-light/70" />
              {year && (
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
                  {year}
                </p>
              )}
            </div>
            <h3
              className={cn(
                "font-serif font-light leading-tight text-white",
                featured
                  ? "text-2xl sm:text-3xl lg:text-[2.625rem]"
                  : "text-xl sm:text-2xl"
              )}
            >
              {title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{location}</p>
            {description && featured && (
              <p className="mt-4 max-w-lg translate-y-2 text-sm leading-[1.75] text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
