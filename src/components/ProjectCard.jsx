import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
      <div className="project-image-wrap">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <span className="view-project">View Project →</span>
        </div>
        <span className="project-tag">{project.category}</span>
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.location}</p>
        <div className="project-meta">
          <span>📅 {project.year}</span>
          <span>💰 {project.budget}</span>
        </div>
      </div>
    </Link>
  )
}
