import Navbar from "../components/Navbar"

function DashboardUserManagementPage() {
  const users = [
    {
      id: 1,
      name: "Hussein Zeidan",
      email: "hussein@example.com",
      role: "Job Seeker",
      status: "Active",
      joined: "May 2026",
    },
    {
      id: 2,
      name: "Maya Khoury",
      email: "maya@company.com",
      role: "Employer",
      status: "Active",
      joined: "April 2026",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@refin.com",
      role: "Admin",
      status: "Active",
      joined: "March 2026",
    },
    {
      id: 4,
      name: "Karim Haddad",
      email: "karim@example.com",
      role: "Job Seeker",
      status: "Suspended",
      joined: "February 2026",
    },
  ]

  const getRoleClass = (role) => {
    if (role === "Admin") return "dashboard-users-role-admin"
    if (role === "Employer") return "dashboard-users-role-employer"
    return "dashboard-users-role-seeker"
  }

  const getStatusClass = (status) => {
    if (status === "Active") return "dashboard-users-status-active"
    return "dashboard-users-status-suspended"
  }

  return (
    <>
      <Navbar />

      <div className="dashboard-users-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="dashboard-users-container">
          <section className="dashboard-users-header glass-strong">
            <div>
              <p className="dashboard-users-badge">Admin Dashboard</p>

              <h1>User management</h1>

              <p>
                Manage platform users, review account roles, and monitor user
                account status from one organized dashboard.
              </p>
            </div>

            <button className="btn-primary dashboard-users-button">
              Add User
            </button>
          </section>

          <section className="dashboard-users-stats">
            <div className="dashboard-users-stat glass-strong">
              <span>{users.length}</span>
              <p>Total Users</p>
            </div>

            <div className="dashboard-users-stat glass-strong">
              <span>2</span>
              <p>Job Seekers</p>
            </div>

            <div className="dashboard-users-stat glass-strong">
              <span>1</span>
              <p>Employers</p>
            </div>

            <div className="dashboard-users-stat glass-strong">
              <span>1</span>
              <p>Suspended</p>
            </div>
          </section>

          <section className="dashboard-users-card glass-strong">
            <div className="dashboard-users-card-header">
              <div>
                <h2>Platform users</h2>
                <p>View and manage registered users.</p>
              </div>

              <input
                type="text"
                placeholder="Search users..."
                className="dashboard-users-search"
              />
            </div>

            <div className="dashboard-users-table">
              <div className="dashboard-users-row dashboard-users-table-head">
                <span>User</span>
                <span>Role</span>
                <span>Status</span>
                <span>Joined</span>
                <span>Actions</span>
              </div>

              {users.map((user) => (
                <div key={user.id} className="dashboard-users-row">
                  <div className="dashboard-users-profile">
                    <div className="dashboard-users-avatar">
                      {user.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>

                    <div>
                      <strong>{user.name}</strong>
                      <small>{user.email}</small>
                    </div>
                  </div>

                  <span
                    className={`dashboard-users-pill ${getRoleClass(user.role)}`}
                  >
                    {user.role}
                  </span>

                  <span
                    className={`dashboard-users-pill ${getStatusClass(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>

                  <span className="dashboard-users-date">{user.joined}</span>

                  <div className="dashboard-users-actions">
                    <button className="glass">View</button>
                    <button className="glass">Edit</button>
                    <button className="glass dashboard-users-danger">
                      Suspend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default DashboardUserManagementPage