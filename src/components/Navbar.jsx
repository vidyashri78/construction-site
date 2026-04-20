// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { path: '/',        label: 'Home'     },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/team',    label: 'Team'     },
  { path: '/why-us',  label: 'Why Us'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const location = useLocation()

  // Scroll-shadow effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-close mobile menu on route change
  // (ScrollToTop handles scrolling; this just closes the drawer)
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <span className="logo-icon">⚙</span>
            <span>BUILD<span className="accent">FORGE</span></span>
          </Link>

          <nav
            className={`navbar-links ${menuOpen ? 'open' : ''}`}
            aria-label="Main navigation"
          >
            {navLinks.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="nav-cta">
              Get a Quote
            </Link>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Backdrop — tap outside drawer to close */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(0,0,0,0.45)',
          }}
          aria-hidden="true"
        />
      )}
    </>
  )
}
