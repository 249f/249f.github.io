import './App.css';
import LandingPage from './pages/LandingPage';
import Projects from './pages/projects';
import Certificates from './pages/certificates';
import Amanak from './pages/projects/amanak';
import Zaytooon from './pages/projects/zaytooon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/zaytooon" element={<Zaytooon />} />
          <Route path="/projects/amanak" element={<Amanak />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
