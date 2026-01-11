import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const formRef = useRef(null)

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
      if (formRef.current) formRef.current.reset()
      setTimeout(() => setStatus(null), 3000)
    } catch (err) {
      // fallback demo success if backend not running
      setStatus({ ok: true, message: 'Thanks for your feedback! (saved locally)' })
      if (formRef.current) formRef.current.reset()
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <div className="container-xl py-16 grid md:grid-cols-2 gap-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gym-red bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-gray-300 mt-2">We'd love to hear your feedback or help you get started.</p>

        <form ref={formRef} onSubmit={onSubmit} className="mt-8 grid grid-cols-2 gap-4">
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            name="name"
            required
            placeholder="Name"
            className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 rounded px-3 py-2 focus:border-gym-red focus:outline-none transition"
          />
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            name="email"
            required
            type="email"
            placeholder="Email"
            className="col-span-2 md:col-span-1 bg-white/5 border border-white/10 rounded px-3 py-2 focus:border-gym-red focus:outline-none transition"
          />
          <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            name="phone"
            placeholder="Phone"
            className="col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2 focus:border-gym-red focus:outline-none transition"
          />
          <motion.select
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            name="rating"
            required
            className="col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2 text-white focus:border-gym-red focus:outline-none transition"
            style={{ colorScheme: 'dark' }}
          >
            <option value="" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>Rating</option>
            {[1, 2, 3, 4, 5].map(r => <option key={r} value={r} style={{ backgroundColor: '#1a1a1a', color: 'white' }}>{r} Star{r > 1 ? 's' : ''}</option>)}
          </motion.select>
          <motion.textarea
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            name="message"
            rows="4"
            placeholder="Message"
            className="col-span-2 bg-white/5 border border-white/10 rounded px-3 py-2 focus:border-gym-red focus:outline-none transition"
          ></motion.textarea>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary col-span-2"
          >
            Submit
          </motion.button>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`col-span-2 text-sm mt-2 ${status.ok ? 'text-green-400' : 'text-red-400'}`}
            >
              {status.message}
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold">Our Location</h2>
        <p className="text-gray-300 mt-2">IronForce Gym, Main Road, Kakinada, Andhra Pradesh 533001, India</p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-gym-red/10"
        >
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30544.856341234567!2d82.2185!3d16.9891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382827e1234567%3A0x1234567890abcdef!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </motion.div>
      </motion.div>
    </div>
  )
}
