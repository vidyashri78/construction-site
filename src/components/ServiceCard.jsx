import './ServiceCard.css'

export default function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {features && (
        <ul className="service-features">
          {features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      )}
      <div className="service-card-footer">
        <span className="service-link">Learn More →</span>
      </div>
    </div>
  )
}
