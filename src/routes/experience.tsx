import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { EXPERIENCE, FAQS } from "@/lib/site-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Aarav Mehra" },
      { name: "description", content: "Film, commercial, editorial, music video, theatre and training history." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <section className="pt-40 pb-16 container-luxe">
        <p className="eyebrow">Career</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl text-white">
          Experi<span className="italic font-serif text-gold">ence</span>
        </h1>
      </section>

      <section className="container-luxe pb-32">
        <div className="max-w-5xl">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group grid grid-cols-12 gap-6 border-t border-white/10 py-10 hover:border-gold/40 transition-colors"
            >
              <div className="col-span-2 font-display text-2xl md:text-4xl text-gold">{e.year}</div>
              <div className="col-span-4 md:col-span-3">
                <p className="eyebrow">{e.type}</p>
              </div>
              <div className="col-span-6 md:col-span-7">
                <p className="font-display text-xl md:text-2xl text-white group-hover:translate-x-2 transition-transform">
                  {e.title}
                </p>
                <p className="mt-1 text-sm text-white/50 font-serif italic">{e.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-luxe pb-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-white">Working with Aarav</h2>
          </div>
          <div className="md:col-span-8 divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="cursor-pointer list-none flex justify-between items-center gap-6">
                  <span className="font-display text-xl md:text-2xl text-white group-hover:text-gold transition-colors">
                    {f.q}
                  </span>
                  <span className="text-gold text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-white/60 font-serif text-lg leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
