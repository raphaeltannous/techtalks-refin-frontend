import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (!password) {
      setError("Please enter a new password")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    if (!confirmPassword) {
      setError("Please confirm your password")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)
    setError("")
    setSuccess("")

    try {

      // =====================================================
      // BACKEND TEAM:
      // Replace request body depending on backend implementation
      // =====================================================

      const response = await fetch("http://localhost:8000/password-reset", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        // =====================================================
        // BACKEND TEAM:
        // Replace with actual backend body
        //
        // EXAMPLES:
        //
        // { token, new_password: password }
        //
        // OR
        //
        // { email, code, new_password: password }
        // =====================================================

        body: JSON.stringify({
          new_password: password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {

        // =====================================================
        // BACKEND TEAM:
        // Confirm exact backend error response
        // =====================================================

        setError(data.detail || "Something went wrong")
        return
      }

      setSuccess("Password reset successfully")

      setTimeout(() => {
        navigate("/login")
      }, 1500)

    } catch (err) {
      setError("Server connection failed")
    } finally {
      setLoading(false)
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
          onSubmit={handleResetPassword}
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