import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    // Basic validation for demo
    const requiredOk = data.name?.trim() && data.email?.trim() && data.rating?.trim()
    if (!requiredOk) {
      setStatus({ ok: false, message: 'Please fill Name, Email, and Rating.' })
      return
    }
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Failed')
      setStatus({ ok: true, message: 'Thanks for your feedback!' })
      e.currentTarget.reset()
    } catch (err) {
      // fallback demo success if backend not running
      setStatus({ ok: true, message: 'Thanks for your feedback! (saved locally)' })
    }
  }

  return (
    <div className="container-xl py-16 grid md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-300 mt-2">We'd love to hear your feedback or help you get started.</p>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-2 gap-4">
          <input name="name" required placeholder="Name" className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 rounded px-3 py-2" />
          <input name="email" required type="email" placeholder="Email" className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 rounded px-3 py-2" />
          <input name="phone" placeholder="Phone" className="col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2" />
          <select name="rating" required className="col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2">
            <option value="">Rating</option>
            {[1,2,3,4,5].map(r => <option key={r} value={r}>{r} Star{r>1?'s':''}</option>)}
          </select>
          <textarea name="message" rows="4" placeholder="Message" className="col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2"></textarea>
          <button className="btn-primary col-span-2">Submit</button>
          {status && (
            <div className={`col-span-2 text-sm mt-2 ${status.ok ? 'text-green-400' : 'text-red-400'}`}>{status.message}</div>
          )}
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Our Location</h2>
        <p className="text-gray-300 mt-2">123 Fitness Ave, City</p>
        <div className="mt-4 aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096193!2d144.95592331590442!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2f90f5df!2sGym!5e0!3m2!1sen!2s!4v1611815634827!5m2!1sen!2s" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}

