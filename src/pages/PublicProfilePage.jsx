import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar"

import {
  getProfileByUsername,
  getSkills,
  getExperiences,
  getEducations,
} from "../services/profileService"

function PublicProfilePage() {
  const { username } = useParams()

  const [profile, setProfile] =
    useState({})

  const [skills, setSkills] =
    useState([])

  const [experiences, setExperiences] =
    useState([])

  const [educations, setEducations] =
    useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const profileData =
        await getProfileByUsername(
          username
        )

      setProfile(
        profileData.data ||
          profileData
      )

      const skillsData =
        await getSkills(username)

      setSkills(
        skillsData.data ||
          skillsData
      )

      const experienceData =
        await getExperiences(
          username
        )

      setExperiences(
        experienceData.data ||
          experienceData
      )

      const educationData =
        await getEducations(
          username
        )

      setEducations(
        educationData.data ||
          educationData
      )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />

      <div className="public-profile-page">
        <div className="auth-bg-circle auth-bg-circle-top" />
        <div className="auth-bg-circle auth-bg-circle-bottom" />

        <div className="public-profile-container">
          <section className="public-profile-hero glass-strong">
            <div className="public-profile-top">
              <div className="public-profile-avatar">
                {profile.full_name?.charAt(
                  0
                ) || "U"}
              </div>

              <div className="public-profile-main-info">
                <h1>
                  {profile.full_name}
                </h1>

                <p className="public-profile-headline">
                  {profile.headline}
                </p>

                <p className="public-profile-location">
                  {profile.location}
                </p>
              </div>
            </div>

            <p className="public-profile-bio">
              {profile.bio}
            </p>
          </section>

          <div className="public-profile-grid">
            <section className="public-profile-card glass-strong">
              <h2>Skills</h2>

              <div className="public-profile-skills">
                {skills.map((skill) => (
                  <span key={skill.id}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section className="public-profile-card glass-strong">
              <h2>Education</h2>

              <div className="public-profile-details">
                {educations.map(
                  (education) => (
                    <div
                      key={
                        education.id
                      }
                    >
                      <small>
                        School
                      </small>

                      <p>
                        {
                          education.school
                        }
                      </p>

                      <small>
                        Degree
                      </small>

                      <p>
                        {
                          education.degree
                        }
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          </div>

          <section className="public-profile-card glass-strong">
            <h2>Experience</h2>

            <div className="public-profile-experience-list">
              {experiences.map(
                (experience) => (
                  <div
                    key={
                      experience.id
                    }
                    className="public-profile-experience-item"
                  >
                    <h3>
                      {
                        experience.title
                      }
                    </h3>

                    <div>
                      <p>
                        {
                          experience.company
                        }
                      </p>
                    </div>

                    <p>
                      {
                        experience.description
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default PublicProfilePage