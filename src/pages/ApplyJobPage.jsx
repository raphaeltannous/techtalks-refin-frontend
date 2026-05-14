import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import API from "../services/api"

function ApplyJobPage() {
  const { id } = useParams()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    cover_letter: "",
  })

  const [resume, setResume] = useState(null)

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")
    setSuccess("")

    try {
      const data = new FormData()

      data.append("full_name", formData.full_name)
      data.append("email", formData.email)
      data.append("phone", formData.phone)
      data.append("cover_letter", formData.cover_letter)

      if (resume) {
        data.append("resume", resume)
      }

      await API.post(`/job/application/by-job/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      setSuccess("Application submitted successfully!")

      setTimeout(() => {
        navigate("/applications")
      }, 1500)
    } catch (err) {
      console.log(err)
      setError("Failed to submit application")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <div className="auth-card glass-strong">
          <div className="auth-header">
            <h1 className="auth-title">Apply For Job</h1>

            <p className="auth-subtitle">
              Complete your application below.
            </p>
          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                className="auth-input glass-input"
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                name="email"
                className="auth-input glass-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                className="auth-input glass-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Cover Letter
              </label>

              <textarea
                name="cover_letter"
                className="auth-input glass-input"
                rows="5"
                value={formData.cover_letter}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Resume
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
                required
              />
            </div>

            {success && (
              <div className="auth-success">
                {success}
              </div>
            )}

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="auth-button btn-primary"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ApplyJobPage