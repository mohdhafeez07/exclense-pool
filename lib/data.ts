import { LOCAL } from "@/lib/images";

export const IMAGES = {
  hero: LOCAL.heroMain,
  about: LOCAL.pexelsPool,
  infinity: LOCAL.mountainInfinity,
  villa: LOCAL.beachResort,
  resort: LOCAL.pexelsLuxury,
  spa: LOCAL.rooftopSkyline,
  waterFeature: LOCAL.canalDusk,
  night: LOCAL.canalNight,
  tropical: LOCAL.beachResort,
  modern: LOCAL.canalDusk,
  cta: LOCAL.mountainInfinity,
  team: LOCAL.pexelsPool,
} as const;

export const HERO_SLIDES = [
  {
    src: LOCAL.mountainInfinity,
    alt: "Cliffside infinity pool overlooking the coastline at dusk",
    position: "object-cover object-center",
  },
  {
    src: LOCAL.canalNight,
    alt: "Illuminated luxury swimming pool aerial view at night",
    position: "object-cover object-center",
  },
  {
    src: LOCAL.canalDusk,
    alt: "Custom-built infinity pool at dusk with ambient lighting",
    position: "object-cover object-center sm:object-[center_40%]",
  },
  {
    src: LOCAL.rooftopSkyline,
    alt: "Rooftop infinity pool with panoramic city skyline views",
    position: "object-cover object-center",
  },
  {
    src: LOCAL.beachResort,
    alt: "Rooftop infinity pool suspended above a resort city skyline",
    position: "object-cover object-center",
  },
] as const;

export const STATS = [
  { value: "280+", label: "Pools Built & Delivered" },
  { value: "18", label: "Countries Worldwide" },
  { value: "25+", label: "Years in Pool Building" },
  { value: "98%", label: "Client Satisfaction" },
] as const;

