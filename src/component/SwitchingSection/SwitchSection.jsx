import { Container, Row, Col } from "react-bootstrap";
import ringBg from "../../assets/images/main-switch.jpg";
import Love from "../../assets/images/loveicon.png";
import Foot from "../../assets/images/footicon.png";
import Mind from "../../assets/images/mindicon.png";
import Sleep from "../../assets/images/sleepicon.png";
import Water from "../../assets/images/watericon.png";
import Bell from "../../assets/images/bellcion.png";
import "./SwitchSection.css";

const SwitchSection = () => {
  return (
    <section className="why-section">

      {/* BG IMAGE */}
      <img src={ringBg} alt="" className="why-bg-img" />

      <Container className="why-container">

        {/* HEADING */}
        <Row>
          <Col xs={12} className="text-center">
            <h2 className="why-title">
              Why Indians Are<br />Switching to Mynk
            </h2>
          </Col>
        </Row>

        {/* FEATURES GRID */}
        <Row className="why-grid">

         <Col xl={2} lg={2} md={6} sm={6} xs={6} className="why-item">
            <div className="why-icon"><img src={Water} alt="" /></div>
            <h4 className="why-name">SpO₂</h4>
            <p className="why-desc">Monitor blood oxygen levels for respiratory health</p>
          </Col>

         <Col xl={2} lg={2} md={6} sm={6} xs={6} className="why-item">
            <div className="why-icon">
               <img src={Love} alt="" />
            </div>
            <h4 className="why-name">Heart Rate</h4>
            <p className="why-desc">Detect stress, exertion &amp; recovery trends</p>
          </Col>

         <Col xl={2} lg={2} md={6} sm={6} xs={6} className="why-item">
            <div className="why-icon"><img src={Foot} alt="" /></div>
            <h4 className="why-name">Steps &amp; Calories</h4>
            <p className="why-desc">Measure daily movement and calories burned.</p>
          </Col>

         <Col xl={2} lg={2} md={6} sm={6} xs={6} className="why-item">
            <div className="why-icon"><img src={Mind} alt="" /></div>
            <h4 className="why-name">Stress &amp; HRV</h4>
            <p className="why-desc">Monitor stress in real-time - spot patterns, stay in control.</p>
          </Col>

         <Col xl={2} lg={2} md={6} sm={6} xs={6} className="why-item">
            <div className="why-icon"><img src={Bell} alt="" /></div>
            <h4 className="why-name">Blood Pressure</h4>
            <p className="why-desc">Stay ahead of hypertension with trend alerts</p>
          </Col>

         <Col xl={2} lg={2} md={6} sm={6} xs={6} className="why-item">
            <div className="why-icon"><img src={Sleep} alt="" /></div>
            <h4 className="why-name">Sleep Analysis</h4>
            <p className="why-desc">Understand your deep, REM, and light sleep cycles.</p>
          </Col>

        </Row>

      </Container>
    </section>
  );
};

export default SwitchSection;