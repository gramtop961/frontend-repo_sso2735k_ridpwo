import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactFooter() {
  return (
    <section id="contact" className="relative w-full bg-[#f7f2ea] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold text-[#2a211d]">Get in touch</h3>
            <p className="mt-2 text-[#4a3a33]/80">Reservations, events, or just say hello — wed love to hear from you.</p>
            <form className="mt-6 space-y-4">
              <input type="text" placeholder="Your name" className="w-full rounded-xl border border-[#3b2b25]/10 bg-white/60 px-4 py-3 text-[#2a211d] shadow-sm outline-none placeholder:text-[#4a3a33]/50 focus:border-[#9b6a4a]/40 focus:ring-2 focus:ring-[#9b6a4a]/20" />
              <input type="email" placeholder="Email address" className="w-full rounded-xl border border-[#3b2b25]/10 bg-white/60 px-4 py-3 text-[#2a211d] shadow-sm outline-none placeholder:text-[#4a3a33]/50 focus:border-[#9b6a4a]/40 focus:ring-2 focus:ring-[#9b6a4a]/20" />
              <textarea rows="4" placeholder="Message" className="w-full rounded-xl border border-[#3b2b25]/10 bg-white/60 px-4 py-3 text-[#2a211d] shadow-sm outline-none placeholder:text-[#4a3a33]/50 focus:border-[#9b6a4a]/40 focus:ring-2 focus:ring-[#9b6a4a]/20" />
              <button type="button" className="rounded-xl bg-[#3b2b25] px-6 py-3 text-sm font-semibold text-[#f7efe6] shadow-lg shadow-[#3b2b25]/20 transition hover:bg-[#2a211d]">Send Message</button>
            </form>

            <div className="mt-6 space-y-3 text-[#2a211d]">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#6b4226]" /> hello@cozycafe.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#6b4226]" /> (555) 123-4567</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#6b4226]" /> 123 Brew Lane, Latte City</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="h-[360px] w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1600&auto=format&fit=crop"
                alt="Cafe exterior"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_110%,rgba(155,106,74,0.25),transparent)]" />
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 rounded-3xl border border-white/40 bg-white/40 p-6 text-center text-sm text-[#4a3a33] backdrop-blur-xl">
          9 Cozy Cafe — crafted with care. Open daily 7am – 9pm.
        </div>
      </div>
    </section>
  );
}
