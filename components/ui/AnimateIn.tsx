"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpWithDelay, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
}: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUpWithDelay(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] sm:mb-5 sm:text-[11px]",
            align === "center" && "justify-center",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          <span className={cn("h-px w-6", light ? "bg-gold-light/40" : "bg-gold/45")} />
          {eyebrow}
          {align === "center" && (
            <span className={cn("h-px w-6", light ? "bg-gold-light/40" : "bg-gold/45")} />
          )}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-[2rem] font-light leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.375rem]",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <>
          <div
            className={cn(
              "luxury-divider my-6 sm:my-7",
              align === "center" && "mx-auto",
              light && "opacity-50"
            )}
          />
          <p
            className={cn(
              "text-sm leading-[1.85] sm:text-base lg:text-[1.0625rem]",
              light ? "text-white/70" : "text-silver"
            )}
          >
            {description}
          </p>
        </>
      )}
    </motion.div>
  );
}
