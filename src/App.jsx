import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection'; 
import Projects from './Components/Projects';
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div id="home">
        <HeroSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