export const SERVICES = [
  {
    id: "pool-design",
    title: "Pool Design & 3D Planning",
    description:
      "Site surveys, concept drawings, 3D renders, and hydraulic planning tailored to your land, budget, and lifestyle—before a single tile is laid.",
    image: LOCAL.mountainInfinity,
    features: [
      "Site survey & soil assessment",
      "3D visualization & approvals",
      "Engineering & permit support",
    ],
  },
  {
    id: "new-construction",
    title: "New Pool Construction",
    description:
      "End-to-end pool building from excavation and steel reinforcement to gunite/concrete shell, plumbing, and final handover by certified pool builders.",
    image: LOCAL.heroMain,
    features: [
      "Excavation & steel framework",
      "Gunite / shotcrete shell",
      "Plumbing & pressure testing",
    ],
  },
  {
    id: "infinity",
    title: "Infinity & Vanishing Edge",
    description:
      "Precision-built vanishing-edge pools with engineered catch basins, overflow systems, and finishes that blend seamlessly with sea, skyline, or landscape views.",
    image: LOCAL.beachResort,
    features: [
      "Vanishing-edge detailing",
      "Catch basin engineering",
      "Integrated overflow systems",
    ],
  },
  {
    id: "equipment",
    title: "Pool Equipment & Automation",
    description:
      "Supply and installation of pumps, filters, heaters, chlorinators, LED lighting, and smart automation for effortless pool operation year-round.",
    image: LOCAL.rooftopSkyline,
    features: [
      "Pump & filtration systems",
      "Heating & salt chlorination",
      "App-controlled automation",
    ],
  },
  {
    id: "finishes",
    title: "Tiling, Coping & Decking",
    description:
      "Premium interior finishes, natural stone coping, porcelain tile, mosaic accents, and slip-resistant decking to complete your pool surround.",
    image: LOCAL.pexelsPool,
    features: [
      "Interior tile & plaster finishes",
      "Stone & porcelain coping",
      "Pavers & timber decking",
    ],
  },
  {
    id: "water-features",
    title: "Water Features & Lighting",
    description:
      "Waterfalls, spillways, rain curtains, bubblers, and architectural LED lighting programs that transform your pool into a stunning evening centerpiece.",
    image: LOCAL.canalDusk,
    features: [
      "Custom waterfall design",
      "Underwater & deck lighting",
      "Feature pump integration",
    ],
  },
  {
    id: "renovation",
    title: "Pool Renovation & Resurfacing",
    description:
      "Breathe new life into aging pools with resurfacing, tile replacement, equipment upgrades, leak repair, and modern safety compliance updates.",
    image: LOCAL.canalNight,
    features: [
      "Resurfacing & re-tiling",
      "Equipment modernization",
      "Leak detection & repair",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Water Care",
    description:
      "Scheduled servicing, water chemistry balancing, seasonal opening/closing, and emergency call-outs to keep your pool crystal-clear and running perfectly.",
    image: LOCAL.pexelsLuxury,
    features: [
      "Weekly / monthly servicing",
      "Water testing & balancing",
      "Winterization & start-up",
    ],
  },
] as const;

export const PROJECTS = [
  {
    id: "azure-cliff",
    title: "Azure Cliff Estate",
    location: "Malibu, California",
    category: "Infinity Pool",
    description:
      "A 22-meter vanishing-edge pool perched above the Pacific, featuring honed travertine decking and integrated fire elements.",
    image: LOCAL.mountainInfinity,
    year: "2025",
    size: "22m × 6m",
  },
  {
    id: "palm-court",
    title: "Palm Court Villa",
    location: "Palm Jumeirah, Dubai",
    category: "Resort Pool",
    description:
      "A resort-scale lagoon pool with beach entry, swim-up bar, and submerged seating for an ultra-private entertainment experience.",
    image: LOCAL.beachResort,
    year: "2024",
    size: "45m × 18m",
  },
  {
    id: "alpine-retreat",
    title: "Alpine Retreat",
    location: "Gstaad, Switzerland",
    category: "Heated Indoor-Outdoor",
    description:
      "A year-round heated pool with retractable glass enclosure, snow-melt decking, and mountain-view infinity edge.",
    image: LOCAL.canalNight,
    year: "2024",
    size: "14m × 5m",
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    location: "Manhattan, New York",
    category: "Rooftop Pool",
    description:
      "A glass-walled rooftop lap pool with city skyline views, automated cover system, and minimalist stainless detailing.",
    image: LOCAL.pexelsLuxury,
    year: "2023",
    size: "12m × 3m",
  },
  {
    id: "serenity-spa",
    title: "Serenity Spa Pavilion",
    location: "Bali, Indonesia",
    category: "Wellness Pool",
    description:
      "A tranquil hydrotherapy pool surrounded by tropical gardens, featuring natural stone and cascading water walls.",
    image: LOCAL.pexelsPool,
    year: "2023",
    size: "8m × 8m",
  },
  {
    id: "riviera-manor",
    title: "Riviera Manor",
    location: "French Riviera",
    category: "Classical Pool",
    description:
      "An elegant rectangular pool with antique limestone coping, bronze fixtures, and a classical fountain centerpiece.",
    image: LOCAL.canalDusk,
    year: "2022",
    size: "16m × 7m",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: LOCAL.heroMain,
    alt: "Luxury swimming pool construction project",
    category: "Construction",
  },
  {
    src: LOCAL.mountainInfinity,
    alt: "Infinity pool at modern oceanfront villa",
    category: "Infinity",
  },
  {
    src: LOCAL.beachResort,
    alt: "Exclusive beach resort swimming pool",
    category: "Resort",
  },
  {
    src: LOCAL.canalNight,
    alt: "Illuminated pool aerial view at night",
    category: "Lighting",
  },
  {
    src: LOCAL.canalDusk,
    alt: "Custom pool with dusk lighting and landscaping",
    category: "Residential",
  },
  {
    src: LOCAL.pexelsPool,
    alt: "Premium residential swimming pool build",
    category: "Residential",
  },
  {
    src: LOCAL.pexelsLuxury,
    alt: "Luxury pool with architectural surround",
    category: "Modern",
  },
  {
    src: LOCAL.rooftopSkyline,
    alt: "Rooftop infinity pool with panoramic city skyline views",
    category: "Rooftop",
  },
] as const;

export const TEAM_VALUES = [
  {
    title: "Uncompromising Craft",
    description:
      "Every joint, tile, and edge is executed to museum-grade standards by artisans with decades of aquatic construction expertise.",
  },
  {
    title: "Design-Led Engineering",
    description:
      "Our in-house engineers collaborate with world-renowned architects to ensure beauty and structural integrity coexist flawlessly.",
  },
  {
    title: "Discreet Delivery",
    description:
      "We operate with the confidentiality and precision expected by ultra-high-net-worth clients across private estates and hospitality brands.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Exclusive Swimming Pool transformed our Malibu estate into a sanctuary. The infinity edge appears to pour directly into the Pacific—it is nothing short of breathtaking.",
    author: "Victoria Ashford",
    role: "Private Estate Owner, California",
  },
  {
    quote:
      "Their team managed a complex rooftop installation in Manhattan with zero compromise on design. The result is a masterpiece our guests never forget.",
    author: "Jonathan Mercer",
    role: "Hospitality Developer, New York",
  },
] as const;
