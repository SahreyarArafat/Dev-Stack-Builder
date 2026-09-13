import React, { useState } from "react";
import logo from "../assets/logo-text.png";
import "../App.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">
        {/* Left: Hamburger on mobile, Logo on desktop */}
        <div className="navbar-left">
          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="navbar-logo desktop-logo"
          />
        </div>

        {/* Center: Logo on mobile, Nav links on desktop */}
        <div className="navbar-center">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="navbar-logo mobile-logo"
          />
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a href="#" className="navbar-link active-link">
              Home
            </a>
            <a href="#" className="navbar-link">
              Technologies
            </a>
            <a href="#" className="navbar-link">
              Projects
            </a>
            <a href="#" className="navbar-link">
              About
            </a>
            <a href="#" className="navbar-link">
              Contact
            </a>
          </div>
        </div>

        {/* Right: Sign In & Sign Up buttons */}
        <div className="navbar-right">
          <button className="navbar-button sign-in-btn">Sign In</button>
          <button className="navbar-button active-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
