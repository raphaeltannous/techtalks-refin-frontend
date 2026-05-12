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
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import PublicUserProfilePage from "./pages/PublicUserProfilePage"

function App() {
  return (
    <Router>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />

        <Route path="/" element={<LandingPage />} />
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        {/*Protected Routes*/}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/*Dashboard page here*/}

        {/* Protected Routes */}
        {/* Dashboard page here */}
        <Route path="/applications" element={<ApplicationsPage />} />
        {/* Public User Profile */}
      <Route path="/users/:userId" element={<PublicUserProfilePage />} />

        {/* Future Pages */}
        {/* <Route path="/jobs" element={<JobsPage />} /> */}
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Routes>
    </Router>
  )
}



export default App