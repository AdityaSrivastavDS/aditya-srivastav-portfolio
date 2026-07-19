import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MEASUREMENTS } from "@/lib/site-data";

export const Route = createFileRoute("/measurements")({
  head: () => ({
    meta: [
      { title: "Measurements — Aarav Mehra" },
      { name: "description", content: "Talent card — measurements, features and skills." },
    ],
  }),
  component: Measurements,
});

function Measurements() {
  return (
    <>
      <section className="pt-40 pb-16 container-luxe">
        <p className="eyebrow">Talent Card</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl text-white">
          Measure<span className="italic font-serif text-gold">ments</span>
        </h1>
      </section>

      <section className="container-luxe pb-32">
        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {MEASUREMENTS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="bg-background p-10 hover-lift"
            >
              <p className="eyebrow">{m.label}</p>
              <p className="mt-4 font-display text-4xl text-white">{m.value}</p>
              <p className="mt-2 text-sm text-white/50 font-serif italic">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
