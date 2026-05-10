import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import DashboardHomePage from "./pages/DashboardHomePage"

function App() {
  return (
    <Router>
      <Routes>
        {/* Unprotected routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardHomePage />} />
      </Routes>
    </Router>
  )
}

export default App