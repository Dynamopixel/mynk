import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestimonialSection.css";

import AmazonIcon from "../../assets/images/amzon-icon.png";
import FlipkartIcon from "../../assets/images/flipkart-icon.png";
import RingIcon from "../../assets/images/rinngg-icon.png";
import User2 from "../../assets/images/user2.png";
import User1 from "../../assets/images/user1.png";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Priya, 32, Bengaluru",
      text: "I improved my deep sleep score by 40% in a week.",
      avatar: User1,
    },
    {
      name: "Arjun, 45, Mumbai",
      text: "Caught early BP spikes thanks to Mynk’s instant alerts.",
      avatar: User2,
    },
  ];

  return (
    <section className="testimonial-section">
      <Container>

        <h2 className="testimonial-title">
          Loved by Health - <br /> Conscious Indians
        </h2>

       <div className="testimonial-slider">

  {testimonials.map((item, i) => (
    <div className="testimonial-slide" key={i}>

      <div className="testimonial-card">

        <div className="user-row">

          <img
            src={item.avatar}
            alt={item.name}
            className="avatar-img"
          />

          <div className="user-info">
            <div className="name">{item.name}</div>
            <div className="stars">★★★★★</div>
          </div>
        </div>

        <div className="quote">
          “{item.text}”
        </div>

      </div>

    </div>
  ))}

</div>
        {/* trust badges */}
        <div className="trust-row">
          <div className="trust-item">
            <img src={AmazonIcon} alt="Amazon" />
            Amazon Bestseller
          </div>

          <div className="divider" />

          <div className="trust-item">
            <img src={FlipkartIcon} alt="Flipkart" />
            Flipkart Verified
          </div>

          <div className="divider" />

          <div className="trust-item">
            <img src={RingIcon} alt="Ring" />
            10,000+ Rings Sold
          </div>
        </div>

      </Container>
    </section>
  );
}