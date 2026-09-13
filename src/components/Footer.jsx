import React from "react";
import logo from "../assets/logo-text.png"; // Update path if necessary

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section: Brand + Links */}
        <div className="footer-top">
          {/* Brand Block */}
          <div className="footer-brand-col">
            <img src={logo} alt="Dev Stack Logo" className="footer-logo" />
            <p className="footer-desc">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-links-col">
            <h4>PRODUCT</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-links-col">
            <h4>COMPANY</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-links-col">
            <h4>LEGAL</h4>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
