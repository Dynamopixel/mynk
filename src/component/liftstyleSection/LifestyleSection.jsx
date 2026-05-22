import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import MainRing from "../../assets/images/sidering-main.png"
import "./LifestyleSection.css"

const LifestyleSection = () => {
  return (
     <section className="lifestyle-section">
      <Container>
        <Row className="align-items-center">
 
          <Col xs={12} md={7} className="lifestyle-left">
            <h2 className="lifestyle-heading">
              Made for Indian<br />Lifestyles
            </h2>
            <Row className="g-0 align-items-start lifestyle-stats">
              <Col xs="auto" className="stat-item">
                <div className="stat-value"><h3>4 <span>gm</span></h3></div>
                <div className="stat-label"><p>Featherlight</p></div>
              </Col>
              <Col xs="auto" className="stat-divider d-none d-sm-block" />
              <Col xs="auto" className="stat-item">
                <div className="stat-value"> <h3>24/7 <span>wear</span></h3> </div>
                <div className="stat-label"><p>even during sleep</p></div>
              </Col>
              <Col xs="auto" className="stat-divider d-none d-sm-block" />
              <Col xs="auto" className="stat-item">
                <div className="stat-value ip68"> <h3>IP68 <span>Rated</span></h3> </div>
                <div className="stat-label"><p>Shower, gym, and sweat-proof.</p></div>
              </Col>
            </Row>
          </Col>
 
          <Col xs={12} md={5} className="lifestyle-right text-center">
            {/* Replace src with your actual ring image */}
            <img
              src={MainRing}
              alt="Smart Ring"
              className="ring-img img-fluid"
            />
          </Col>
 
        </Row>
      </Container>
    </section>
  )
}

export default LifestyleSection