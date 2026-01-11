import { motion } from 'framer-motion'

export default function About() {
  const trainers = [
    { name: 'Rohit Sharma', exp: '8 yrs Strength Coach', img: 'https://images.unsplash.com/photo-1597076545397-3c5b7f3f7b10?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Ananya Singh', exp: '6 yrs Yoga Expert', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Vikram Patel', exp: '5 yrs CrossFit L2', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop' },
  ]

  const values = [
    { title: 'Discipline', desc: 'Progress is built daily with consistent effort.', icon: '💪' },
    { title: 'Community', desc: 'Supportive culture that keeps you accountable.', icon: '🤝' },
    { title: 'Excellence', desc: 'We strive for the highest standards in everything.', icon: '⭐' },
  ]

  return (
    <div>
      <section className="container-xl py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gym-red bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl">
            IronForce Gym started with a mission to empower our community through fitness. We combine world-class equipment with science-backed training programs, guided by certified trainers.
          </p>
        </motion.div>
      </section>

      <section className="bg-white/5 border-y border-white/10">
        <div className="container-xl py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-gray-300">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group p-6 rounded-xl bg-gradient-to-br from-black to-gray-900 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gym-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <div className="font-semibold text-white text-xl">{value.title}</div>
                  <p className="text-sm mt-2">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-xl py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Meet Our Trainers
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {trainers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent"
            >
              <div className="relative overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 relative">
                <div className="font-semibold text-lg">{t.name}</div>
                <div className="text-sm text-gym-red">{t.exp}</div>
                <div className="flex gap-3 mt-3 text-gray-300">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    className="hover:text-gym-red transition"
                    aria-label="Instagram"
                  >
                    IG
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="#"
                    className="hover:text-gym-red transition"
                    aria-label="LinkedIn"
                  >
                    IN
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
