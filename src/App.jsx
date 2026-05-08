import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import JobsPage from "./pages/JobsPage"
import JobDetailsPage from "./pages/JobDetailsPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {
  return (
    <Router>
      <Routes>
        {/* Unprotected Routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        {/* Dashboard page here */}
      </Routes>
    </Router>
  )
}



export default App