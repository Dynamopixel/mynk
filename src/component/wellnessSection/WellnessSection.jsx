import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./WellnessSection.css";

import GreenTick from "../../assets/images/greentick.png"
import RedTick from "../../assets/images/redtick.png"

const otherPoints = [
  "You guess why you're tired.",
  "You miss early BP or stress warning signs.",
  "You rely on bulky wearables with hidden fees.",
];

const mynkPoints = [
  "Get precise sleep + recovery scores daily.",
  "Stay ahead of hypertension with real-time BP alerts.",
  "Loved ones get notified the moment something's wrong.",
];

const WellnessSection = () => {
  return (
    <section className="wellness-section">
      <Container>

        <Row>
          <Col xs={12} className="text-center">
            <h2 className="wellness-heading">Wellness Isn't a Guessing Game</h2>
          </Col>
        </Row>

        <Row className="wellness-cards-row flex-nowrap">

          {/* OTHER card */}
          <Col className="wellness-card-col">
            <div className="wellness-card other-card">
              <p className="card-brand other">OTHER</p>
              <ul className="card-list">
                {otherPoints.map((point, i) => (
                  <li key={i} className="card-list-item">
                    <span className="icon cross">
                      <img src={RedTick} alt="" />
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* VS badge */}
          <Col xs="auto" className="vs-col">
            <div className="vs-badge">VS</div>
          </Col>

          {/* MYNK card */}
          <Col className="wellness-card-col">
            <div className="wellness-card mynk-card">
              <p className="card-brand mynk">MYNK</p>
              <ul className="card-list">
                {mynkPoints.map((point, i) => (
                  <li key={i} className="card-list-item">
                    <span className="icon check">
                      <img src={GreenTick} alt="" />
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default WellnessSection