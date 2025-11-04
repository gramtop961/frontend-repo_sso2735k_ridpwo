import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * i } }),
};

const menu = [
  { name: 'Signature Latte', desc: 'Velvety microfoam with caramel notes', price: '$5.20', img: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Pour Over', desc: 'Single-origin, slow-brew clarity', price: '$4.50', img: 'https://images.unsplash.com/photo-1502958292068-9f0f5b9b4d25?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Espresso', desc: 'Rich crema, balanced acidity', price: '$3.40', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Almond Croissant', desc: 'Buttery, flaky, roasted almond', price: '$3.80', img: 'https://images.unsplash.com/photo-1483691278019-cb7253bee49f?q=80&w=1200&auto=format&fit=crop' },
];

export default function AboutMenu() {
  return (
    <section id="about" className="relative w-full bg-[#efe6da] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-semibold tracking-tight text-[#2a211d] sm:text-4xl">Craft. Comfort. Community.</h2>
            <p className="mt-4 text-[#4a3a33]/80">
              Our cafe is a love letter to slow living and great coffee. Every bean is ethically sourced and roasted with care, while our pastries are baked fresh each morning. Settle into warm textures, soft lighting, and conversations that linger.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Ethically Sourced', 'Plant-Based Options', 'Seasonal Menu', 'Wi‑Fi & Workspace'].map((tag) => (
                <span key={tag} className="rounded-full border border-[#3b2b25]/10 bg-white/50 px-3 py-1 text-sm text-[#3b2b25] backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-80 w-full overflow-hidden rounded-3xl border border-white/40 bg-white/40 shadow-xl backdrop-blur-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop"
              alt="Cozy cafe interior"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2a211d]/30 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Menu */}
        <div id="menu" className="mt-16">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="text-2xl font-semibold text-[#2a211d]">Menu Highlights</h3>
            <a href="#contact" className="text-sm font-medium text-[#6b4226] underline-offset-4 hover:underline">See full menu in store</a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {menu.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/40 shadow-lg backdrop-blur-xl"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2a211d]/40 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-semibold text-[#2a211d]">{item.name}</h4>
                    <span className="rounded-full bg-[#3b2b25] px-3 py-1 text-xs font-semibold text-[#f7efe6]">{item.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-[#4a3a33]/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
