import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

// Small trash icon for delete buttons
function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 6l-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ProfilePage() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      setError("")

      const token = localStorage.getItem("token")

      // BACKEND TEAM: I need an endpoint for current logged-in user profile
      // Example:
      // GET /profile/me
      // Headers:
      // Authorization: Bearer <token>
      //
      // I also need to know if full_name comes from this endpoint
      // or from another endpoint like GET /auth/me

      const response = await fetch("http://localhost:8000/profile/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.detail || "Failed to load profile")
        return
      }

      // BACKEND TEAM: Please confirm exact response shape.
      // Right now frontend expects something like:
      // {
      //   full_name: "",
      //   profile_picture: "",
      //   profile_banner: "",
      //   headline: "",
      //   about: "",
      //   location: "",
      //   experience: [],
      //   certifications: [],
      //   skills: []
      // }

      setProfile({
        fullName: data.full_name || "",
        profileImage: data.profile_picture || "",
        coverImage: data.profile_banner || "",
        headline: data.headline || "",
        about: data.about || "",
        location: data.location || "",
        experience: data.experience || [],
        certifications: data.certifications || [],
        skills: data.skills || [],
      })
    } catch {
      setError("Something went wrong while loading profile")
    } finally {
      setLoading(false)
    }
  }

  const handleSaveProfile = async () => {
    try {
      setSaving(true)
      setError("")

      const token = localStorage.getItem("token")

      // BACKEND TEAM: I need an endpoint to save the full profile
      // Example:
      // PUT /profile/me
      //
      // Request body the frontend will send:
      // {
      //   full_name,
      //   profile_picture,
      //   profile_banner,
      //   headline,
      //   about,
      //   location,
      //   experience,
      //   certifications,
      //   skills
      // }
      //
      // Please confirm exact field names and whether experience /
      // certifications / skills are accepted in this same request.

      const response = await fetch("http://localhost:8000/profile/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          full_name: profile.fullName,
          profile_picture: profile.profileImage,
          profile_banner: profile.coverImage,
          headline: profile.headline,
          about: profile.about,
          location: profile.location,
          experience: profile.experience.map((item) => ({
            id: item.id,
            role: item.role,
            company: item.company,
            period: item.period,
            description: item.description,
          })),
          certifications: profile.certifications.map((item) => ({
            id: item.id,
            name: item.name,
            issuer: item.issuer,
            year: item.year,
            url: item.url || "",
          })),
          skills: profile.skills.filter((skill) => skill.trim() !== ""),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.detail || "Failed to save profile")
        return
      }

      setProfile({
        fullName: data.full_name || "",
        profileImage: data.profile_picture || "",
        coverImage: data.profile_banner || "",
        headline: data.headline || "",
        about: data.about || "",
        location: data.location || "",
        experience: data.experience || [],
        certifications: data.certifications || [],
        skills: data.skills || [],
      })

      setIsEditing(false)
    } catch {
      setError("Something went wrong while saving profile")
    } finally {
      setSaving(false)
    }
  }

  const handleBasicChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleExperienceChange = (id, field, value) => {
    setProfile((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }))
  }

  const addExperience = () => {
    setProfile((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          role: "",
          company: "",
          period: "",
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id) => {
    setProfile((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }))
  }

  const handleCertificationChange = (id, field, value) => {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }))
  }

  const addCertification = () => {
    setProfile((prev) => ({
      ...prev,
      certifications: [
        ...prev.certifications,
        {
          id: Date.now(),
          name: "",
          issuer: "",
          year: "",
          url: "",
        },
      ],
    }))
  }

  const removeCertification = (id) => {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((item) => item.id !== id),
    }))
  }

  const handleSkillChange = (index, value) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }))
  }

  const addSkill = () => {
    setProfile((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }))
  }

  const removeSkill = (index) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  if (loading) {
    return (
      <div className="profile-page">
        <Navbar />
        <div className="profile-wrapper">
          <div className="profile-section glass">Loading profile...</div>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="profile-page">
        <Navbar />
        <div className="profile-wrapper">
          <div className="profile-section glass">
            {error || "Could not load profile"}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <Navbar />

      <div className="profile-wrapper">
        {error && <div className="auth-error">{error}</div>}

        <div className="profile-header-card glass-strong">
          <div
            className="profile-cover"
            style={{ backgroundImage: `url(${profile.coverImage})` }}
          >
            {isEditing && (
              <div className="profile-cover-edit">
                <label className="form-label">Cover image URL</label>
                <input
                  type="text"
                  value={profile.coverImage}
                  onChange={(e) => handleBasicChange("coverImage", e.target.value)}
                  className="glass-input auth-input"
                  placeholder="Paste cover image URL"
                />
              </div>
            )}
          </div>

          <div className="profile-main-info">
            <div className="profile-avatar-wrap">
              <img src={profile.profileImage} alt="Profile" className="profile-avatar" />
            </div>

            <div className="profile-top-row">
              <div className="profile-top-left">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={profile.fullName}
                      onChange={(e) => handleBasicChange("fullName", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Full name"
                    />

                    <input
                      type="text"
                      value={profile.headline}
                      onChange={(e) => handleBasicChange("headline", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Headline / what you do"
                    />

                    <input
                      type="text"
                      value={profile.profileImage}
                      onChange={(e) => handleBasicChange("profileImage", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Paste profile image URL"
                    />

                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => handleBasicChange("location", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Location"
                    />

                    <textarea
                      value={profile.about}
                      onChange={(e) => handleBasicChange("about", e.target.value)}
                      className="glass-input auth-input profile-textarea"
                      placeholder="About"
                    />
                  </>
                ) : (
                  <>
                    <h1 className="profile-name">{profile.fullName}</h1>
                    <p className="profile-title">{profile.headline}</p>
                    {profile.location && <p className="profile-location">{profile.location}</p>}
                    {profile.about && <p className="profile-about">{profile.about}</p>}
                  </>
                )}
              </div>

              <button
                className="btn-primary profile-edit-button"
                onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
                disabled={saving}
                type="button"
              >
                {saving ? "Saving..." : isEditing ? "Save" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>

        <section className="profile-section glass">
          <div className="profile-section-header">
            <h2 className="profile-section-title">Experience</h2>
            {isEditing && (
              <button className="profile-add-button" onClick={addExperience} type="button">
                + Add Experience
              </button>
            )}
          </div>

          <div className="profile-list">
            {profile.experience.map((item) => (
              <div key={item.id} className="profile-item">
                {isEditing ? (
                  <div className="profile-item-edit">
                    <div className="profile-item-edit-header">
                      <button
                        className="profile-icon-button"
                        onClick={() => removeExperience(item.id)}
                        type="button"
                        title="Delete experience"
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => handleExperienceChange(item.id, "role", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Role"
                    />
                    <input
                      type="text"
                      value={item.company}
                      onChange={(e) => handleExperienceChange(item.id, "company", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Company"
                    />
                    <input
                      type="text"
                      value={item.period}
                      onChange={(e) => handleExperienceChange(item.id, "period", e.target.value)}
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Period"
                    />
                    <textarea
                      value={item.description}
                      onChange={(e) =>
                        handleExperienceChange(item.id, "description", e.target.value)
                      }
                      className="glass-input auth-input profile-textarea"
                      placeholder="Description"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="profile-item-title">{item.role}</h3>
                    <p className="profile-item-subtitle">
                      {item.company} • {item.period}
                    </p>
                    <p className="profile-item-text">{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="profile-section glass">
          <div className="profile-section-header">
            <h2 className="profile-section-title">Certifications</h2>
            {isEditing && (
              <button className="profile-add-button" onClick={addCertification} type="button">
                + Add Certification
              </button>
            )}
          </div>

          <div className="profile-list">
            {profile.certifications.map((item) => (
              <div key={item.id} className="profile-item">
                {isEditing ? (
                  <div className="profile-item-edit">
                    <div className="profile-item-edit-header">
                      <button
                        className="profile-icon-button"
                        onClick={() => removeCertification(item.id)}
                        type="button"
                        title="Delete certification"
                      >
                        <TrashIcon />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        handleCertificationChange(item.id, "name", e.target.value)
                      }
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Certification name"
                    />
                    <input
                      type="text"
                      value={item.issuer}
                      onChange={(e) =>
                        handleCertificationChange(item.id, "issuer", e.target.value)
                      }
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Issuer"
                    />
                    <input
                      type="text"
                      value={item.year}
                      onChange={(e) =>
                        handleCertificationChange(item.id, "year", e.target.value)
                      }
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Year"
                    />
                    <input
                      type="url"
                      value={item.url || ""}
                      onChange={(e) =>
                        handleCertificationChange(item.id, "url", e.target.value)
                      }
                      className="glass-input auth-input profile-edit-input"
                      placeholder="Certification URL (optional)"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="profile-item-title">{item.name}</h3>
                    <p className="profile-item-subtitle">
                      {item.issuer} • {item.year}
                    </p>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="profile-cert-link"
                      >
                        View certificate
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="profile-section glass">
          <div className="profile-section-header">
            <h2 className="profile-section-title">Skills</h2>
            {isEditing && (
              <button className="profile-add-button" onClick={addSkill} type="button">
                + Add Skill
              </button>
            )}
          </div>

          {isEditing ? (
            <div className="profile-skills-edit">
              {profile.skills.map((skill, index) => (
                <div key={index} className="profile-skill-edit-row">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="glass-input auth-input"
                    placeholder="Skill"
                  />
                  <button
                    className="profile-icon-button"
                    onClick={() => removeSkill(index)}
                    type="button"
                    title="Delete skill"
                  >
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="profile-skills">
              {profile.skills.map((skill, index) => (
                <span key={index} className="profile-skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default ProfilePage