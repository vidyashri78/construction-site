import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'
import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
  return (
    <div className="services-page">

      {/* VIDEO HERO */}
      <section className="services-video-hero">
        {/* Fallback image */}
        <img
          className="services-hero-fallback"
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Construction services"
        />
        {/* Autoplay background video */}
        <video
          className="services-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="services-hero-overlay" />
        <div className="container services-hero-content">
          <div className="accent-line" />
          <h1>Our <span>Services</span></h1>
          <p>Comprehensive construction solutions from concept to completion — residential, commercial, and everything in between.</p>
        </div>
      </section>

      <section className="section-pad-services">
        <div className="container">
          <div className="grid-4">
            {services.map(s => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="accent-line" />
          <h2 className="section-title">Our <span style={{color:'#F4B400'}}>Process</span></h2>
          <p className="section-subtitle">A streamlined, transparent approach from first call to final walkthrough.</p>
          <div className="process-steps">
            {[
              { num: '01', title: 'Consultation', desc: 'Free initial meeting to understand your vision, budget, and timeline.' },
              { num: '02', title: 'Design & Planning', desc: 'Architectural drawings, engineering specs, and permits secured.' },
              { num: '03', title: 'Construction', desc: 'Expert crews execute with daily reporting and milestone updates.' },
              { num: '04', title: 'Handover', desc: 'Final inspection, punch-list completion, and warranty documentation.' },
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
                {i < 3 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container" style={{textAlign:'center'}}>
          <h2>Ready to Start Your Project?</h2>
          <p>Talk to one of our senior project managers today — no commitment required.</p>
          <Link to="/contact" className="btn-primary" style={{marginTop:'24px'}}>Book Free Consultation</Link>
        </div>
      </section>
    </div>
  )
}
