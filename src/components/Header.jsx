import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-[#E3F2FD] shadow-sm transition-colors"
      aria-label="Main navigation">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="text-[#1E88E5] text-2xl md:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: 'Inter, sans-serif' }}>
          Portfolio 
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-72}
                className="cursor-pointer text-[16px] text-[#212121] font-medium hover:text-[#FF5722] focus-visible:text-[#FF5722] focus:outline-none"
                aria-label={`Go to ${link.label} section`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E88E5]"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FiX className="text-2xl text-[#212121]" />
          ) : (
            <FiMenu className="text-2xl text-[#212121]" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E3F2FD] shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-72}
                  className="block text-[14px] text-[#212121] font-medium hover:text-[#FF5722] focus-visible:text-[#FF5722] focus:outline-none"
                  aria-label={`Go to ${link.label} section`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

