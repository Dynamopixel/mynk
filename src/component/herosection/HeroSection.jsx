import React from "react";
import "./HeroSection.css";

import heroImg from "../../assets/images/hero-banner.webp";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >

      <div className="hero-content">

        <h1 className="hero-title">
          MYNK <br /> SMART RING
        </h1>

        <p className="hero-desc">
          India’s lightest health ring with BP, sleep &
          heart rate tracking just 4 gm.
        </p>

        <div className="review-badge">
          <span className="star">★</span>
          <span>4.9/5 Reviews</span>

          <div className="badge-divider" />

          <span className="growth">↗</span>
          <span>10K Unit Sold</span>
        </div>

        <div className="price-row">
          <span className="new-price">₹ 6,499</span>

          <span className="old-price">₹ 12,999</span>

          <span className="discount-badge">
            50% off
          </span>

          <span className="sold-badge">
            Sold out
          </span>
        </div>

        <div className="color-row">
          <span className="color active"></span>
          <span className="color silver"></span>
          <span className="color gray"></span>
        </div>

        <p className="shipping-text">
          Shipping calculated at checkout.
        </p>

        <div className="size-top">
          <span>Choose Your Size</span>

          <span className="size-guide">
            Sizing Guide
          </span>
        </div>

        <div className="size-row">
          <button className="size-btn">7</button>
          <button className="size-btn">8</button>
          <button className="size-btn">9</button>
          <button className="size-btn disabled">10</button>
          <button className="size-btn active">11</button>
          <button className="size-btn">12</button>
        </div>

        <button className="hero-btn">
           CONTACT US
        </button>

      </div>
    </section>
  );
};

export default HeroSection;