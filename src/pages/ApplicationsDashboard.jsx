import { useState } from "react"

function ApplicationsDashboard() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      applicantName: "Hussein Zeidan",
      jobTitle: "Frontend Developer",
      email: "hussein@example.com",
      status: "Pending",
      appliedDate: "2026-05-13",
    },
    {
      id: 2,
      applicantName: "Sara Khaled",
      jobTitle: "UI/UX Designer",
      email: "sara@example.com",
      status: "Accepted",
      appliedDate: "2026-05-12",
    },
    {
      id: 3,
      applicantName: "Ali Ahmad",
      jobTitle: "Backend Developer",
      email: "ali@example.com",
      status: "Rejected",
      appliedDate: "2026-05-10",
    },
  ])

  const updateApplicationStatus = (id, newStatus) => {
    setApplications(
      applications.map((application) =>
        application.id === id
          ? { ...application, status: newStatus }
          : application
      )
    )
  }

  const totalApplications = applications.length
  const pendingApplications = applications.filter(
    (application) => application.status === "Pending"
  ).length
  const acceptedApplications = applications.filter(
    (application) => application.status === "Accepted"
  ).length
  const rejectedApplications = applications.filter(
    (application) => application.status === "Rejected"
  ).length

  return (
    <main className="applications-dashboard-page">
      <section className="applications-dashboard-header">
        <div>
          <p className="dashboard-subtitle">Applications Management</p>
          <h1>Job Applications Dashboard</h1>
          <p className="dashboard-description">
            Manage applicants, track application statuses, and review hiring
            progress from one organized dashboard.
          </p>
        </div>
      </section>

      <section className="applications-stats-grid">
        <div className="application-stat-card">
          <span>Total Applications</span>
          <h2>{totalApplications}</h2>
        </div>

        <div className="application-stat-card">
          <span>Pending</span>
          <h2>{pendingApplications}</h2>
        </div>

        <div className="application-stat-card">
          <span>Accepted</span>
          <h2>{acceptedApplications}</h2>
        </div>

        <div className="application-stat-card">
          <span>Rejected</span>
          <h2>{rejectedApplications}</h2>
        </div>
      </section>

      <section className="applications-table-card">
        <div className="applications-table-header">
          <div>
            <h2>Recent Applications</h2>
            <p>Review and manage submitted job applications.</p>
          </div>
        </div>

        <div className="applications-table-wrapper">
          <table className="applications-table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Email</th>
                <th>Job Position</th>
                <th>Status</th>
                <th>Applied Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.applicantName}</td>
                  <td>{application.email}</td>
                  <td>{application.jobTitle}</td>
                  <td>
                    <span
                      className={`status-badge ${application.status.toLowerCase()}`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td>{application.appliedDate}</td>
                  <td>
                    <div className="application-actions">
                      <button
                        className="accept-btn"
                        onClick={() =>
                          updateApplicationStatus(application.id, "Accepted")
                        }
                      >
                        Accept
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() =>
                          updateApplicationStatus(application.id, "Rejected")
                        }
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default ApplicationsDashboard