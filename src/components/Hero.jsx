import React from "react";
import bannerImage from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Build Your Ideal <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p className="hero-description">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Explore Technologies</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src={bannerImage}
          alt="Development Stack Illustration"
          className="hero-image"
        />
      </div>
    </section>
  );
}
