import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ABOUT_PORTRAIT, ABOUT_QUOTE_BG } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aarav Mehra" },
      { name: "description", content: "Biography, background and career objective of actor and model Aarav Mehra." },
    ],
  }),
  component: About,
});

const FACTS = [
  { label: "Name", value: "Aarav Mehra" },
  { label: "Based in", value: "Mumbai, India" },
  { label: "Languages", value: "Hindi · English · Punjabi · Marathi" },
  { label: "Education", value: "BA, Mass Media — Mumbai University" },
  { label: "Acting", value: "Method, Camera Acting, Meisner" },
  { label: "Modelling", value: "Editorial · Runway · Commercial" },
];

function About() {
  return (
    <>
      <section className="pt-40 pb-24 container-luxe">
        <div className="grid gap-16 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">The Story</p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 font-display text-6xl md:text-8xl leading-[0.9] text-white"
            >
              About<br /><span className="italic font-serif text-gold">Aarav</span>
            </motion.h1>
          </div>
          <div className="md:col-span-5">
            <p className="font-serif text-xl italic text-white/80 leading-relaxed">
              &ldquo;My work sits at the intersection of stillness and story. I want every frame to
              feel like the middle of something real.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-32">
        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <img src={p2} alt="Aarav Mehra" loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div className="space-y-6 text-lg leading-relaxed text-white/75 font-serif">
              <p>
                Aarav Mehra is an Indian actor and fashion model based in Mumbai. Trained in method
                and camera acting at the Kishore Namit Kapoor Institute and Anupam Kher's Actor
                Prepares, his practice combines the discipline of theatre with the precision of
                the still frame.
              </p>
              <p>
                As a model, he has walked for Indian menswear houses and appeared in editorial and
                commercial campaigns across print and digital. On screen, he has worked in short
                films, music videos and independent features, with a growing catalogue of
                supporting and lead roles.
              </p>
              <p>
                Off set, he trains in horse riding, boxing and Bharatanatyam — a physical vocabulary
                that shapes the quiet confidence he brings to a scene.
              </p>
            </div>

            <div className="mt-16">
              <p className="eyebrow mb-6">Career Objective</p>
              <p className="font-display text-2xl md:text-3xl text-white leading-snug">
                To build a lasting body of work in Indian and international cinema — collaborating
                with directors and houses who believe in craft, restraint and long careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-32">
        <div className="border-t border-white/10 pt-16 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FACTS.map((f) => (
            <div key={f.label} className="border-l border-gold/40 pl-6">
              <p className="eyebrow">{f.label}</p>
              <p className="mt-2 font-display text-2xl text-white">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[70vh] overflow-hidden">
        <img src={p7} alt="" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container-luxe h-full flex items-center">
          <blockquote className="max-w-3xl font-serif italic text-3xl md:text-5xl text-white leading-tight">
            &ldquo;Elegance is refusal.&rdquo;
            <footer className="mt-6 text-sm tracking-[0.3em] uppercase text-gold not-italic">
              — Coco Chanel, a working principle
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
