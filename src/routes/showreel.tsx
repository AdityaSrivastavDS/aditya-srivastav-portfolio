import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/showreel")({
  head: () => ({
    meta: [
      { title: "Showreel — Aarav Mehra" },
      { name: "description", content: "Cinematic showreel — film, commercial and editorial motion work." },
    ],
  }),
  component: Showreel,
});

function Showreel() {
  return (
    <>
      <section className="pt-40 pb-12 container-luxe text-center">
        <p className="eyebrow">Motion · MMXXVI</p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 font-display text-6xl md:text-8xl text-white"
        >
          Show<span className="italic font-serif text-gold">reel</span>
        </motion.h1>
      </section>

      <section className="container-luxe pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative aspect-video w-full overflow-hidden border border-white/10 bg-black"
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 max-w-4xl mx-auto text-center">
          <div>
            <p className="eyebrow">Runtime</p>
            <p className="mt-3 font-display text-3xl text-white">02:48</p>
          </div>
          <div>
            <p className="eyebrow">Aspect</p>
            <p className="mt-3 font-display text-3xl text-white">2.39 : 1</p>
          </div>
          <div>
            <p className="eyebrow">Updated</p>
            <p className="mt-3 font-display text-3xl text-white">Spring 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
