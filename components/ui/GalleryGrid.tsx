"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: readonly GalleryImage[];
  showFilter?: boolean;
}

export default function GalleryGrid({
  images,
  showFilter = true,
}: GalleryGridProps) {
  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + filtered.length) % filtered.length
    );
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <>
      {showFilter && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12 sm:justify-start sm:gap-2.5"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-400 sm:px-6 sm:text-[11px]",
                activeCategory === cat
                  ? "bg-navy text-white shadow-[0_8px_28px_-8px_rgba(8,18,32,0.45)]"
                  : "border border-navy/8 bg-white text-navy/55 hover:border-gold/30 hover:text-navy"
              )}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="gallery-filter-underline"
                  className="absolute -bottom-2 left-1/2 h-px w-5 -translate-x-1/2 bg-gold-light"
                />
              )}
            </button>
          ))}
        </motion.div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3"
      >
        {filtered.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setLightboxIndex(index)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-[0_4px_24px_-8px_rgba(8,18,32,0.12)] ring-1 ring-navy/5 transition-shadow duration-500 hover:shadow-[0_24px_56px_-16px_rgba(8,18,32,0.24)] sm:mb-5"
          >
            <div
              className={cn(
                "relative overflow-hidden",
                index % 5 === 0 ? "aspect-3/4" : "aspect-4/3"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-[1.3s] ease-out group-hover:scale-[1.08]"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={88}
              />
              <div className="absolute inset-0 bg-navy/0 transition-all duration-500 group-hover:bg-navy/35" />

              <span className="corner-frame tl" />
              <span className="corner-frame br" />

              <div className="absolute top-4 left-4 translate-y-1 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full border border-gold-light/40 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                  {image.category}
                </span>
              </div>
              <div className="absolute inset-0 flex scale-90 items-center justify-center opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-lg sm:h-14 sm:w-14">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-navy/97 p-4 backdrop-blur-2xl sm:p-8"
            onClick={closeLightbox}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/70 transition-all hover:border-gold-light/40 hover:bg-white/12 hover:text-white sm:top-8 sm:right-8"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Previous"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/70 transition-all hover:border-gold-light/40 hover:bg-white/12 hover:text-white sm:left-8 sm:h-12 sm:w-12"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[58vh] w-full max-w-6xl sm:h-[78vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="rounded-xl object-contain"
                sizes="90vw"
                quality={95}
                priority
              />
              <div className="absolute right-0 -bottom-14 left-0 text-center">
                <p className="text-xs text-white/55 sm:text-sm">{filtered[lightboxIndex].alt}</p>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-widest text-white/30">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/70 transition-all hover:border-gold-light/40 hover:bg-white/12 hover:text-white sm:right-8 sm:h-12 sm:w-12"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
