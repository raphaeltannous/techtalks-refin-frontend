import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignupPage() {
  const [step, setStep] = useState(1)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleGoogleSignup = () => {
    // Google OAuth — wire this up when backend is ready
    window.location.href = "http://localhost:8000/auth/google"
  }

  const validateStep1 = () => {
    if (!fullName.trim()) return "Please enter your full name"
    if (!email.trim()) return "Please enter your email"
    if (!email.includes("@")) return "Please enter a valid email"
    if (!password) return "Please enter a password"
    if (password.length < 8) return "Password must be at least 8 characters"
    if (password !== confirmPassword) return "Passwords do not match"
    return null
  }

  const handleNext = () => {
    const err = validateStep1()
    if (err) { setError(err); return }
    setError("")
    setStep(2)
  }

  const handleSignup = async () => {
    if (!role) { setError("Please select how you want to use the platform"); return }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name: fullName, email, password, role }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.detail || "Something went wrong")
        return
      }

      localStorage.setItem("token", data.token)
      navigate("/jobs")

    } catch (err) {
      setError("Something went wrong. Is the backend running?")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-md p-8">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Create account</h1>
          <p className="text-gray-500 text-sm mt-1">
            Find your next opportunity
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 1 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          <div className={`h-1.5 flex-1 rounded-full transition-all ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-4">

            {/* Google signup button */}
            <button
              onClick={handleGoogleSignup}
              className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                <path fill="none" d="M0 0h48v48H0z"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">or sign up with email</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Full name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Confirm password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Confirm password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                {error}
              </p>
            )}

            {/* Next button */}
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition cursor-pointer mt-1"
            >
              Continue
            </button>

            {/* Login link */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline font-medium">
                Log in
              </a>
            </p>

          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4">

            <p className="text-sm text-gray-600 mb-2">
              How will you be using the platform?
            </p>

            {/* Role selection cards */}
            <div
              onClick={() => setRole("seeker")}
              className={`border-2 rounded-xl p-4 cursor-pointer transition ${
                role === "seeker"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium text-gray-900 text-sm">
                I'm looking for a job
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Browse listings and apply to opportunities
              </div>
            </div>

            <div
              onClick={() => setRole("employer")}
              className={`border-2 rounded-xl p-4 cursor-pointer transition ${
                role === "employer"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="font-medium text-gray-900 text-sm">
                I'm hiring
              </div>
              <div className="text-gray-500 text-xs mt-1">
                Post jobs and find candidates
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                {error}
              </p>
            )}

            <div className="flex gap-3 mt-1">
              {/* Back button */}
              <button
                onClick={() => { setStep(1); setError("") }}
                className="flex-1 border border-gray-300 text-gray-700 font-medium py-2.5 rounded-lg text-sm hover:bg-gray-50 transition cursor-pointer"
              >
                Back
              </button>

              {/* Submit button */}
              <button
                onClick={handleSignup}
                disabled={loading}
                className="flex-2 flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2.5 rounded-lg text-sm transition cursor-pointer"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}

export default SignupPage