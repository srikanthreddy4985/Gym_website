export default function About() {
  const trainers = [
    { name: 'Rohit Sharma', exp: '8 yrs Strength Coach', img: 'https://images.unsplash.com/photo-1597076545397-3c5b7f3f7b10?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Ananya Singh', exp: '6 yrs Yoga Expert', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Vikram Patel', exp: '5 yrs CrossFit L2', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <div>
      <section className="container-xl py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">IronForce Gym started with a mission to empower our community through fitness. We combine world-class equipment with science-backed training programs, guided by certified trainers.</p>
      </section>

      <section className="bg-white/5 border-y border-white/10">
        <div className="container-xl py-16">
          <h2 className="text-3xl font-bold">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8 text-gray-300">
            <div className="p-6 rounded-xl bg-black border border-white/10"><div className="font-semibold text-white">Discipline</div><p className="text-sm mt-2">Progress is built daily with consistent effort.</p></div>
            <div className="p-6 rounded-xl bg-black border border-white/10"><div className="font-semibold text-white">Community</div><p className="text-sm mt-2">Supportive culture that keeps you accountable.</p></div>
            <div className="p-6 rounded-xl bg-black border border-white/10"><div className="font-semibold text-white">Excellence</div><p className="text-sm mt-2">We strive for the highest standards in everything.</p></div>
          </div>
        </div>
      </section>

      <section className="container-xl py-16">
        <h2 className="text-3xl font-bold">Meet Our Trainers</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-xl overflow-hidden border border-white/10">
              <img src={t.img} alt={t.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-400">{t.exp}</div>
                <div className="flex gap-3 mt-3 text-gray-300">
                  <a href="#" className="hover:text-gym-red" aria-label="Instagram">IG</a>
                  <a href="#" className="hover:text-gym-red" aria-label="LinkedIn">IN</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

