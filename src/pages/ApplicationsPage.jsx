import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import API from "../services/api"

function ApplicationsPage() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      const response = await API.get(
        "/job/application/my-applications"
      )

      console.log(response.data)

      setApplications(response.data.data || response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const acceptedCount = applications.filter(
    (app) => app.status === "accepted"
  ).length

  const interviewCount = applications.filter(
    (app) => app.status === "interview"
  ).length

  if (loading) {
    return (
      <>
        <Navbar />
        <h1>Loading...</h1>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="applications-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="applications-container">
          <section className="applications-header glass-strong">
            <div>
              <p className="applications-badge">
                My Applications
              </p>

              <h1>
                Track your job applications
              </h1>

              <p>
                View your submitted applications
                and follow their progress.
              </p>
            </div>

            <div className="applications-summary">
              <div>
                <span>{applications.length}</span>
                <p>Total Applications</p>
              </div>

              <div>
                <span>{interviewCount}</span>
                <p>Interviews</p>
              </div>

              <div>
                <span>{acceptedCount}</span>
                <p>Accepted</p>
              </div>
            </div>
          </section>

          <section className="applications-list">
            {applications.map((application) => (
              <article
                key={application.id}
                className="applications-card glass-strong"
              >
                <div className="applications-card-main">
                  <div className="applications-icon">
                    {application.job_title?.charAt(0) || "J"}
                  </div>

                  <div>
                    <h2>
                      {application.job_title}
                    </h2>

                    <p>
                      {application.company_name}
                    </p>
                  </div>
                </div>

                <div className="applications-meta">
                  <div>
                    <small>Status</small>

                    <span className="applications-status applications-status-review">
                      {application.status}
                    </span>
                  </div>

                  <div>
                    <small>Applied At</small>

                    <span>
                      {application.created_at}
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