"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary:
    "btn-shine bg-navy text-white border border-navy/90 shadow-[0_4px_24px_-6px_rgba(8,18,32,0.45)] hover:bg-navy-light hover:shadow-[0_10px_36px_-6px_rgba(8,18,32,0.5)]",
  secondary:
    "btn-shine bg-accent text-white border border-accent/90 shadow-[0_4px_24px_-6px_rgba(21,101,168,0.5)] hover:bg-accent-light hover:shadow-[0_10px_36px_-6px_rgba(21,101,168,0.55)]",
  outline:
    "btn-shine bg-white/10 text-white border border-white/35 backdrop-blur-md hover:border-gold-light/70 hover:bg-white/18",
  ghost:
    "bg-white text-navy border border-navy/10 shadow-[0_2px_12px_-4px_rgba(8,18,32,0.08)] hover:border-gold/30 hover:shadow-[0_8px_28px_-8px_rgba(169,130,79,0.18)]",
};

const sizes = {
  sm: "px-6 py-3 text-[10px] tracking-[0.22em]",
  md: "px-8 py-3.5 text-[10px] tracking-[0.22em]",
  lg: "px-9 py-4 text-[11px] tracking-[0.22em] sm:px-11 sm:py-4",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn("inline-block", className)}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex w-full items-center justify-center rounded-full font-semibold uppercase transition-all duration-400 sm:w-auto",
          variants[variant],
          sizes[size]
        )}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
}
