import itemsA from "./items-a.json";
import itemsB from "./items-b.json";

export type CatalogItem = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  badge: string | null;
  rating: number;
  reviews: number;
  specs: Record<string, string>;
  options: string[];
  pdpFaqs: { q: string; a: string }[];
};

export const brand = {
  name: "Nocturne",
  tagline: "A table that arrives after midnight logic.",
  slug: "nocturne-dining",
  style: "surreal-dining",
  coupon: "NIGHT22",
  cta: "Reserve the night",
  heroStill: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80",
  heroVideo: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" as string | null,
  shopLabel: "Courses",
  nichePath: "menu",
  nicheLabel: "Menu",
  isBooking: true,
  stickyCta: "Book consult",
  stickyHref: "/book",
};

export const items: CatalogItem[] = [...itemsA, ...itemsB] as CatalogItem[];

export const reviewList = [
  {
    "name": "Colette R.",
    "quote": "Surreal plating, precise service."
  },
  {
    "name": "Amir Z.",
    "quote": "Reserved chef's table through the night flow."
  },
  {
    "name": "Bea Y.",
    "quote": "Dessert course still humming."
  }
];

export const aiFaqs = [
  {
    "q": "Dress code?",
    "a": "Smart evening; chef's table is jacket-friendly, not required."
  },
  {
    "q": "Private rooms?",
    "a": "Private Room Deposit holds up to 12 guests."
  },
  {
    "q": "NIGHT22?",
    "a": "$22 off tasting menu pairing add-on in demo."
  }
];

export const counselTips = [
  {
    "title": "Arrival",
    "body": "Hold 10 minutes for coursing; kitchen fires by chapter."
  },
  {
    "title": "Pairing",
    "body": "Sommelier can split pairings across two glasses."
  },
  {
    "title": "Allergies",
    "body": "Note restrictions when reserving \u2014 demo form only."
  }
];

export const categories = Array.from(new Set(items.map((i) => i.category))).sort();

export function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getItem(id: string) {
  return items.find((i) => i.id === id);
}

export function relatedItems(id: string, limit = 3) {
  const item = getItem(id);
  if (!item) return [];
  return items.filter((i) => i.category === item.category && i.id !== id).slice(0, limit);
}
