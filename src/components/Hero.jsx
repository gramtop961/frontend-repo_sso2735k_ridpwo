import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Coffee } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yParallax1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yParallax2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yParallax3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#f7efe6] via-[#efe6da] to-[#e7dccf]">
      {/* Decorative ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#9b6a4a]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#3b2b25]/20 blur-3xl" />
      </div>

      {/* Floating beans / leaves parallax */}
      <motion.div style={{ y: yParallax3 }} className="pointer-events-none absolute left-8 top-24" aria-hidden>
        <div className="h-6 w-10 rotate-12 rounded-full bg-[#6b4226]/70 blur-[1px] shadow-md" />
      </motion.div>
      <motion.div style={{ y: yParallax2 }} className="pointer-events-none absolute right-10 top-40" aria-hidden>
        <div className="h-8 w-12 -rotate-12 rounded-full bg-[#5a3823]/60 blur-[1px] shadow" />
      </motion.div>
      <motion.div style={{ y: yParallax1 }} className="pointer-events-none absolute left-1/2 top-64 -translate-x-1/2" aria-hidden>
        <div className="h-10 w-16 rotate-6 rounded-full bg-[#7b5134]/50 blur-[2px] shadow" />
      </motion.div>

      {/* Animated steam bubbles */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden>
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bottom-0 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-white/40 blur-xl"
            initial={{ y: 0, opacity: 0.6, scale: 0.6, x: (i - 3) * 14 }}
            animate={{ y: -160 - i * 20, opacity: [0.4, 0.7, 0], scale: [0.6, 1, 1.2] }}
            transition={{ duration: 4 + i * 0.3, repeat: Infinity, ease: 'easeOut', delay: i * 0.4 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 md:flex-row md:pt-28">
        <div className="relative z-10 w-full text-center md:w-1/2 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#3b2b25]/10 bg-white/40 px-4 py-2 shadow-sm backdrop-blur-md"
          >
            <Coffee className="h-4 w-4 text-[#6b4226]" />
            <span className="text-sm font-medium text-[#3b2b25]">Cozy, crafted, and sustainably sourced</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-[#2a211d] sm:text-5xl md:text-6xl"
          >
            A Warm Cup of Luxury
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[#4a3a33]/80 md:text-lg"
          >
            Welcome to our cozy cafe — where slow mornings and late afternoons meet craft roasts, artisanal pastries, and a welcoming glow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#menu"
              className="group rounded-xl bg-[#3b2b25] px-6 py-3 text-sm font-semibold text-[#f7efe6] shadow-lg shadow-[#3b2b25]/20 transition hover:bg-[#2a211d]"
            >
              Explore Menu
            </a>
            <a
              href="#about"
              className="rounded-xl border border-[#3b2b25]/20 bg-white/40 px-6 py-3 text-sm font-semibold text-[#3b2b25] backdrop-blur-md transition hover:border-[#3b2b25]/40 hover:bg-white/60"
            >
              Our Story
            </a>
          </motion.div>
        </div>

        {/* Hero visual card */}
        <div className="relative z-0 mt-12 w-full md:mt-0 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-white/30 bg-white/30 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_70%_120%,rgba(155,106,74,0.25),transparent)]" />
            <img
              src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop"
              alt="Cafe counter with coffee and pastries"
              className="h-full w-full object-cover mix-blend-multiply"
            />
            {/* soft overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a211d]/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
