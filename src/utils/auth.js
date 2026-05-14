export function setToken(token){
    localStorage.setItem("token", token)
}

export function getToken() {
    return localStorage.getItem("token")
}

export function removeToken() {
    localStorage.removeItem("token")
}

export function isAuthenticated(){
    return !!localStorage.getItem("token")
}

export const isLoggedIn = () => {
  const token = localStorage.getItem("token")

  return !!token
}

export const logout = () => {
  localStorage.removeItem("token")

  window.location.href = "/login"
}