import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aarav Mehra" },
      { name: "description", content: "Booking and press enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="pt-40 pb-16 container-luxe">
        <p className="eyebrow">Bookings & Enquiries</p>
        <h1 className="mt-4 font-display text-6xl md:text-8xl text-white">
          Get in <span className="italic font-serif text-gold">touch</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/60 font-serif text-lg">
          For casting, campaigns, editorial and press. Response within 24 hours on weekdays.
        </p>
      </section>

      <section className="container-luxe pb-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-10">
            <ContactRow icon={<Mail />} label="Email" value="bookings@aaravmehra.com" href="mailto:bookings@aaravmehra.com" />
            <ContactRow icon={<Instagram />} label="Instagram" value="@aarav.mehra" href="https://instagram.com" />
            <ContactRow icon={<MessageCircle />} label="WhatsApp" value="+91 98•••• ••••" href="https://wa.me/91" />
            <ContactRow icon={<MapPin />} label="Based in" value="Mumbai · Available worldwide" />

            <div className="aspect-[4/3] w-full border border-white/10 overflow-hidden">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Mumbai&output=embed"
                className="w-full h-full grayscale contrast-125 opacity-80"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 glass p-8 md:p-12 space-y-6"
          >
            <p className="eyebrow">Booking Enquiry</p>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Company / Agency" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Project type" name="type" />
            </div>
            <Field label="Shoot dates" name="dates" />
            <div>
              <label className="eyebrow block mb-3">Project details</label>
              <textarea
                rows={5}
                className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-white font-serif text-lg resize-none transition-colors"
              />
            </div>
            {sent ? (
              <p className="text-gold font-serif italic text-lg">Thank you — enquiry received. You'll hear back within 24 hours.</p>
            ) : (
              <button type="submit" className="btn-gold">Send Enquiry</button>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="group flex items-start gap-5 border-t border-white/10 pt-6">
      <span className="text-gold [&>svg]:h-5 [&>svg]:w-5 mt-1">{icon}</span>
      <div>
        <p className="eyebrow">{label}</p>
        <p className="mt-2 font-display text-2xl text-white group-hover:text-gold transition-colors">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block">{inner}</a> : inner;
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-3 text-white font-serif text-lg transition-colors"
      />
    </div>
  );
}
