import axios from "axios"
import { API_BASE_URL } from "../config/api"

const api = axios.create({
  baseURL: API_BASE_URL,
})

// =========================
// LOGIN
// =========================
export const loginUser = async (email, password) => {
  const formData = new URLSearchParams()

  formData.append("username", email)
  formData.append("password", password)

  const response = await api.post(
    "/auth/login",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  )

  return response.data
}

// =========================
// REGISTER
// =========================
export const registerUser = async (userData) => {
  const response = await api.post(
    "/auth/register",
    {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      name: userData.name,
    }
  )

  return response.data
}

// =========================
// CHECK TOKEN STATUS
// =========================
export const checkLoginStatus = async () => {
  const token = localStorage.getItem("token")

  const response = await api.post(
    "/auth/login/status",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return response.data
}

// =========================
// FORGOT PASSWORD
// =========================
export const forgotPassword = async (email) => {
  const response = await api.post(
    "/auth/password-reset",
    {
      email,
    }
  )

  return response.data
}

// =========================
// RESET PASSWORD
// =========================
export const resetPassword = async (
  token,
  password,
  password_confirm
) => {
  const response = await api.put(
    "/auth/password-reset",
    {
      token,
      password,
      password_confirm,
    }
  )

  return response.data
}

export default api