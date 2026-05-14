import { useEffect, useState } from "react"

import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom"

import Navbar from "../components/Navbar"

import API from "../services/api"

function JobDetailsPage() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [job, setJob] = useState(null)

  useEffect(() => {
    fetchJob()
  }, [])

  const fetchJob = async () => {
    try {
      const response =
        await API.get(`/job/${id}`)

      setJob(
        response.data.data ||
          response.data
      )
    } catch (error) {
      console.log(error)
    }
  }

  if (!job) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Navbar />

      <div className="job-details-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <div className="job-details-container">
          <Link
            to="/jobs"
            className="job-details-back-link"
          >
            ← Back to jobs
          </Link>

          <section className="job-details-hero glass-strong">
            <div className="job-details-logo">
              {job.company_name?.charAt(
                0
              ) || "J"}
            </div>

            <div>
              <p className="job-details-badge">
                {job.job_type}
              </p>

              <h1>{job.title}</h1>

              <p className="job-details-company">
                {job.company_name}
              </p>
            </div>
          </section>

          <div className="job-details-grid">
            <section className="job-details-main glass-strong profile-section">
              <h2>Description</h2>

              <p>{job.description}</p>
            </section>

            <section className="job-details-sidebar glass-strong profile-section">
              <h2>Overview</h2>

              <div className="job-details-summary">
                <div>
                  <small>
                    Location
                  </small>

                  <span>
                    {job.location}
                  </span>
                </div>

                <div>
                  <small>Type</small>

                  <span>
                    {job.job_type}
                  </span>
                </div>

                <div>
                  <small>
                    Salary
                  </small>

                  <span>
                    {job.salary ||
                      "Not specified"}
                  </span>
                </div>
              </div>

              <button
                className="btn-primary job-details-apply"
                onClick={() =>
                  navigate(
                    `/apply/${job.id}`
                  )
                }
              >
                Apply Now
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobDetailsPage