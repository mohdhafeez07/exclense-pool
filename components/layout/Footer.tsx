import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/40 to-transparent" />

      <div className="section-container section-padding !pb-10 !pt-16 lg:!pb-14 lg:!pt-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/25 font-serif text-sm">
                {SITE.shortName}
              </span>
              <div>
                <p className="font-serif text-sm font-light">Exclusive</p>
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                  Swimming Pool
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-[1.8] text-white/55">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light/60">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light/60">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-light/60">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.address}</li>
              <li>{SITE.city}</li>
              <li className="text-white/40">{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:mt-16 sm:flex-row">
          <p className="text-[11px] text-white/35">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-white/35">
            <span className="cursor-pointer transition-colors hover:text-gold-light/70">Privacy Policy</span>
            <span className="cursor-pointer transition-colors hover:text-gold-light/70">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
