import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons for hamburger menu
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Effect to set visibility to true when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll function with offset adjustment
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    const yOffset = -80; // Adjust this value to the height of your navbar
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <motion.section
      className="navbar-container"
      initial={{ opacity: 0, y: -50 }} // Initial state (hidden)
      animate={{ opacity: 1, y: 0 }} // Animate to visible
      exit={{ opacity: 0, y: -50 }} // Optional: Animate out on unmount
      transition={{ duration: 0.5 }} // Animation duration
    >
      {/* Web Navbar */}
      <div className="navbar-web">
        <motion.div
          initial={{ opacity: 0, x: -500 }} // Initial state (hidden)
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          exit={{ opacity: 0, x: 0 }} // Optional: Animate out on unmount
          transition={{ duration: 1, delay: 1 }}
          className="brand"
        >
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}>
            <h1>KIRAN RUP</h1>
            <h4>Portfolio Website</h4>
          </a>
        </motion.div>
        <div className="menu">
          <motion.ul>
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}><motion.li>Home</motion.li></a>

            <a href="#AreaOfExpertise" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#AreaOfExpertise");
            }}><motion.li>Area Of Expertise</motion.li></a>

            <a href="#experience" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#experience");
            }}><motion.li>Experience</motion.li></a>

            <a href="#education" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#education");
            }}><motion.li>Education</motion.li></a>

            <a href="#achievements" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#achievements");
            }}><motion.li>Achievements</motion.li></a>

            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}><motion.li>Contact Me</motion.li></a>
          </motion.ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="navbar-mobile">
        <div className="mobile-header">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 1 }}
            className="brand"
          >
            <h1>KIRAN RUP</h1>
            <h4>Portfolio Website</h4>
          </motion.div>
          {/* Hamburger Menu */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>

        {/* Mobile Menu Items with Framer Motion */}
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li onClick={() => {scrollToSection("#home"); toggleMobileMenu();}}>Home</li>
              <li onClick={() => {scrollToSection("#Education"); toggleMobileMenu();}}>Education</li>
              <li onClick={() => {scrollToSection("#experience"); toggleMobileMenu();}}>Experience</li>
              <li onClick={() => {scrollToSection("#AreaOfExpertise"); toggleMobileMenu();}}>Area Of Expertise</li>
              <li onClick={() => {scrollToSection("#achievements"); toggleMobileMenu();}}>Achievements</li>
              <li onClick={() => {scrollToSection("#contact"); toggleMobileMenu();}}>Contact Me</li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Navbar;
