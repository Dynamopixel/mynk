import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import runningManImg from "../../assets/images/runningman.webp";
import "./RunningManSection.css";

const RunningManSection = () => {
  return (
    <section
      className="runner-section"
      style={{ backgroundImage: `url(${runningManImg})` }}
    >
     
    </section>
  )
}

export default RunningManSection