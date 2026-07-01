export const SITE = {
  name: "Exclusive Swimming Pool",
  shortName: "ESP",
  tagline: "Design · Build · Maintain Luxury Pools",
  description:
    "Full-service swimming pool design, construction, renovation, and maintenance for private residences, resorts, villas, and commercial properties.",
  phone: "+1 (888) 472-7586",
  phoneHref: "tel:+18884727586",
  whatsapp: "+18884727586",
  whatsappHref: "https://wa.me/18884727586",
  email: "concierge@exclusiveswimmingpool.com",
  address: "1200 Oceanview Boulevard, Suite 400",
  city: "Miami Beach, FL 33139",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM EST",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
