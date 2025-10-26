import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-xl py-24 md:py-32 grid md:grid-cols-2 items-center gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Unleash Your <span className="text-gym-red">Power</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-prose">State-of-the-art equipment, elite trainers, and programs tailored to transform your body and mind.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/membership" className="btn-primary">Join Now</Link>
              <a href="#services" className="btn-secondary">Explore Services</a>
            </div>
          </motion.div>
          <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop" alt="Athlete" className="rounded-xl shadow-2xl shadow-gym-red/20 border border-white/5" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-xl py-20">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {[
            { title: 'Weight Training', img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d04c?q=80&w=1600&auto=format&fit=crop' },
            { title: 'Cardio', img: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1600&auto=format&fit=crop' },
            { title: 'CrossFit', img: 'https://images.unsplash.com/photo-1554298063-7e63f5653ed2?q=80&w=1600&auto=format&fit=crop' },
            { title: 'Yoga', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1600&auto=format&fit=crop' },
          ].map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-xl border border-white/5">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10 p-4 flex items-end">
                <div>
                  <div className="text-lg font-semibold">{s.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/5 border-y border-white/10">
        <div className="container-xl py-20">
          <h2 className="text-3xl font-bold">What Our Members Say</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { name: 'Aarav', text: 'Best gym in town! Trainers truly care about progress.' },
              { name: 'Maya', text: 'Love the energy and the variety of classes.' },
              { name: 'Liam', text: 'Great equipment and motivating environment.' },
            ].map((t) => (
              <div key={t.name} className="p-6 rounded-xl bg-black border border-white/10">
                <p className="text-gray-300">“{t.text}”</p>
                <div className="mt-3 font-semibold text-gym-red">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container-xl py-20">
        <h2 className="text-3xl font-bold">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { name: 'Monthly', price: 29, features: ['Gym Access', '1 Class/Week'] },
            { name: 'Quarterly', price: 79, features: ['Gym Access', '3 Classes/Week'] },
            { name: 'Yearly', price: 249, features: ['All Access', 'Unlimited Classes'] },
          ].map((p) => (
            <div key={p.name} className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <div className="text-xl font-bold">{p.name}</div>
              <div className="text-4xl font-extrabold mt-2">${p.price}<span className="text-base text-gray-400">/mo</span></div>
              <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                {p.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <Link to="/membership" className="btn-primary mt-6">Pay Now</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

