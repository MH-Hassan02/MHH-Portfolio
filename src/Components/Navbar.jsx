import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleTheme, theme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="navbar-menu open">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={handleMenuToggle}
          >
            Home
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={handleMenuToggle}
          >
            Projects
          </a>
          <a
            href="#services"
            className={activeSection === "services" ? "active" : ""}
            onClick={handleMenuToggle}
          >
            Services
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={handleMenuToggle}
          >
            Contact
          </a>
        </div>
      )}
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          {!isMenuOpen && (
            <div className="navbar-menu">
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </a>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
              >
                Projects
              </a>
              <a
                href="#services"
                className={activeSection === "services" ? "active" : ""}
              >
                Services
              </a>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </div>
          )}
          <button className="navbar-button" onClick={toggleTheme}>
            <span className="theme-label">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
            <span className="theme-icon">
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
            </span>
          </button>
          <button className="navbar-toggle" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
          <div className="navbar-reflection"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
