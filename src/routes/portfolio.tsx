import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { PORTFOLIO, CATEGORIES } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Aarav Mehra" },
      { name: "description", content: "Editorial, commercial, fashion, traditional and lifestyle imagery." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = cat === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === cat);

  return (
    <>
      <section className="pt-40 pb-16 container-luxe">
        <p className="eyebrow">The Work</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl text-white leading-none">
          Port<span className="italic font-serif text-gold">folio</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/60 font-serif text-lg">
          Selected imagery across editorial, campaign and personal projects.
        </p>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-b border-white/10 pb-6">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-[11px] tracking-[0.3em] uppercase transition-colors ${
                cat === c ? "text-gold" : "text-white/50 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.button
              key={`${item.src}-${i}`}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
              onClick={() => setLightbox(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden bg-secondary text-left"
              style={{ height: item.h }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold">{item.category}</p>
                <p className="mt-1 font-display text-lg text-white">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-gold p-2"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-h-[90vh] max-w-[95vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                {filtered[lightbox].category}
              </p>
              <p className="mt-1 font-display text-xl text-white">{filtered[lightbox].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
