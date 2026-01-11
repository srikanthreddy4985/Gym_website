import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop', // Gym equipment
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop', // Man lifting weights
    'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1600&auto=format&fit=crop', // Gym interior
    'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=1600&auto=format&fit=crop', // Woman working out
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop', // Gym class
    'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1600&auto=format&fit=crop', // Deadlift
    'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop', // Barbell training
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1600&auto=format&fit=crop', // Woman with dumbbells
  ]

  return (
    <div className="container-xl py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gym-red bg-clip-text text-transparent">
          Gallery
        </h1>
        <p className="text-gray-300 mt-2">Experience the energy of our gym through these moments</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="group aspect-square overflow-hidden rounded-lg border border-white/10 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
