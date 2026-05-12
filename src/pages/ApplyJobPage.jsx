import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

function ApplyJobPage() {
  const navigate = useNavigate()
  const { jobId } = useParams()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    experience: "",
    coverLetter: "",
  })

  const [resume, setResume] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleResumeChange = (e) => {
    setResume(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log({
      jobId,
      formData,
      resume,
    })

    // =========================
    // BACKEND INTEGRATION HERE
    // =========================

    alert("Application submitted successfully!")

    navigate("/applications")
  }

  return (
    <>
      <Navbar />

      <div className="apply-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="apply-container">
          <section className="apply-card glass-strong">
            <div className="apply-header">
              <p className="apply-badge">
                Job Application
              </p>

              <h1>Submit Your Application</h1>

              <p>
                Fill in your information and upload your
                resume to apply for this position.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="apply-form"
            >
              <div className="form-group">
                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="auth-input glass-input"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="auth-input glass-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  placeholder="+961 ..."
                  className="auth-input glass-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  University
                </label>

                <input
                  type="text"
                  name="university"
                  placeholder="LIU"
                  className="auth-input glass-input"
                  value={formData.university}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Experience
                </label>

                <input
                  type="text"
                  name="experience"
                  placeholder="2 years experience"
                  className="auth-input glass-input"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Cover Letter
                </label>

                <textarea
                  name="coverLetter"
                  placeholder="Tell us why you're a good fit..."
                  className="auth-input glass-input apply-textarea"
                  value={formData.coverLetter}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Upload Resume
                </label>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="apply-file-input"
                  onChange={handleResumeChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="auth-button btn-primary"
              >
                Submit Application
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default ApplyJobPage