import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { resetPassword } from "../services/authService"

function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    setError("")
    setSuccess("")

    await resetPassword(
      token,
      password,
      confirmPassword
    )

    setSuccess("Password updated successfully")

    setTimeout(() => {
      navigate("/login")
    }, 2000)
  } catch (error) {
    setError(
      error.response?.data?.detail ||
      "Reset failed"
    )
  }
}

  return (
    <div className="auth-page">

      {/* Decorative background circles */}
      <div className="background-circle background-circle-top" />
      <div className="background-circle background-circle-bottom" />

      <div className="auth-card glass-strong">

        {/* Logo */}
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="auth-logo-text">
            RefIn
          </span>
        </div>

        {/* Header */}
        <div className="auth-header">
          <h1 className="auth-title">
            Reset password
          </h1>

          <p className="auth-subtitle">
            Enter your new password below.
          </p>
        </div>

        {/* Form */}
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Password */}
          <div className="form-group">
            <label className="form-label">
              New password
            </label>

            <input
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="glass-input auth-input"
            />
          </div>

          {/* Confirm password */}
          <div className="form-group">
            <label className="form-label">
              Confirm password
            </label>

            <input
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="glass-input auth-input"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="auth-success">
              {success}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary auth-button"
          >
            {loading ? "Resetting..." : "Reset password"}
          </button>

          {/* Back to login */}
          <p className="auth-footer-text">
            Back to{" "}
            <Link to="/login" className="auth-link">
              login
            </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage