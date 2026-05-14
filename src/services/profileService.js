import API from "./api"

// PROFILE
export const getProfileByUsername = async (username) => {
  const response = await API.get(
    `/user/profile/by-username/${username}`
  )

  return response.data
}

export const updateProfile = async (data) => {
  const response = await API.put(
    "/user/profile/",
    data
  )

  return response.data
}

// SKILLS
export const getSkills = async (username) => {
  const response = await API.get(
    `/user/skill/by-username/${username}`
  )

  return response.data
}

export const addSkill = async (data) => {
  const response = await API.post(
    "/user/skill/",
    data
  )

  return response.data
}

export const deleteSkill = async (id) => {
  const response = await API.delete(
    `/user/skill/${id}`
  )

  return response.data
}

// EXPERIENCE
export const getExperiences = async (username) => {
  const response = await API.get(
    `/user/experience/by-username/${username}`
  )

  return response.data
}

export const addExperience = async (data) => {
  const response = await API.post(
    "/user/experience/",
    data
  )

  return response.data
}

export const deleteExperience = async (id) => {
  const response = await API.delete(
    `/user/experience/${id}`
  )

  return response.data
}

// EDUCATION
export const getEducations = async (username) => {
  const response = await API.get(
    `/user/education/by-username/${username}`
  )

  return response.data
}

export const addEducation = async (data) => {
  const response = await API.post(
    "/user/education/",
    data
  )

  return response.data
}

export const deleteEducation = async (id) => {
  const response = await API.delete(
    `/user/education/${id}`
  )

  return response.data
}

// PROJECTS
export const getProjects = async (username) => {
  const response = await API.get(
    `/user/project/by-username/${username}`
  )

  return response.data
}

export const addProject = async (data) => {
  const response = await API.post(
    "/user/project/",
    data
  )

  return response.data
}

export const deleteProject = async (id) => {
  const response = await API.delete(
    `/user/project/${id}`
  )

  return response.data
}

// CERTIFICATES
export const getCertificates = async (username) => {
  const response = await API.get(
    `/user/certificate/by-username/${username}`
  )

  return response.data
}

export const addCertificate = async (data) => {
  const response = await API.post(
    "/user/certificate/",
    data
  )

  return response.data
}

export const deleteCertificate = async (id) => {
  const response = await API.delete(
    `/user/certificate/${id}`
  )

  return response.data
}

// LINKS
export const getLinks = async (username) => {
  const response = await API.get(
    `/user/link/by-username/${username}`
  )

  return response.data
}

export const addLink = async (data) => {
  const response = await API.post(
    "/user/link/",
    data
  )

  return response.data
}

export const deleteLink = async (id) => {
  const response = await API.delete(
    `/user/link/${id}`
  )

  return response.data
}

// PROFILE PICTURE
export const uploadProfilePicture = async (
  file
) => {
  const formData = new FormData()

  formData.append("file", file)

  const response = await API.put(
    "/user/profile/profile-picture",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  )

  return response.data
}

// BANNER
export const uploadBanner = async (
  file
) => {
  const formData = new FormData()

  formData.append("file", file)

  const response = await API.put(
    "/user/profile/banner",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  )

  return response.data
}