"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          solid
            ? "glass-light py-4 shadow-[0_4px_30px_-8px_rgba(10,22,40,0.12)] sm:py-5"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <nav className="section-container flex min-h-[3.5rem] items-center justify-between sm:min-h-[4rem]">
          <Link href="/" className="group flex items-center gap-3.5 sm:gap-4">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border font-serif text-sm transition-all duration-400 sm:h-12 sm:w-12 sm:text-base",
                solid
                  ? "border-navy/15 text-navy group-hover:border-gold group-hover:text-gold"
                  : "border-white/25 text-white group-hover:border-gold-light/70"
              )}
            >
              {SITE.shortName}
            </span>
            <div className="hidden sm:block">
              <p
                className={cn(
                  "font-serif text-base font-light tracking-wide transition-colors lg:text-lg",
                  solid ? "text-navy" : "text-white"
                )}
              >
                Exclusive
              </p>
              <p
                className={cn(
                  "text-[10px] uppercase tracking-[0.22em] transition-colors lg:text-[11px]",
                  solid ? "text-silver" : "text-white/60"
                )}
              >
                Swimming Pool
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex xl:gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2.5 text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300 xl:px-5 xl:py-3 xl:text-xs",
                    pathname === link.href
                      ? solid
                        ? "text-gold"
                        : "text-white"
                      : solid
                        ? "text-navy/60 hover:text-navy"
                        : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className={cn(
                        "absolute bottom-1 left-1/2 h-px w-4 -translate-x-1/2",
                        solid ? "bg-gold" : "bg-gold-light"
                      )}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="/quote"
              variant={solid ? "primary" : "outline"}
              size="md"
            >
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
              mobileOpen
                ? "text-navy"
                : solid
                  ? "text-navy"
                  : "text-white"
            )}
          >
            <div className="flex w-5 flex-col items-end gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 14 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                className="block h-px bg-current"
              />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              className="flex h-full flex-col items-center justify-center gap-5 px-6"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-serif text-2xl font-light tracking-wide transition-colors sm:text-3xl",
                      pathname === link.href
                        ? "text-gold"
                        : "text-navy hover:text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6"
              >
                <Button href="/quote" variant="primary" size="lg">
                  Get a Quote
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
