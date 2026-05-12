import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "RefIn",
      location: "Beirut, Lebanon",
      type: "Internship",
      salary: "$500 - $800",
      mode: "Hybrid",
      description:
        "Build clean React interfaces, improve user experience, and collaborate with the team on modern frontend features.",
      skills: ["React", "JavaScript", "UI/UX"],
    },

    {
      id: 2,
      title: "Junior Backend Developer",
      company: "TechBridge",
      location: "Remote",
      type: "Full-time",
      salary: "$1200 - $1800",
      mode: "Remote",
      description:
        "Develop APIs, work with databases, and support backend features using modern server-side technologies.",
      skills: ["FastAPI", "PostgreSQL", "Python"],
    },

    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Labs",
      location: "Beirut, Lebanon",
      type: "Part-time",
      salary: "$700 - $1000",
      mode: "On-site",
      description:
        "Design user-friendly screens, create wireframes, and improve the visual experience of digital products.",
      skills: ["Figma", "Wireframes", "Design Systems"],
    },
  ]

  return (
    <>
      <Navbar />

      <div className="jobs-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="jobs-container">
          <section className="jobs-hero glass-strong">
            <p className="jobs-badge">Job Opportunities</p>

            <h1>Find the right job for your next step</h1>

            <p className="jobs-hero-text">
              Explore internships, full-time roles, and flexible opportunities
              designed to help candidates grow their skills and connect with
              employers.
            </p>
          </section>

          <section className="jobs-list">
            {jobs.map((job) => (
              <article key={job.id} className="jobs-card glass-strong">
                <div className="jobs-card-header">
                  <div className="jobs-company-logo">
                    {job.company.charAt(0)}
                  </div>

                  <div>
                    <h2>{job.title}</h2>
                    <p>{job.company}</p>
                  </div>
                </div>

                <p className="jobs-description">{job.description}</p>

                <div className="jobs-info-grid">
                  <div>
                    <small>Location</small>
                    <span>{job.location}</span>
                  </div>

                  <div>
                    <small>Type</small>
                    <span>{job.type}</span>
                  </div>

                  <div>
                    <small>Mode</small>
                    <span>{job.mode}</span>
                  </div>

                  <div>
                    <small>Salary</small>
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="jobs-skills">
                  {job.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="jobs-card-actions">
                  <Link
                    to={`/jobs/${job.id}/apply`}
                    className="btn-primary jobs-apply-button"
                  >
                    Apply Now
                  </Link>

                  <Link
                    to={`/jobs/${job.id}`}
                    className="glass jobs-details-button"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  )
}

export default JobsPage