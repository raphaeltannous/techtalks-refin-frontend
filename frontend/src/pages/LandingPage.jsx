import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="landing-page">
      <div className="landing-bg-circle landing-bg-circle-top" />
      <div className="landing-bg-circle landing-bg-circle-bottom" />

      <main className="landing-hero glass-strong">
        <div className="landing-badge">Welcome to RefIn</div>

        <h1 className="landing-title">
          Find jobs, build your future, and access new opportunities
        </h1>

        <p className="landing-description">
          RefIn is a platform designed to help refugees and displaced people
          discover job opportunities, connect with employers, and take the next
          step toward a better future.
        </p>

        <div className="landing-actions">
          <Link to="/jobs" className="btn-primary landing-primary-button">
            Browse Jobs
          </Link>

          <Link to="/signup" className="glass landing-secondary-button">
            Create Account
          </Link>
        </div>
      </main>
    </div>
    </>
  )
}

export default LandingPage