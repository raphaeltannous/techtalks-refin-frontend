import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

function DashboardUserProfileManagementPage() {
  const { userId } = useParams()

  const user = {
    id: userId || "1",
    name: "Hussein Zeidan",
    email: "hussein@example.com",
    phone: "+961 70 000 000",
    location: "Beirut, Lebanon",
    role: "Job Seeker",
    status: "Active",
    joined: "May 2026",
    bio: "Computer science student focused on frontend development, UI/UX, and building clean web applications.",
    skills: ["React", "JavaScript", "UI/UX", "Git", "FastAPI"],
  }

  return (
    <>
      <Navbar />

      <div className="dashboard-profile-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="dashboard-profile-container">
          <Link to="/dashboard/users" className="dashboard-profile-back">
            ← Back to users
          </Link>

          <section className="dashboard-profile-hero glass-strong">
            <div className="dashboard-profile-avatar">
              {user.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>

            <div>
              <p className="dashboard-profile-badge">User Profile Management</p>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </section>

          <section className="dashboard-profile-grid">
            <div className="dashboard-profile-card glass-strong">
              <h2>Profile Information</h2>

              <div className="dashboard-profile-form">
                <div>
                  <label>Full Name</label>
                  <input type="text" value={user.name} readOnly />
                </div>

                <div>
                  <label>Email</label>
                  <input type="email" value={user.email} readOnly />
                </div>

                <div>
                  <label>Phone</label>
                  <input type="text" value={user.phone} readOnly />
                </div>

                <div>
                  <label>Location</label>
                  <input type="text" value={user.location} readOnly />
                </div>

                <div className="dashboard-profile-full">
                  <label>Bio</label>
                  <textarea value={user.bio} readOnly rows="4" />
                </div>
              </div>
            </div>

            <aside className="dashboard-profile-card glass-strong">
              <h2>Admin Controls</h2>

              <div className="dashboard-profile-controls">
                <div>
                  <small>User ID</small>
                  <span>{user.id}</span>
                </div>

                <div>
                  <small>Role</small>
                  <span>{user.role}</span>
                </div>

                <div>
                  <small>Status</small>
                  <span className="dashboard-profile-active">{user.status}</span>
                </div>

                <div>
                  <small>Joined</small>
                  <span>{user.joined}</span>
                </div>
              </div>

              <div className="dashboard-profile-actions">
                <button className="btn-primary">Save Changes</button>
                <button className="glass dashboard-profile-outline">
                  Change Role
                </button>
                <button className="glass dashboard-profile-danger">
                  Suspend User
                </button>
              </div>
            </aside>
          </section>

          <section className="dashboard-profile-card glass-strong">
            <h2>Skills</h2>

            <div className="dashboard-profile-skills">
              {user.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default DashboardUserProfileManagementPage