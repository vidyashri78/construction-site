import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const [sliderPos, setSliderPos] = useState(50)

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn-primary">← Back to Projects</Link>
      </div>
    )
  }

  return (
    <div className="project-detail">

      {/* HERO */}
      <section
        className="detail-hero"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="detail-hero-overlay" />
        <div className="container detail-hero-content">
          <Link to="/projects" className="back-link">← All Projects</Link>
          <span className="project-tag-hero">{project.category}</span>
          <h1>{project.title}</h1>
          <p>📍 {project.location}</p>
        </div>
      </section>

      {/* BODY */}
      <section className="detail-body">
        <div className="container detail-grid">

          {/* MAIN CONTENT */}
          <div className="detail-main">
            <h2>Project Overview</h2>
            <p className="detail-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>

            {/* BEFORE / AFTER SLIDER */}
            <h3 className="section-heading">Before / After</h3>
            <div className="before-after-slider">
              <div
                className="ba-before"
                style={{ backgroundImage: `url(${project.beforeImage})` }}
              >
                <span className="ba-label">Before</span>
              </div>
              <div
                className="ba-after"
                style={{
                  backgroundImage: `url(${project.image})`,
                  clipPath: `inset(0 0 0 ${sliderPos}%)`,
                }}
              >
                <span className="ba-label after">After</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={e => setSliderPos(e.target.value)}
                className="ba-range"
                aria-label="Before/After slider"
              />
              <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
                <span>⟺</span>
              </div>
            </div>

            {/* TIMELINE */}
            <h3 className="section-heading">Project Timeline</h3>
            <div className="timeline">
              {project.timeline.map((t, i) => (
                <div key={i} className={`timeline-item ${t.status}`}>
                  <div className="tl-dot-wrap">
                    <div className="tl-dot" />
                    {i < project.timeline.length - 1 && <div className="tl-line" />}
                  </div>
                  <div className="tl-content">
                    <strong>{t.phase}</strong>
                    <span>{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="detail-sidebar">
            <div className="detail-card">
              <h3>Project Details</h3>
              <dl className="detail-dl">
                <div className="dl-row"><dt>Client</dt><dd>{project.client}</dd></div>
                <div className="dl-row"><dt>Location</dt><dd>{project.location}</dd></div>
                <div className="dl-row"><dt>Budget</dt><dd>{project.budget}</dd></div>
                <div className="dl-row"><dt>Duration</dt><dd>{project.duration}</dd></div>
                <div className="dl-row"><dt>Completed</dt><dd>{project.year}</dd></div>
                <div className="dl-row"><dt>Category</dt><dd>{project.category}</dd></div>
              </dl>
            </div>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ display: 'block', textAlign: 'center', marginTop: '24px' }}
            >
              Start Similar Project →
            </Link>

            <div className="related-label">Other Projects</div>
            <div className="related-projects">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map(p => (
                  <Link key={p.id} to={`/projects/${p.id}`} className="related-item">
                    <img src={p.image} alt={p.title} />
                    <div>
                      <strong>{p.title}</strong>
                      <span>{p.location}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
