import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../utils/auth"



function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token")

  if (!token) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute