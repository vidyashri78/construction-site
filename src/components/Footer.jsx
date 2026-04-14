import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">⚙ BUILD<span>FORGE</span></div>
          <p>Building tomorrow's infrastructure with precision, integrity, and craftsmanship that stands the test of time.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-icon">f</a>
            <a href="#" aria-label="Twitter" className="social-icon">𝕏</a>
            <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
            <a href="#" aria-label="Instagram" className="social-icon">▣</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Residential Construction</Link></li>
            <li><Link to="/services">Commercial Projects</Link></li>
            <li><Link to="/services">Renovation & Remodeling</Link></li>
            <li><Link to="/services">Interior Design</Link></li>
            <li><Link to="/services">Project Management</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>📍 1240 Industrial Drive, Suite 400<br />San Francisco, CA 94103</li>
            <li>📞 +1 (415) 555-0192</li>
            <li>✉️ info@buildforge.com</li>
            <li>🕐 Mon–Sat: 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} BuildForge Construction. All rights reserved.</p>
          <p>Designed with precision. Built with integrity.</p>
        </div>
      </div>
    </footer>
  )
}
