import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Aarav Mehra" },
      { name: "description", content: "Full photography gallery — editorial, campaign and personal frames." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="pt-40 pb-16 container-luxe">
        <p className="eyebrow">Frames</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl text-white">
          Gall<span className="italic font-serif text-gold">ery</span>
        </h1>
      </section>

      <section className="container-luxe pb-32">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {[...PORTFOLIO, ...PORTFOLIO].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 8) * 0.03 }}
              className="group relative overflow-hidden break-inside-avoid bg-secondary"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
