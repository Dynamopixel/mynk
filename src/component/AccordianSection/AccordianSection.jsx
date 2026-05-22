import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccordianSection.css";

export default function AccordianSection() {
  return (
    <section className="product-spec-section">
      <Container>

        <div className="product-spec-card">

          {/* ACCORDION */}
          <Accordion defaultActiveKey="0" className="custom-accordion">

            {/* 1 - PRODUCT SPEC (OPEN BY DEFAULT) */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Product Specification
              </Accordion.Header>

              <Accordion.Body>

                <div className="spec-grid">

                  <div className="spec-col">
                    <p><b>Weight :</b> 3.6 - 4.5 g (Ultra-light)</p>
                    <p><b>Chipset :</b> AC6323 (Low-Power, Efficient Performance)</p>
                    <p><b>Compatibility :</b> Android 5.1+, iOS 8.0+</p>
                  </div>

                  <div className="spec-col">
                    <p><b>Heart Rate Sensor :</b> Goodix GH3018</p>
                    <p><b>Secondary Sensor :</b> SC7A20H</p>
                    <p><b>Operating Temperature :</b> 0°C to 50°C</p>
                  </div>

                  <div className="spec-col">
                    <p><b>Battery :</b> Rechargeable Lithium Polymer</p>
                    <p><b>Charging Type :</b> Magnetic Charging dock</p>
                    <p><b>App :</b> Mynk Smart Ring</p>
                  </div>

                </div>

              </Accordion.Body>
            </Accordion.Item>

            {/* 2 - FEATURES */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>Features</Accordion.Header>
              <Accordion.Body>
                Advanced health tracking, sleep monitoring, SpO₂, HRV, and AI-based insights.
              </Accordion.Body>
            </Accordion.Item>

            {/* 3 - OTHER DETAILS */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>Other Details</Accordion.Header>
              <Accordion.Body>
                Waterproof build, ultra-light design, long battery life, and seamless mobile integration.
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>

        </div>
      </Container>
    </section>
  );
}