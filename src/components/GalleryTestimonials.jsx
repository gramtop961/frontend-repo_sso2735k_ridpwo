import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const gallery = [
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513438205128-16af4a7e4f36?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1400&auto=format&fit=crop',
];

const reviews = [
  {
    name: 'Lena M.',
    text: 'The latte art is gorgeous and the ambience is perfect for reading. My favorite spot in the city.',
  },
  {
    name: 'Marcus V.',
    text: 'Their pour-over flights are a must. You can taste the care in every cup.',
  },
  {
    name: 'Ivy K.',
    text: 'Warm staff, incredible pastries, and the playlist is always on point. 10/10.',
  },
];

export default function GalleryTestimonials() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#e7dccf] to-[#f2eae0] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h3 className="text-2xl font-semibold text-[#2a211d]">Gallery</h3>
          <p className="text-sm text-[#4a3a33]/70">Hover to explore the details</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 shadow-md backdrop-blur-xl"
            >
              <img src={src} alt="Cafe item" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a211d]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-16">
          <h3 className="text-2xl font-semibold text-[#2a211d]">What guests say</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/50 p-6 shadow-lg backdrop-blur-xl"
              >
                <div className="mb-3 flex items-center gap-1 text-[#9b6a4a]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-[#2a211d]">{r.text}</p>
                <p className="mt-4 text-sm font-semibold text-[#4a3a33]">{r.name}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#9b6a4a]/20 blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
