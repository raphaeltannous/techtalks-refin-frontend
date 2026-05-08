import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

function JobDetailsPage() {
  const { jobId } = useParams()

  const jobs = [
    {
      id: "1",
      title: "Frontend Developer Intern",
      company: "RefIn",
      location: "Beirut, Lebanon",
      type: "Internship",
      salary: "$500 - $800",
      mode: "Hybrid",
      posted: "May 2026",
      description:
        "Build clean React interfaces, improve user experience, and collaborate with the team on modern frontend features.",

      responsibilities: [
        "Build reusable React components",
        "Improve responsive layouts",
        "Collaborate with backend developers",
        "Fix UI bugs and optimize UX",
      ],

      requirements: [
        "Knowledge of React and JavaScript",
        "Understanding of responsive design",
        "Basic Git/GitHub workflow",
        "Attention to UI details",
      ],

      skills: ["React", "JavaScript", "CSS", "Git", "UI/UX"],
    },

    {
      id: "2",
      title: "Junior Backend Developer",
      company: "TechBridge",
      location: "Remote",
      type: "Full-time",
      salary: "$1200 - $1800",
      mode: "Remote",
      posted: "April 2026",

      description:
        "Develop APIs, work with databases, and support backend services using modern backend technologies.",

      responsibilities: [
        "Build backend APIs",
        "Manage PostgreSQL databases",
        "Write scalable server code",
        "Collaborate with frontend team",
      ],

      requirements: [
        "Python experience",
        "REST API understanding",
        "Database fundamentals",
        "Problem-solving skills",
      ],

      skills: ["FastAPI", "Python", "PostgreSQL", "REST API"],
    },

    {
      id: "3",
      title: "UI/UX Designer",
      company: "Creative Labs",
      location: "Beirut, Lebanon",
      type: "Part-time",
      salary: "$700 - $1000",
      mode: "On-site",
      posted: "April 2026",

      description:
        "Design clean user experiences and modern digital interfaces for web and mobile products.",

      responsibilities: [
        "Create wireframes",
        "Design responsive screens",
        "Improve usability",
        "Collaborate with developers",
      ],

      requirements: [
        "Figma knowledge",
        "UI/UX fundamentals",
        "Creative thinking",
        "Responsive design skills",
      ],

      skills: ["Figma", "UX", "Wireframes", "Design Systems"],
    },
  ]

  const job = jobs.find((item) => item.id === jobId)

  if (!job) {
    return (
      <div className="job-details-page">
        <main className="job-details-container glass-strong">
          <h1>Job not found</h1>

          <Link to="/jobs" className="btn-primary job-details-back">
            Back to Jobs
          </Link>
        </main>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <div className="job-details-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <main className="job-details-container">
          <Link to="/jobs" className="job-details-back-link">
            ← Back to jobs
          </Link>

          <section className="job-details-hero glass-strong">
            <div className="job-details-logo">
              {job.company.charAt(0)}
            </div>

            <div>
              <p className="job-details-badge">Job Details</p>

              <h1>{job.title}</h1>

              <p className="job-details-company">
                {job.company}
              </p>
            </div>
          </section>

          <section className="job-details-grid">
            <div className="job-details-main glass-strong">
              <h2>About this role</h2>

              <p>{job.description}</p>

              <h2>Responsibilities</h2>

              <ul>
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h2>Requirements</h2>

              <ul>
                {job.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <aside className="job-details-sidebar glass-strong">
              <h2>Job Summary</h2>

              <div className="job-details-summary">
                <div>
                  <small>Location</small>
                  <span>{job.location}</span>
                </div>

                <div>
                  <small>Type</small>
                  <span>{job.type}</span>
                </div>

                <div>
                  <small>Mode</small>
                  <span>{job.mode}</span>
                </div>

                <div>
                  <small>Salary</small>
                  <span>{job.salary}</span>
                </div>

                <div>
                  <small>Posted</small>
                  <span>{job.posted}</span>
                </div>
              </div>

              <h2>Skills</h2>

              <div className="job-details-skills">
                {job.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <button className="btn-primary job-details-apply">
                Apply Now
              </button>
            </aside>
          </section>
        </main>
      </div>
    </>
  )
}

export default JobDetailsPage