import React, { useState } from "react";
import "./HeroSection.css";

import heroImg from "../../assets/images/hero-banner.webp";
import SizecardPopup from "../SizecardPopup/SizecardPopup";
import { TbRulerMeasure } from "react-icons/tb";


const HeroSection = () => {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
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
            <span className="color silver active"></span>
            <span className="color gray active"></span>
          </div>

          <p className="shipping-text">
            Shipping calculated at checkout.
          </p>

          <div className="size-top">
            <span>Available Size</span>

            <span
              className="size-guide"
              onClick={() => setShowPopup(true)}
            >
             <TbRulerMeasure />  Sizing Guide
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
            Quick Enquiry
          </button>

        </div>
      </section>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">

            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <SizecardPopup />

          </div>
        </div>
      )
      }
    </>
  );
};

export default HeroSection;