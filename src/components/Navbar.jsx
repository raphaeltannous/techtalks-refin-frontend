import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar glass">
      <div className="navbar-inner">
        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">
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
          <span className="navbar-brand-text">RefIn</span>
        </Link>

        {/* Links */}
        <div className="navbar-links">
          <Link
            to="/jobs"
            className={`navbar-link ${isActive("/jobs") ? "navbar-link-active" : ""}`}
          >
            Jobs
          </Link>

          <Link
            to="/dashboard"
            className={`navbar-link ${
              isActive("/dashboard") ? "navbar-link-active" : ""
            }`}
          >
            Dashboard
          </Link>

          <Link
            to="/profile"
            className={`navbar-link ${isActive("/profile") ? "navbar-link-active" : ""}`}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar