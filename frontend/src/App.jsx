import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ProfilePage from "./pages/ProfilePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {
  return (
    <Router>
      <Routes>
        {/*Unprotected routes*/}

        <Route path="/" element={<LandingPage />} />
        {/*Jobs page here*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />


        <Route path="/profile" element={<ProfilePage />} />
        {/*Protected Routes*/}
        {/*Dashboard page here*/}

      </Routes>
    </Router>
  )
}

export default App