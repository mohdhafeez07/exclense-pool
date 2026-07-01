"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpWithDelay, viewportOnce } from "@/lib/animations";

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
      variants={fadeUpWithDelay(index * 0.08)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="card-luxury group flex h-full flex-col"
    >
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-[1.4s] ease-out group-hover:scale-[1.09]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={88}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/15 via-navy/0 to-navy/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="img-overlay absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        <span
          aria-hidden
          className="numeral-ghost-light pointer-events-none absolute -top-3 -left-1 text-[5rem] select-none sm:text-[6rem]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="corner-frame tl" />
        <span className="corner-frame tr" />

        <div className="absolute top-5 right-5 left-5 flex items-start justify-between sm:top-6 sm:right-6 sm:left-6">
          <span className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
            Service
          </span>
        </div>
        <div className="absolute right-0 bottom-0 left-0 p-6 sm:p-7">
          <div className="mb-2.5 h-px w-8 bg-gold-light/70 transition-all duration-500 group-hover:w-14" />
          <h3 className="font-serif text-xl font-light leading-tight text-white sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm leading-[1.8] text-silver">{description}</p>
        {features && features.length > 0 && (
          <ul className="mt-5 space-y-2.5 border-t border-silver-light/25 pt-5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-xs leading-relaxed text-silver"
              >
                <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-navy transition-colors hover:text-gold"
          >
            Learn More
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-navy/15 bg-navy/5 transition-all duration-400 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
              <svg
                className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-0.5"
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
