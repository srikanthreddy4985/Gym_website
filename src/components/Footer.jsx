import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [note, setNote] = useState(null)

  function onSubscribe(e) {
    e.preventDefault()
    if (!email || !email.trim()) {
      setNote({ ok: false, message: 'Please enter email' })
      return
    }
    // Demo: pretend we posted to a newsletter service
    setNote({ ok: true, message: 'Mail submitted successfully' })
    setEmail('')
  }
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container-xl py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold">IRON<span className="text-gym-red">FORCE</span></div>
          <p className="text-sm text-gray-400 mt-3">Train hard. Stay strong. Achieve more.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-gym-red">IG</a>
            <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-gym-red">FB</a>
            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-gym-red">X</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-gym-red">Home</Link></li>
            <li><Link to="/about" className="hover:text-gym-red">About</Link></li>
            <li><Link to="/membership" className="hover:text-gym-red">Membership</Link></li>
            <li><Link to="/gallery" className="hover:text-gym-red">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gym-red">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 text-sm">123 Fitness Ave, City</p>
          <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
          <p className="text-gray-300 text-sm">info@ironforcegym.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2" onSubmit={onSubscribe}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gym-red" placeholder="Your email" />
            <button className="btn-primary" type="submit">Subscribe</button>
          </form>
          {note && (
            <div className={`text-xs mt-2 ${note.ok ? 'text-green-400' : 'text-red-400'}`}>{note.message}</div>
          )}
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-white/5">© {new Date().getFullYear()} IronForce Gym. All rights reserved.</div>
    </footer>
  )
}

