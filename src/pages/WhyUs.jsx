import { Link } from 'react-router-dom'
import './WhyUs.css'

const features = [
  {
    icon: '🏆',
    title: 'Quality Work',
    desc: 'ISO 9001-certified processes ensure every build meets the highest standards of craftsmanship, materials, and finish quality — guaranteed.',
  },
  {
    icon: '⏱️',
    title: 'On-Time Delivery',
    desc: 'Rigorous scheduling, milestone-based management, and proactive risk assessment mean 98% of our projects are delivered on or ahead of schedule.',
  },
  {
    icon: '👷',
    title: 'Skilled Team',
    desc: 'Our 40+ person team includes licensed PEs, LEED-accredited architects, and master tradespeople with decades of combined hands-on experience.',
  },
  {
    icon: '🦺',
    title: 'Safety Standards',
    desc: 'OSHA 500-compliant safety program with a perfect zero lost-time incident record across all active job sites over the past 5 consecutive years.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'Itemized estimates with zero hidden fees. You receive weekly cost-tracking reports and approve every change order before work proceeds.',
  },
  {
    icon: '🌿',
    title: 'Sustainable Practices',
    desc: 'We minimize jobsite waste, maximize material recycling, and offer full LEED certification advisory on every commercial and residential project.',
  },
]

const testimonials = [
  {
    quote: 'BuildForge delivered our 22-story tower 3 weeks ahead of schedule and $400K under budget. Simply outstanding execution from start to finish.',
    name: 'Richard Park',
    company: 'Pacific Realty Group',
    project: 'Skyline Tower',
    rating: 5,
  },
  {
    quote: 'The level of communication and transparency we experienced was unlike any contractor we have worked with in over 20 years of development.',
    name: 'Angela Torres',
    company: 'City of Sacramento',
    project: 'Downtown Civic Library',
    rating: 5,
  },
  {
    quote: 'From the design consultation to final handover, every single detail was handled with genuine precision and care. Our villas exceeded all expectations.',
    name: 'Michael Chen',
    company: 'Private Client',
    project: 'Greenview Villas',
    rating: 5,
  },
]

const certifications = [
  { name: 'ISO 9001:2015', desc: 'Quality Management' },
  { name: 'LEED AP', desc: 'Green Building' },
  { name: 'OSHA 500', desc: 'Safety Training' },
  { name: 'AGC Member', desc: 'General Contractors' },
]

export default function WhyUs() {
  return (
    <div className="whyus-page">

      <section className="page-hero">
        <div className="container">
          <div className="accent-line" />
          <h1>Why <span>Choose Us</span></h1>
          <p>What sets BuildForge apart from every other contractor in the industry.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="grid-3">
            {features.map((f, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers-section">
        <div className="container">
          <div className="accent-line" />
          <h2 className="section-title" style={{ color: '#fff' }}>
            The Numbers <span style={{ color: '#F4B400' }}>Speak</span>
          </h2>
          <div className="numbers-grid">
            {[
              { value: '120+', label: 'Projects Completed', icon: '🏗️' },
              { value: '$2.4B+', label: 'Total Project Value', icon: '💵' },
              { value: '0', label: 'Lost-Time Incidents', icon: '🦺' },
              { value: '98%', label: 'On-Time Delivery Rate', icon: '✅' },
              { value: '4.9/5', label: 'Average Client Rating', icon: '⭐' },
              { value: '100%', label: 'On-Budget Track Record', icon: '📊' },
            ].map((n, i) => (
              <div key={i} className="number-item">
                <span className="number-icon">{n.icon}</span>
                <strong>{n.value}</strong>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="accent-line" />
          <h2 className="section-title">Client <span style={{ color: '#F4B400' }}>Testimonials</span></h2>
          <p className="section-subtitle">Real words from real clients who trusted us with their most important projects.</p>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{'★'.repeat(t.rating)}</div>
                <div className="quote-mark">"</div>
                <p>{t.quote}</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.company}</span>
                  </div>
                  <span className="author-project">{t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certs-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Certifications & <span style={{ color: '#F4B400' }}>Memberships</span>
          </h2>
          <div className="certs-grid">
            {certifications.map((c, i) => (
              <div key={i} className="cert-item">
                <strong>{c.name}</strong>
                <span>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="whyus-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Build With <span style={{ color: '#F4B400' }}>Confidence?</span></h2>
          <p>Join 80+ satisfied clients who trusted BuildForge to bring their vision to life — on time and on budget.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
            <Link to="/projects" className="btn-outline">See Our Work</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
