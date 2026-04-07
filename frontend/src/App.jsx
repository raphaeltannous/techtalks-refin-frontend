import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
//import jobs page here
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"

function App() {
  return (
    <Router>
      <Routes>
        {/*Unprotected routes*/}

        <Route path="/" element={<LandingPage />} />
        {/*Jobs page here*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/*Protected Routes*/}
        
        {/*Dashboard page here*/}
        
      </Routes>
    </Router>
  )
}

export default App