import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";

function Intro() {
  const navigate = useNavigate();

  return (
    <div className="intro" onClick={() => navigate("/home")}>
      <div className="intro-card">
        <h1>Hi, Angelo Here!</h1>
        <p>IT Student</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;