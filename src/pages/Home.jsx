import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import { services } from '../data/services'
import { projects } from '../data/projects'
import './Home.css'

const stats = [
  { value: '120+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '80+', label: 'Happy Clients' },
  { value: '40+', label: 'Expert Team Members' },
]

export default function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
            alt="Construction site"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="hero-badge">Est. 2009 • San Francisco, CA</div>
          <h1>
            We Build<br />
            <span className="hero-accent">The Future</span><br />
            You Envision
          </h1>
          <p>From groundbreaking to grand opening — delivering construction excellence with precision engineering, on-time delivery, and uncompromising safety standards.</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Our Projects</Link>
            <Link to="/contact" className="btn-outline">Get Free Quote</Link>
          </div>
        </div>
        <div className="hero-scroll-cue">
          <span />
        </div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="about-strip section-pad">
        <div className="container about-inner">
          <div className="about-text">
            <div className="accent-line" />
            <h2 className="section-title">Built on <span style={{color:'#F4B400'}}>Trust</span> &amp; Excellence</h2>
            <p className="section-subtitle">
              Since 2009, BuildForge has been the Bay Area's most trusted construction partner. We combine cutting-edge technology with time-tested craftsmanship to deliver structures that endure.
            </p>
            <div className="about-points">
              <div className="about-point">✅ ISO 9001 Certified Quality Management</div>
              <div className="about-point">✅ Licensed &amp; Insured in 5 States</div>
              <div className="about-point">✅ OSHA Compliant Safety Program</div>
              <div className="about-point">✅ 100% On-Budget Track Record</div>
            </div>
            <Link to="/why-us" className="btn-primary" style={{marginTop: '32px'}}>Why Choose Us</Link>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Construction workers"
            />
            <div className="about-badge">
              <strong>15+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad" style={{background: '#F5F5F5'}}>
        <div className="container">
          <div className="accent-line" />
          <h2 className="section-title">Our <span style={{color:'#F4B400'}}>Services</span></h2>
          <p className="section-subtitle">Comprehensive construction solutions tailored to your vision and budget.</p>
          <div className="grid-4">
            {services.map(s => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
          <div style={{textAlign:'center', marginTop: '48px'}}>
            <Link to="/services" className="btn-primary">All Services</Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-pad">
        <div className="container">
          <div className="accent-line" />
          <h2 className="section-title">Featured <span style={{color:'#F4B400'}}>Projects</span></h2>
          <p className="section-subtitle">A showcase of our latest and most impactful construction achievements.</p>
          <div className="grid-3">
            {projects.slice(0, 3).map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div style={{textAlign:'center', marginTop: '48px'}}>
            <Link to="/projects" className="btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Start Your Project?</h2>
            <p>Get a free consultation and detailed quote within 24 hours.</p>
          </div>
          <Link to="/contact" className="btn-primary">Request a Quote →</Link>
        </div>
      </section>

    </div>
  )
}
