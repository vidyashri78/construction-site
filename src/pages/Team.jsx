import { team } from '../data/team'
import './Team.css'

export default function Team() {
  return (
    <div className="team-page">

      <section className="page-hero">
        <div className="container">
          <div className="accent-line" />
          <h1>Meet Our <span>Team</span></h1>
          <p>The expert minds, skilled hands, and visionary leaders behind every successful build.</p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="team-section">
        <div className="container">
          <div className="grid-3">
            {team.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-overlay">
                    <a href={member.linkedin} className="team-linkedin" aria-label={`${member.name} LinkedIn`}>
                      <span>in</span> LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE STRIP */}
      <section className="culture-strip">
        <div className="container culture-grid">
          {[
            { icon: '🎓', stat: '40+', label: 'Certified Professionals' },
            { icon: '🏆', stat: '12', label: 'Industry Awards' },
            { icon: '🤝', stat: '98%', label: 'Employee Retention' },
            { icon: '📚', stat: '500+', label: 'Training Hours/Year' },
          ].map((item, i) => (
            <div key={i} className="culture-item">
              <span className="culture-icon">{item.icon}</span>
              <strong>{item.stat}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN US */}
      <section className="join-section">
        <div className="container join-inner">
          <div className="join-text">
            <div className="accent-line" />
            <h2 className="section-title">Join Our <span style={{ color: '#F4B400' }}>Team</span></h2>
            <p>We're always looking for passionate, skilled professionals to help us build the future. Great pay, great culture, great work.</p>
            <a href="mailto:careers@buildforge.com" className="btn-primary" style={{ marginTop: '24px', display: 'inline-flex' }}>
              View Open Positions →
            </a>
          </div>
          <div className="join-image">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=700&q=80"
              alt="Team at work"
            />
          </div>
        </div>
      </section>

    </div>
  )
}
