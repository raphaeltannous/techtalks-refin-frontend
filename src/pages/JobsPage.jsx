import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import API from "../services/api"

function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await API.get("/job/all")

      console.log(response.data)

      setJobs(response.data.data || response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="jobs-page">
          <h1>Loading jobs...</h1>
        </div>
      </>
    )
  }

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
              Explore internships, full-time roles, and flexible opportunities.
            </p>
          </section>

          <section className="jobs-list">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="jobs-card glass-strong"
              >
                <div className="jobs-card-header">
                  <div className="jobs-company-logo">
                    {job.company_name?.charAt(0) || "J"}
                  </div>

                  <div>
                    <h2>{job.title}</h2>
                    <p>{job.company_name}</p>
                  </div>
                </div>

                <p className="jobs-description">
                  {job.description}
                </p>

                <div className="jobs-info-grid">
                  <div>
                    <small>Location</small>
                    <span>{job.location}</span>
                  </div>

                  <div>
                    <small>Type</small>
                    <span>{job.job_type}</span>
                  </div>

                  <div>
                    <small>Salary</small>
                    <span>{job.salary || "Not specified"}</span>
                  </div>
                </div>

                <div className="jobs-card-actions">
                  <button
                    className="btn-primary jobs-apply-button"
                    onClick={() => navigate(`/apply/${job.id}`)}
                  >
                    Apply Now
                  </button>

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