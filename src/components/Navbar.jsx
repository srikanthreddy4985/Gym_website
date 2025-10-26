import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-semibold hover:text-gym-red ${isActive ? 'text-gym-red' : 'text-gray-200'}`

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/5">
      <div className="container-xl flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-extrabold tracking-wide">
          IRON<span className="text-gym-red">FORCE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navItemClass}>Home</NavLink>
          <NavLink to="/about" className={navItemClass}>About</NavLink>
          <NavLink to="/membership" className={navItemClass}>Membership</NavLink>
          <NavLink to="/gallery" className={navItemClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          <Link to="/membership" className="btn-primary ml-2">Join Now</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="container-xl py-3 flex flex-col gap-1">
            <NavLink to="/" onClick={() => setOpen(false)} className={navItemClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={navItemClass}>About</NavLink>
            <NavLink to="/membership" onClick={() => setOpen(false)} className={navItemClass}>Membership</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)} className={navItemClass}>Gallery</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={navItemClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

