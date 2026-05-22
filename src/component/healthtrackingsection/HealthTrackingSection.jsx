import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./HealthTrackingSection.css";

import ringLeft from "../../assets/images/left-ring.png";
import ringRight from "../../assets/images/right-ring.png";
import appMockup from "../../assets/images/mobile.png";

const leftFeatures = [
  {
    icon: "👑",
    title: "Zero\nSubscriptions",
  },
  {
    icon: "💸",
    title: "No Hidden\nFees",
  },
];

const rightFeatures = [
  {
    icon: "👆",
    title: "Lifetime\nAccess",
  },
  {
    icon: "🔒",
    title: "locked\nFeatures",
  },
];

const HealthTrackingSection = () => {
  return (
    <section className="health-section">
      <Container fluid="xl">

        {/* Title */}
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="health-heading">
              Smart Health Tracking<br />That Fits Your Life
            </h2>
          </Col>
        </Row>

        {/* Main content row */}
        <Row className="health-main-row align-items-center">

          {/* Left ring image — hidden on mobile */}
          <Col xs={0} lg={1} className="ring-col ring-left-col d-none d-lg-flex">
            <img src={ringLeft} alt="Ring" className="ring-side-img ring-left-img" />
          </Col>

          {/* Left features */}
          <Col xs={12} sm={6} lg={2} className="features-col features-left">
            {leftFeatures.map((f, i) => (
              <div key={i} className="feature-item feature-item-left">
                <div className="feature-icon-wrap">
                  <span className="feature-icon">{f.icon}</span>
                </div>
                <p className="health-title">{f.title}</p>
              </div>
            ))}
          </Col>

          {/* Center app mockup */}
          <Col xs={12} sm={12} lg={6} className="mockup-col">
            <img src={appMockup} alt="App Mockup" className="mockup-img" />
          </Col>

          {/* Right features */}
          <Col xs={12} sm={6} lg={2} className="features-col features-right">
            {rightFeatures.map((f, i) => (
              <div key={i} className="feature-item feature-item-right">
                <div className="feature-icon-wrap">
                  <span className="feature-icon">{f.icon}</span>
                </div>
                <p className="health-title">{f.title}</p>
              </div>
            ))}
          </Col>

          {/* Right ring image — hidden on mobile */}
          <Col xs={0} lg={1} className="ring-col ring-right-col d-none d-lg-flex">
            <img src={ringRight} alt="Ring" className="ring-side-img ring-right-img" />
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default HealthTrackingSection