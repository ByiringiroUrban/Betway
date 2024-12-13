import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">Urban Bet</div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#sports">Sports</a></li>
          <li><a href="#casino">Casino</a></li>
          <li><a href="#live-casino">Live Casino</a></li>
          <li><a href="#vegas">Vegas</a></li>
          <li><a href="#esports">Esports</a></li>
          <li><a href="#promotions">Promotions</a></li>
        </ul>

        {/* Buttons */}
        <div className="navbar-buttons">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign up</button>
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
