import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import './Projects.css'

const categories = ['All', 'Residential', 'Commercial']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <div className="projects-page">
      <section className="page-hero">
        <div className="container">
          <div className="accent-line" />
          <h1>Our <span>Projects</span></h1>
          <p>A portfolio of landmark builds across the Bay Area and beyond.</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
                <span className="filter-count">
                  {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
