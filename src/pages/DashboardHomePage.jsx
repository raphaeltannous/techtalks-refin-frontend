import Navbar from "../components/Navbar"

function DashboardHomePage() {
  const stats = [
    { label: "Applications", value: "12" },
    { label: "Interviews", value: "3" },
    { label: "Saved Jobs", value: "8" },
    { label: "Profile Views", value: "24" },
  ]

  const activities = [
    "Your application for Frontend Developer Intern is under review.",
    "You saved Junior Backend Developer to your job list.",
    "Your profile was viewed by TechBridge.",
  ]

  return (
    <>
      <Navbar />

      <div className="dashboard-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="dashboard-container">
          <section className="dashboard-hero glass-strong">
            <p className="dashboard-badge">Dashboard</p>

            <h1>Welcome back, Hussein</h1>

            <p>
              Track your job applications, follow your progress, and manage your
              opportunities from one clean workspace.
            </p>
          </section>

          <section className="dashboard-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="dashboard-stat-card glass-strong">
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="dashboard-grid">
            <div className="dashboard-card glass-strong">
              <h2>Recent Activity</h2>

              <div className="dashboard-activity-list">
                {activities.map((activity) => (
                  <div key={activity} className="dashboard-activity-item">
                    <div className="dashboard-dot" />
                    <p>{activity}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-card glass-strong">
              <h2>Quick Actions</h2>

              <div className="dashboard-actions">
                <button className="btn-primary dashboard-action-button">
                  Browse Jobs
                </button>

                <button className="glass dashboard-outline-button">
                  View Applications
                </button>

                <button className="glass dashboard-outline-button">
                  Edit Profile
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default DashboardHomePage