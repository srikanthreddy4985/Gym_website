export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1583454110551-21f2fa2f3f3e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581009137042-c552e4856971?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571731956672-ac0e87f6ca9a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599058917855-35c1f4fd0a11?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop',
  ]

  return (
    <div className="container-xl py-16">
      <h1 className="text-4xl font-bold">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {images.map((src, idx) => (
          <div key={idx} className="aspect-square overflow-hidden rounded-lg border border-white/10">
            <img src={src} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover hover:scale-105 transition" />
          </div>
        ))}
      </div>
    </div>
  )
}

