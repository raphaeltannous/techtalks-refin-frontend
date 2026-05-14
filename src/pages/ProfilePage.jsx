import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

import {
  getProfileByUsername,
  updateProfile,
  getSkills,
  addSkill,
  deleteSkill,
  getExperiences,
  addExperience,
  deleteExperience,
  getEducations,
  addEducation,
  deleteEducation,
  uploadProfilePicture,
  uploadBanner,
} from "../services/profileService"

function ProfilePage() {
  const username =
    localStorage.getItem("username") || "test"

  const [profile, setProfile] = useState({
    full_name: "",
    headline: "",
    bio: "",
    location: "",
  })

  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])
  const [educations, setEducations] = useState([])

  const [profilePicture, setProfilePicture] =
  useState(null)

  const [banner, setBanner] =
  useState(null)

  const [newSkill, setNewSkill] = useState("")

  const [experienceForm, setExperienceForm] =
    useState({
      title: "",
      company: "",
      description: "",
    })

  const [educationForm, setEducationForm] =
    useState({
      school: "",
      degree: "",
    })

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    try {
      const profileData =
        await getProfileByUsername(username)

      setProfile(profileData.data || profileData)

      const skillsData =
        await getSkills(username)

      setSkills(skillsData.data || skillsData)

      const experiencesData =
        await getExperiences(username)

      setExperiences(
        experiencesData.data || experiencesData
      )

      const educationsData =
        await getEducations(username)

      setEducations(
        educationsData.data || educationsData
      )
    } catch (error) {
      console.log(error)
    }
  }

  const handleProfileUpdate = async () => {
    try {
      await updateProfile(profile)

      alert("Profile updated")
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddSkill = async () => {
    if (!newSkill) return

    try {
      await addSkill({
        name: newSkill,
      })

      setNewSkill("")

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteSkill = async (id) => {
    try {
      await deleteSkill(id)

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddExperience = async () => {
    try {
      await addExperience(experienceForm)

      setExperienceForm({
        title: "",
        company: "",
        description: "",
      })

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteExperience = async (
    id
  ) => {
    try {
      await deleteExperience(id)

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddEducation = async () => {
    try {
      await addEducation(educationForm)

      setEducationForm({
        school: "",
        degree: "",
      })

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteEducation = async (
    id
  ) => {
    try {
      await deleteEducation(id)

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  const handleProfilePictureUpload =
  async () => {
    if (!profilePicture) return

    try {
      await uploadProfilePicture(
        profilePicture
      )

      alert(
        "Profile picture updated"
      )

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

const handleBannerUpload =
  async () => {
    if (!banner) return

    try {
      await uploadBanner(banner)

      alert("Banner updated")

      fetchAll()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />

      <div className="profile-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <section className="profile-section glass-strong">
  <h2 className="profile-section-title">
    Upload Images
  </h2>

  <div className="profile-list">
    <div>
      <label className="form-label">
        Profile Picture
      </label>

      <input
        type="file"
        onChange={(e) =>
          setProfilePicture(
            e.target.files[0]
          )
        }
      />

      <button
        className="btn-primary auth-button"
        onClick={
          handleProfilePictureUpload
        }
      >
        Upload Picture
      </button>
    </div>

    <div>
      <label className="form-label">
        Banner
      </label>

      <input
        type="file"
        onChange={(e) =>
          setBanner(
            e.target.files[0]
          )
        }
      />

      <button
        className="btn-primary auth-button"
        onClick={
          handleBannerUpload
        }
      >
        Upload Banner
      </button>
    </div>
  </div>
</section>

        <div className="profile-wrapper">
          <section className="profile-section glass-strong">
            <h1 className="profile-section-title">
              Edit Profile
            </h1>

            <div className="profile-list">
              <input
                type="text"
                className="auth-input glass-input"
                placeholder="Full Name"
                value={profile.full_name || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    full_name:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="auth-input glass-input"
                placeholder="Headline"
                value={profile.headline || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    headline:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="auth-input glass-input"
                placeholder="Location"
                value={profile.location || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    location:
                      e.target.value,
                  })
                }
              />

              <textarea
                className="auth-input glass-input"
                placeholder="Bio"
                rows="5"
                value={profile.bio || ""}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    bio: e.target.value,
                  })
                }
              />

              <button
                className="btn-primary auth-button"
                onClick={
                  handleProfileUpdate
                }
              >
                Save Profile
              </button>
            </div>
          </section>

          {/* SKILLS */}

          <section className="profile-section glass-strong">
            <div className="profile-section-header">
              <h2 className="profile-section-title">
                Skills
              </h2>
            </div>

            <div className="profile-skills">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="profile-skill-badge"
                >
                  {skill.name}

                  <button
                    className="profile-remove-button"
                    onClick={() =>
                      handleDeleteSkill(
                        skill.id
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                className="auth-input glass-input"
                placeholder="New Skill"
                value={newSkill}
                onChange={(e) =>
                  setNewSkill(
                    e.target.value
                  )
                }
              />

              <button
                className="btn-primary auth-button"
                onClick={
                  handleAddSkill
                }
              >
                Add Skill
              </button>
            </div>
          </section>

          {/* EXPERIENCE */}

          <section className="profile-section glass-strong">
            <h2 className="profile-section-title">
              Experience
            </h2>

            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="profile-item"
              >
                <h3>
                  {experience.title}
                </h3>

                <p>
                  {experience.company}
                </p>

                <p>
                  {
                    experience.description
                  }
                </p>

                <button
                  className="profile-remove-button"
                  onClick={() =>
                    handleDeleteExperience(
                      experience.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="profile-list">
              <input
                type="text"
                className="auth-input glass-input"
                placeholder="Job Title"
                value={
                  experienceForm.title
                }
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    title:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="auth-input glass-input"
                placeholder="Company"
                value={
                  experienceForm.company
                }
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    company:
                      e.target.value,
                  })
                }
              />

              <textarea
                className="auth-input glass-input"
                placeholder="Description"
                rows="4"
                value={
                  experienceForm.description
                }
                onChange={(e) =>
                  setExperienceForm({
                    ...experienceForm,
                    description:
                      e.target.value,
                  })
                }
              />

              <button
                className="btn-primary auth-button"
                onClick={
                  handleAddExperience
                }
              >
                Add Experience
              </button>
            </div>
          </section>

          {/* EDUCATION */}

          <section className="profile-section glass-strong">
            <h2 className="profile-section-title">
              Education
            </h2>

            {educations.map((education) => (
              <div
                key={education.id}
                className="profile-item"
              >
                <h3>
                  {education.school}
                </h3>

                <p>
                  {education.degree}
                </p>

                <button
                  className="profile-remove-button"
                  onClick={() =>
                    handleDeleteEducation(
                      education.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="profile-list">
              <input
                type="text"
                className="auth-input glass-input"
                placeholder="School"
                value={
                  educationForm.school
                }
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    school:
                      e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="auth-input glass-input"
                placeholder="Degree"
                value={
                  educationForm.degree
                }
                onChange={(e) =>
                  setEducationForm({
                    ...educationForm,
                    degree:
                      e.target.value,
                  })
                }
              />

              <button
                className="btn-primary auth-button"
                onClick={
                  handleAddEducation
                }
              >
                Add Education
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default ProfilePage