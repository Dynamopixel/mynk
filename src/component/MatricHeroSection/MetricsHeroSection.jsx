import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MetricsHeroSection.css"
import ManModel from "../../assets/images/ringman.png"

export default function MetricsHeroSection() {
  const metrics = [
    { label: "SpO₂", iconBg: "#0b2a33", iconColor: "#63d3ff", iconText: "💧" },
    { label: "Stress & HRV", iconBg: "#3a1f3f", iconColor: "#ffb7ff", iconText: "🧠" },
    { label: "Heart Rate", iconBg: "#3b0f0f", iconColor: "#ff5a5a", iconText: "❤️" },
    { label: "Blood Pressure", iconBg: "#2d1f0c", iconColor: "#ffd37a", iconText: "🩸" },
    { label: "Steps & Calories", iconBg: "#1b1b1b", iconColor: "#ff9f52", iconText: "👟" },
    { label: "Sleep Analysis", iconBg: "#0d2a3a", iconColor: "#63b7ff", iconText: "💤" },
  ];

  return (
    <section className="metrics-hero">
      <Container className="metrics-wrap">
        <Row className="metrics-row align-items-center g-4">
          {/* LEFT */}
          <Col xs={12} lg={6}>
            <div className="metrics-left">
              <h2 className="metrics-title">
                Every Metric That
                <br />
                Matters. One Ring.
              </h2>

              <div className="metrics-grid">
                {metrics.map((m) => (
                  <div key={m.label} className="metric-item">
                    <div
                      className="metric-icon"
                      style={{ background: m.iconBg, color: m.iconColor }}
                      aria-hidden="true"
                    >
                      <span className="metric-icon-text">
                        {m.iconText}
                      </span>
                    </div>

                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* RIGHT */}
          <Col xs={12} lg={6}>
            <div className="metrics-right">
               <img src={ManModel} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}