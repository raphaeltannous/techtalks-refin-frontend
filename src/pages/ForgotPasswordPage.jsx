import { useState } from "react"
import { Link } from "react-router-dom"

function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleForgotPassword = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError("Please enter your email")
      return
    }

    setLoading(true)
    setError("")
    setSuccess("")

    try {

      // =====================================================
      // BACKEND TEAM:
      // Replace request body if backend expects different fields
      // =====================================================

      const response = await fetch("http://localhost:8000/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // =====================================================
        // BACKEND TEAM:
        // Confirm exact request body
        // Example:
        // { email }
        // =====================================================

        body: JSON.stringify({
          email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {

        // =====================================================
        // BACKEND TEAM:
        // Confirm exact error response structure
        // =====================================================

        setError(data.detail || "Something went wrong")
        return
      }

      // =====================================================
      // BACKEND TEAM:
      // Confirm exact success response
      // =====================================================

      setSuccess(
        "If an account exists with this email, reset instructions have been sent."
      )

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
            Forgot password
          </h1>

          <p className="auth-subtitle">
            Enter your email and we'll help you reset your password.
          </p>
        </div>

        {/* Form */}
        <form
          className="auth-form"
          onSubmit={handleForgotPassword}
        >

          {/* Email */}
          <div className="form-group">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            {loading ? "Sending..." : "Send reset instructions"}
          </button>

          {/* Back to login */}
          <p className="auth-footer-text">
            Remember your password?{" "}
            <Link to="/login" className="auth-link">
              Log in
            </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage