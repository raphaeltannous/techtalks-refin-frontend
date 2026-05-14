import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import ProfilePage from "./pages/ProfilePage"
import JobsPage from "./pages/JobsPage"
import JobDetailsPage from "./pages/JobDetailsPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ProtectedRoute from "./components/ProtectedRoute"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import ResetPasswordPage from "./pages/ResetPasswordPage"
import ApplicationsPage from "./pages/ApplicationsPage"
import ApplyJobPage from "./pages/ApplyJobPage"

useEffect(() => {
  const checkAuth = async () => {
    try {
      await checkLoginStatus()
    } catch {
      localStorage.removeItem("token")
    }
  }

  checkAuth()
}, [])


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/jobs/:jobId/apply" element={<ApplyJobPage/>}/>

        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}/>
      
      </Routes>
    </Router>
  )
}



export default App