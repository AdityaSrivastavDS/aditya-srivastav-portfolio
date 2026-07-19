import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { TESTIMONIALS, PORTFOLIO, HERO_IMAGE } from "@/lib/site-data";
const hero = HERO_IMAGE;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Srivastav — Actor · Model · Commercial Talent" },
      { name: "description", content: "Cinematic portfolio of Aditya Srivastav — actor, fashion model and commercial talent based in Noida." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Aditya Srivastav"
            className="h-full w-full object-cover object-center animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 container-luxe h-full flex flex-col justify-end pb-24 md:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="eyebrow"
          >
            Portfolio · MMXXVI
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[16vw] leading-[0.85] tracking-tight text-white md:text-[10vw] lg:text-[8.5rem]"
          >
            Aditya<br />
            <span className="italic font-serif font-light text-gold">Srivastav</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/80 font-serif text-xl italic"
          >
            <span>Actor</span>
            <span className="text-gold">·</span>
            <span>Model</span>
            <span className="text-gold">·</span>
            <span>Commercial Talent</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/portfolio" className="btn-gold">View Portfolio</Link>
            <Link to="/showreel" className="btn-ghost-gold"><Play className="h-3.5 w-3.5" /> Watch Showreel</Link>
            <Link to="/contact" className="btn-ghost-gold">Hire Me</Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-white/50">
          <span>Scroll</span>
          <div className="h-16 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* INTRO */}
      <section className="container-luxe py-32 md:py-48">
        <div className="grid gap-16 md:grid-cols-12 items-start">
          <div className="md:col-span-4">
            <p className="eyebrow">Introduction</p>
            <div className="gold-line mt-3 w-16" />
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-white">
              A face for the <span className="italic font-serif text-gold">next</span> generation of Indian cinema and campaigns.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 font-serif">
              Trained across method and camera acting with an editorial modelling career that spans
              luxury menswear, jewellery and lifestyle. Aditya brings a stillness that reads on
              screen and a versatility that reads in print.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="container-luxe pb-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-white">Portfolio</h2>
          </div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-gold hover:gap-4 transition-all">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.slice(0, 6).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group relative overflow-hidden bg-secondary aspect-[3/4]"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold">{item.category}</p>
                <p className="mt-1 font-display text-xl text-white">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="container-luxe py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow">Testimonials</p>
          <div className="mt-16 space-y-20">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <blockquote className="font-serif text-2xl md:text-4xl italic leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-sm tracking-[0.3em] uppercase text-gold">
                  {t.author} <span className="text-white/40">— {t.org}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe pb-32">
        <div className="glass p-12 md:p-24 text-center">
          <p className="eyebrow">Bookings Open</p>
          <h2 className="mt-6 font-display text-4xl md:text-7xl text-white">
            Let's create <span className="italic font-serif text-gold">something</span> unforgettable.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold">Enquire Now</Link>
            <a href="#" className="btn-ghost-gold">Download Portfolio PDF</a>
          </div>
        </div>
      </section>
    </>
  );
}
