import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Početna',    href: '#home' },
  { label: 'Galerija',   href: '#gallery' },
  { label: 'Pogodnosti', href: '#amenities' },
  { label: 'O nama',     href: '#about' },
  { label: 'Lokacija',   href: '#location' },
  { label: 'Kontakt',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#home" onClick={close} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shadow-sm group-hover:bg-accent-dark transition-colors">
              <span className="text-white font-bold text-sm font-serif">A</span>
            </div>
            <div className="leading-none">
              <span className={`font-serif font-semibold text-lg tracking-tight block transition-colors ${
                scrolled ? 'text-stone-900' : 'text-white'
              }`}>
                Apartmani
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                scrolled ? 'text-accent' : 'text-accent-light'
              }`}>
                Polihrono
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? 'text-stone-600' : 'text-white/85 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-md"
            >
              Rezervišite
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otvori meni"
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <nav className="bg-white border-t border-stone-100 shadow-lg flex flex-col py-4 px-4 gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={close}
              className="text-stone-700 font-medium py-3 px-4 rounded-xl hover:bg-cream-100 hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="mt-3 bg-accent hover:bg-accent-dark text-white py-3 px-4 rounded-xl text-center font-semibold transition-colors"
          >
            Rezervišite smeštaj
          </a>
        </nav>
      </div>
    </header>
  )
}
