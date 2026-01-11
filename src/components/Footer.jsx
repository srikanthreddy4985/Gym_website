import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState(null)

  function onSubscribe(e) {
    e.preventDefault()
    if (!email || !email.trim()) {
      setNote({ ok: false, message: 'Please enter email' })
      return
    }
    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setNote({ ok: false, message: 'Please enter a valid email address' })
      return
    }
    // Demo: pretend we posted to a newsletter service
    setNote({ ok: true, message: 'Mail submitted successfully' })
    setEmail('')
  }

  return (
    <footer className="border-t border-white/5 bg-gradient-to-b from-black to-gray-900">
      <div className="container-xl py-10 grid gap-8 md:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xl font-extrabold">
            IRON<span className="text-gym-red bg-gradient-to-r from-gym-red to-red-500 bg-clip-text">FORCE</span>
          </div>
          <p className="text-sm text-gray-400 mt-3">Train hard. Stay strong. Achieve more.</p>
          <div className="flex gap-3 mt-4">
            <motion.a
              whileHover={{ scale: 1.2, color: '#ff2d2d' }}
              href="#"
              aria-label="Instagram"
              className="text-gray-300 transition"
            >
              IG
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#ff2d2d' }}
              href="#"
              aria-label="Facebook"
              className="text-gray-300 transition"
            >
              FB
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#ff2d2d' }}
              href="#"
              aria-label="Twitter"
              className="text-gray-300 transition"
            >
              X
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/membership', label: 'Membership' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-gym-red transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 text-sm">IronForce Gym, Main Road</p>
          <p className="text-gray-300 text-sm">Kakinada, Andhra Pradesh 533001</p>
          <p className="text-gray-300 text-sm">+91 88888 12345</p>
          <p className="text-gray-300 text-sm">info@ironforcegym.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2" onSubmit={onSubscribe}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gym-red transition"
              placeholder="Your email"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              type="submit"
            >
              Subscribe
            </motion.button>
          </form>
          {note && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-xs mt-2 ${note.ok ? 'text-green-400' : 'text-red-400'}`}
            >
              {note.message}
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs text-gray-500 py-4 border-t border-white/5"
      >
        © {new Date().getFullYear()} IronForce Gym. All rights reserved.
      </motion.div>
    </footer>
  )
}
