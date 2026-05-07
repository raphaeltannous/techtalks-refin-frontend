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
          <section className="applications-header glass-strong">
            <div>
              <p className="applications-badge">My Applications</p>
              <h1>Track your job applications</h1>
              <p>
                View your submitted applications, follow their progress, and
                stay updated on your next career opportunities.
              </p>
            </div>

            <div className="applications-summary">
              <div>
                <span>{applications.length}</span>
                <p>Total Applications</p>
              </div>

              <div>
                <span>1</span>
                <p>Interviews</p>
              </div>

              <div>
                <span>1</span>
                <p>Accepted</p>
              </div>
            </div>
          </section>

          <section className="applications-list">
            {applications.map((application) => (
              <article key={application.id} className="applications-card glass-strong">
                <div className="applications-card-main">
                  <div className="applications-icon">
                    {application.company.charAt(0)}
                  </div>

                  <div>
                    <h2>{application.jobTitle}</h2>
                    <p>{application.company}</p>
                  </div>
                </div>

                <div className="applications-meta">
                  <div>
                    <small>Location</small>
                    <span>{application.location}</span>
                  </div>

                  <div>
                    <small>Type</small>
                    <span>{application.type}</span>
                  </div>

                  <div>
                    <small>Applied</small>
                    <span>{application.appliedDate}</span>
                  </div>

                  <div>
                    <small>Status</small>
                    <span className={`applications-status ${application.statusClass}`}>
                      {application.status}
                    </span>
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