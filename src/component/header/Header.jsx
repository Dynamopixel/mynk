import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiShoppingBag, FiUser, FiSearch } from "react-icons/fi";
import logo from "../../assets/images/mynk-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* TOP STRIP */}
      <div className="top-strip">
        <p>LUXURY MEETS WELLNESS - ENJOY 48% OFF TODAY</p>
      </div>

      {/* MAIN NAVBAR */}
      <Navbar expand="lg" className="main-navbar">
        <Container fluid="lg">

          {/* LEFT LINKS */}
          <Nav className="nav-left d-none d-lg-flex">
            <Nav.Link href="#">Home</Nav.Link>
           
          </Nav>

          {/* LOGO CENTER */}
          <Navbar.Brand className="brand-center ">
            <img src={logo} alt="Mynk" />
          </Navbar.Brand>

          {/* TOGGLER */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* RIGHT LINKS + ICONS */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-right">

              <Nav.Link href="#" className="d-lg-none">Home</Nav.Link>
              <Nav.Link href="#" className="d-lg-none">Combo</Nav.Link>

              {/* <Nav.Link href="#">Contact</Nav.Link> */}

              <div className="icons">
                {/* <FiSearch />
                <FiUser />
                <FiShoppingBag /> */}
                <Nav.Link href="#">Contact Us</Nav.Link>
              </div>

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;