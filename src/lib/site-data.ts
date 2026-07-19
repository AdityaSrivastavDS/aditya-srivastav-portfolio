import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export const IMAGES = { p1, p2, p3, p4, p5, p6, p7, p8 };

export const PORTFOLIO: { src: string; category: string; title: string; h: number }[] = [
  { src: p1, category: "Headshots", title: "Studio No. 01", h: 520 },
  { src: p2, category: "Formal", title: "Black Tie", h: 460 },
  { src: p3, category: "Traditional", title: "Sherwani Series", h: 560 },
  { src: p4, category: "Fitness", title: "Chiaroscuro", h: 500 },
  { src: p5, category: "Lifestyle", title: "Off Duty", h: 520 },
  { src: p6, category: "Commercial", title: "Campaign 24", h: 460 },
  { src: p7, category: "Editorial", title: "Amber Hour", h: 580 },
  { src: p8, category: "Editorial", title: "Silhouette", h: 500 },
  { src: p2, category: "Fashion", title: "Tailored", h: 540 },
  { src: p1, category: "Western", title: "Monochrome", h: 480 },
  { src: p4, category: "Fitness", title: "Form Study", h: 500 },
  { src: p5, category: "Lifestyle", title: "Denim", h: 520 },
];

export const CATEGORIES = [
  "All", "Headshots", "Editorial", "Commercial", "Fashion",
  "Traditional", "Western", "Lifestyle", "Fitness", "Formal",
] as const;

export const MEASUREMENTS = [
  { label: "Height", value: "6' 1\"", sub: "185 cm" },
  { label: "Weight", value: "78 kg", sub: "172 lb" },
  { label: "Chest", value: "40\"", sub: "102 cm" },
  { label: "Waist", value: "32\"", sub: "81 cm" },
  { label: "Shoe Size", value: "UK 9", sub: "EU 43" },
  { label: "Hair", value: "Black", sub: "Wavy · Medium" },
  { label: "Eyes", value: "Dark Brown", sub: "Almond" },
  { label: "Skin Tone", value: "Wheatish", sub: "Warm undertone" },
  { label: "Languages", value: "Hindi · English", sub: "Punjabi · Marathi" },
  { label: "Special Skills", value: "Horse riding", sub: "Boxing · Dance · Driving" },
];

export const EXPERIENCE = [
  { year: "2025", type: "Film", title: "Untitled Feature — Dharma Productions", role: "Supporting Lead" },
  { year: "2024", type: "Campaign", title: "Raymond — Autumn Winter Campaign", role: "Lead Model" },
  { year: "2024", type: "Music Video", title: "Anuv Jain — 'Baarishein' (Concept)", role: "Male Lead" },
  { year: "2024", type: "Editorial", title: "GQ India — The New Menswear Issue", role: "Cover Talent" },
  { year: "2023", type: "Short Film", title: "'Kaagaz' — Independent Short", role: "Protagonist" },
  { year: "2023", type: "Theatre", title: "Prithvi Theatre — 'Mahim Junction'", role: "Ensemble" },
  { year: "2023", type: "Commercial", title: "Tanishq — Diwali TVC", role: "Featured" },
  { year: "2022", type: "Training", title: "Anupam Kher Actor Prepares", role: "Diploma · Acting" },
  { year: "2022", type: "Workshop", title: "Kishore Namit Kapoor Acting Institute", role: "Method Intensive" },
];

export const TESTIMONIALS = [
  { quote: "A rare presence — cinematic on camera and generous on set. He belongs to the next generation of Indian leading men.", author: "Casting Director", org: "Mumbai" },
  { quote: "Aarav delivers editorial precision with commercial warmth. A dream to shoot.", author: "Photographer", org: "Vogue India" },
  { quote: "One of the most exciting new faces we've placed this year.", author: "Agency Director", org: "Elite Model Management" },
];

export const BRANDS = ["RAYMOND", "TANISHQ", "MYNTRA", "AJIO", "LOUIS PHILIPPE", "PARK AVENUE", "TITAN", "FASTRACK", "PETER ENGLAND", "ALLEN SOLLY"];

export const FAQS = [
  { q: "Are you currently represented?", a: "Yes — for commercial and print bookings. Direct enquiries for film and long-form are welcome." },
  { q: "Do you travel for shoots?", a: "Anywhere in the world. Passport valid, visa turnaround under 48 hours for most markets." },
  { q: "What is your usual booking window?", a: "Two weeks notice is ideal. Rush bookings considered subject to availability." },
  { q: "Do you offer usage-inclusive rates?", a: "Rates are negotiated per project with clear usage, territory and duration terms." },
];
