import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-semibold transition-all hover:text-gym-red ${isActive ? 'text-gym-red' : 'text-gray-200'}`

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 shadow-lg"
    >
      <div className="container-xl flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extrabold tracking-wide group">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            IRON<span className="text-gym-red bg-gradient-to-r from-gym-red to-red-500 bg-clip-text">FORCE</span>
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {['/', '/about', '/membership', '/gallery', '/contact'].map((path, idx) => (
            <motion.div
              key={path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
            >
              <NavLink
                to={path}
                className={navItemClass}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/membership" className="btn-primary ml-2">Join Now</Link>
          </motion.div>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 overflow-hidden"
          >
            <div className="container-xl py-3 flex flex-col gap-1">
              <NavLink to="/" onClick={() => setOpen(false)} className={navItemClass}>Home</NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)} className={navItemClass}>About</NavLink>
              <NavLink to="/membership" onClick={() => setOpen(false)} className={navItemClass}>Membership</NavLink>
              <NavLink to="/gallery" onClick={() => setOpen(false)} className={navItemClass}>Gallery</NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={navItemClass}>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
