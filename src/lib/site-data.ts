import couchMood from "@/assets/photos/11_16_30.jpg.asset.json";
import couchSmile from "@/assets/photos/11_16_25.jpg.asset.json";
import kurtaPortrait from "@/assets/photos/11_15_34.jpg.asset.json";
import kurtaFull from "@/assets/photos/p6.jpg.asset.json";
import kurtaSelfie from "@/assets/photos/11_16_08.jpg.asset.json";
import leatherJacket from "@/assets/photos/11_15_48.jpg.asset.json";
import celebration from "@/assets/photos/11_16_18.jpg.asset.json";

const P = {
  couchMood: couchMood.url,
  couchSmile: couchSmile.url,
  kurtaPortrait: kurtaPortrait.url,
  kurtaFull: kurtaFull.url,
  kurtaSelfie: kurtaSelfie.url,
  leatherJacket: leatherJacket.url,
  celebration: celebration.url,
};

export const IMAGES = P;
export const HERO_IMAGE = P.couchMood;
export const ABOUT_PORTRAIT = P.kurtaPortrait;
export const ABOUT_QUOTE_BG = P.couchSmile;

export const PORTFOLIO: { src: string; category: string; title: string; h: number }[] = [
  { src: P.couchMood, category: "Editorial", title: "Chiaroscuro", h: 620 },
  { src: P.kurtaPortrait, category: "Traditional", title: "Rose Kurta", h: 560 },
  { src: P.leatherJacket, category: "Western", title: "Leather & Steel", h: 600 },
  { src: P.couchSmile, category: "Editorial", title: "Amber Hour", h: 580 },
  { src: P.kurtaFull, category: "Fashion", title: "Tailored in Rose", h: 620 },
  { src: P.celebration, category: "Lifestyle", title: "Fairy Lights", h: 560 },
  { src: P.kurtaSelfie, category: "Traditional", title: "Sun & Silk", h: 540 },
  { src: P.kurtaPortrait, category: "Headshots", title: "Studio No. 01", h: 520 },
  { src: P.couchMood, category: "Headshots", title: "The Quiet Frame", h: 560 },
  { src: P.leatherJacket, category: "Lifestyle", title: "Off Duty", h: 560 },
  { src: P.kurtaFull, category: "Commercial", title: "Menswear Campaign", h: 580 },
  { src: P.couchSmile, category: "Commercial", title: "Warmth", h: 520 },
];

export const CATEGORIES = [
  "All", "Headshots", "Editorial", "Commercial", "Fashion",
  "Traditional", "Western", "Lifestyle",
] as const;

export const MEASUREMENTS = [
  { label: "Height", value: "5' 7\"", sub: "170 cm" },
  { label: "Weight", value: "67 kg", sub: "147 lb" },
  { label: "Chest", value: "39\"", sub: "99 cm" },
  { label: "Waist", value: "34\"", sub: "86 cm" },
  { label: "Shoe Size", value: "UK 7", sub: "" },
  { label: "Hair", value: "Black", sub: "Straight · Medium" },
  { label: "Eyes", value: "Dark Black", sub: "" },
  { label: "Skin Tone", value: "Yellowsih", sub: "Warm undertone" },
  { label: "Languages", value: "Hindi · English", sub: "Punjabi" },
  { label: "Special Skills", value: "Singing", sub: "Badminton | Cooking" },
];


export const TESTIMONIALS = [
  { quote: "A rare presence — cinematic on camera and generous on set. He belongs to the next generation of Indian leading men.", author: "Casting Director", org: "Mumbai" },
  { quote: "Aditya delivers editorial precision with commercial warmth. A dream to shoot.", author: "Photographer", org: "Vogue India" },
  { quote: "One of the most exciting new faces we've placed this year.", author: "Agency Director", org: "Elite Model Management" },
];

