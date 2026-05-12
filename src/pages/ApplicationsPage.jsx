import Navbar from "../components/Navbar"

function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      jobTitle: "Frontend Developer Intern",
      company: "RefIn",
      location: "Beirut, Lebanon",
      type: "Internship",
      appliedDate: "May 2026",
      status: "Under Review",
      statusClass: "applications-status-review",
    },
    {
      id: 2,
      jobTitle: "Junior React Developer",
      company: "TechBridge",
      location: "Remote",
      type: "Full-time",
      appliedDate: "April 2026",
      status: "Interview",
      statusClass: "applications-status-interview",
    },
    {
      id: 3,
      jobTitle: "UI/UX Assistant",
      company: "Creative Labs",
      location: "Hybrid",
      type: "Part-time",
      appliedDate: "April 2026",
      status: "Accepted",
      statusClass: "applications-status-accepted",
    },
  ]

  return (
    <>
      <Navbar />

      <div className="applications-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="applications-container">
          {/* HERO */}
          <section className="applications-header glass-strong">
            <div className="applications-header-content">
              <div>
                <p className="applications-badge">My Applications</p>

                <h1>Track Your Applications</h1>

                <p className="applications-description">
                  Follow your application progress, monitor interviews,
                  and stay updated with your career opportunities.
                </p>
              </div>

              <div className="applications-summary">
                <div className="applications-summary-card">
                  <span>{applications.length}</span>
                  <p>Total Applications</p>
                </div>

                <div className="applications-summary-card">
                  <span>1</span>
                  <p>Interviews</p>
                </div>

                <div className="applications-summary-card">
                  <span>1</span>
                  <p>Accepted</p>
                </div>
              </div>
            </div>
          </section>

          {/* APPLICATIONS */}
          <section className="applications-list">
            {applications.map((application) => (
              <article
                key={application.id}
                className="applications-card glass"
              >
                <div className="applications-card-top">
                  <div className="applications-icon">
                    {application.company.charAt(0)}
                  </div>

                  <div className="applications-job-info">
                    <h2>{application.jobTitle}</h2>

                    <p>{application.company}</p>
                  </div>

                  <span
                    className={`applications-status ${application.statusClass}`}
                  >
                    {application.status}
                  </span>
                </div>

                <div className="applications-meta-grid">
                  <div className="applications-meta-item">
                    <small>Location</small>
                    <span>{application.location}</span>
                  </div>

                  <div className="applications-meta-item">
                    <small>Type</small>
                    <span>{application.type}</span>
                  </div>

                  <div className="applications-meta-item">
                    <small>Applied</small>
                    <span>{application.appliedDate}</span>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </>
  )
}

export default ApplicationsPage