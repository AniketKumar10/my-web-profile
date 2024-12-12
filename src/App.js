import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Certificate from './pages/certificate';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navigation bar appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
        <Footer /> {/* Footer appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
