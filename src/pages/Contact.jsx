import { useState } from 'react'
import './Contact.css'

const projectTypes = [
  'Residential Construction',
  'Commercial Construction',
  'Renovation & Remodeling',
  'Interior Design',
  'Green Building',
  'Demolition Services',
  'Architectural Design',
  'Other',
]

const budgetRanges = [
  'Under $100K',
  '$100K – $500K',
  '$500K – $2M',
  '$2M – $10M',
  '$10M – $50M',
  '$50M+',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Please describe your project'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) {
      setErrors(e2)
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">

      <section className="page-hero">
        <div className="container">
          <div className="accent-line" />
          <h1>Contact <span>Us</span></h1>
          <p>Request a free quote or consultation — we respond within 24 hours.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">

          {/* FORM */}
          <div className="contact-form-wrap">
            <h2>Request a <span className="yellow">Quote</span></h2>
            <p className="form-intro">Fill out the form and a senior project manager will reach out within one business day.</p>

            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✅</div>
                <h3>Message Received!</h3>
                <p>Thank you, <strong>{form.name}</strong>! We'll contact you at <strong>{form.email}</strong> within 24 hours to discuss your project.</p>
              </div>
            ) : (
              <form className="rfq-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                    <label htmlFor="name">Full Name <span className="req">*</span></label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                    />
                    {errors.name && <span className="error-msg">{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                    <label htmlFor="email">Email Address <span className="req">*</span></label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (415) 555-0100"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select a range…</option>
                    {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Project Details <span className="req">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Describe your project — location, scope, timeline, and any specific requirements…"
                  />
                  {errors.message && <span className="error-msg">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  Submit Request →
                </button>
              </form>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="contact-sidebar">
            <div className="contact-info-card">
              <h3>Get In Touch</h3>
              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Office Address</strong>
                    <p>1240 Industrial Drive, Suite 400<br />San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+1 (415) 555-0192</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>info@buildforge.com<br />projects@buildforge.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div>
                    <strong>Business Hours</strong>
                    <p>Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="response-badge">
              <span className="badge-icon">⚡</span>
              <div>
                <strong>Fast Response Guarantee</strong>
                <p>We reply to all quote requests within 24 business hours.</p>
              </div>
            </div>

            {/* MAP */}
            <div className="map-wrap">
              <iframe
                title="BuildForge Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3176534193066!2d-122.41519168468196!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580993f3b4c0b%3A0x3e03a7f8f3862b0!2sSan%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>

    </div>
  )
}
