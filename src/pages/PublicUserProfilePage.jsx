import { Link, useParams } from "react-router-dom"

function PublicUserProfilePage() {
  const { userId } = useParams()

  const user = {
    fullName: "Hussein Zeidan",
    headline: "Frontend Developer & Computer Science Student",
    location: "Beirut, Lebanon",
    email: "hussein@example.com",
    status: "Available for opportunities",
    bio: "Passionate computer science student focused on building clean, modern, and user-friendly web applications with strong attention to UI/UX, performance, and maintainable code.",
    skills: ["React", "JavaScript", "Tailwind", "UI/UX", "Git", "FastAPI"],
    experience: [
      {
        role: "Frontend Intern",
        company: "RefIn",
        period: "2026",
        description:
          "Working on public pages, reusable React components, and clean user interfaces for the RefIn platform.",
      },
      {
        role: "Computer Science Student",
        company: "University Projects",
        period: "2024 - Present",
        description:
          "Building full-stack projects using React, Java, Python, databases, and modern development workflows.",
      },
    ],
  }

  return (
    <div className="public-profile-page">
      <div className="auth-bg-circle auth-bg-circle-top" />
      <div className="auth-bg-circle auth-bg-circle-bottom" />

      <main className="public-profile-container">
        <section className="public-profile-hero glass-strong">
          <div className="public-profile-top">
            <div className="public-profile-avatar">HZ</div>

            <div className="public-profile-main-info">
              <p className="public-profile-badge">Public Profile</p>
              <h1>{user.fullName}</h1>
              <p className="public-profile-headline">{user.headline}</p>
              <p className="public-profile-location">{user.location}</p>
            </div>
          </div>

          <p className="public-profile-bio">{user.bio}</p>

          <div className="public-profile-actions">
            <a href={`mailto:${user.email}`} className="btn-primary public-profile-action">
              Contact User
            </a>

            <Link to="/" className="glass public-profile-outline-action">
              Back Home
            </Link>
          </div>
        </section>

        <section className="public-profile-grid">
          <div className="public-profile-card glass-strong">
            <h2>Skills</h2>

            <div className="public-profile-skills">
              {user.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="public-profile-card glass-strong">
            <h2>Profile Details</h2>

            <div className="public-profile-details">
              <div>
                <small>Email</small>
                <p>{user.email}</p>
              </div>

              <div>
                <small>Profile ID</small>
                <p>{userId}</p>
              </div>

              <div>
                <small>Status</small>
                <p>{user.status}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="public-profile-card glass-strong">
          <h2>Experience</h2>

          <div className="public-profile-experience-list">
            {user.experience.map((item) => (
              <article key={item.role} className="public-profile-experience-item">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>

                <span>{item.period}</span>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default PublicUserProfilePage