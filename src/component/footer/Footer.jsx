import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Logo from "../../assets/images/mynk-logo.png"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container fluid className="px-3 px-md-5">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="footer-top-border" />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center py-5 logoimg">
            <img
              src={Logo}
              alt="MYNK Logo"
              className="footer-logo img-fluid"
            />

            <div className="footer-social mt-4">
              <a href="/" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="/" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="/" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="/" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>

            <Nav className="footer-links justify-content-center flex-wrap mt-4">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Contact us</Nav.Link>
              <Nav.Link href="/">Warranty</Nav.Link>
              <Nav.Link href="/">Privacy Policy</Nav.Link>
              <Nav.Link href="/">Shipping & Delivery Policy</Nav.Link>
              <Nav.Link href="/">User Manual</Nav.Link>
              <Nav.Link href="/">Ring Sizing Chart</Nav.Link>
            </Nav>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="footer-bottom-border" />
            <p className="footer-copy mb-0 py-4">
              © 2026, mynk.online Powered by Shopify
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;