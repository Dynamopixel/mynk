import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./FaqSection.css"

export default function FAQSection() {
  const faqs = [
    {
      q: "Is it safe for 24/7 wear?",
      a: "Yes. Designed for all-day comfort, sleep-safe and waterproof.",
    },
    {
      q: "How reliable is the data?",
      a: "Backed by clinically validated sensors.",
    },
    {
      q: "Can family alerts be disabled?",
      a: "Yes, fully optional in settings.",
    },
    {
      q: "Are there any hidden costs?",
      a: "None. You get full access for life.",
    },
    {
      q: "What about data privacy?",
      a: "All health data is encrypted end-to-end.",
    },
  ];

  const row1 = faqs.slice(0, 2); // 1st row: 2 items
  const row2 = faqs.slice(2, 5); // 2nd row: 3 items

  return (
    <section className="faq-wrap">
       <Container className="faq-container">
        <h2 className="faq-title">You Asked. We Answered</h2>

        {/* Row 1: 2 cards */}
        <Row className="faq-grid g-4">
          {row1.map((item, idx) => (
            <Col key={item.q} xs={12} md={6} className="faq-col">
              <div className="faq-card">
                <div className="faq-number">{idx + 1}</div>
                <div className="faq-content">
                  <div className="faq-question">{item.q}</div>
                  <div className="faq-answer">{item.a}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* Row 2: 3 cards */}
        <Row className="faq-grid g-4 faq-row2 mt-0">
          {row2.map((item, idx) => (
            <Col key={item.q} xs={12} md={4} className="faq-col">
              <div className="faq-card">
                <div className="faq-number">{idx + 3}</div>
                <div className="faq-content">
                  <div className="faq-question">{item.q}</div>
                  <div className="faq-answer">{item.a}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}