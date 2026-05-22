import { Container, Row, Col } from "react-bootstrap";
import chargerImg from "../../assets/images/batterycase.png";
import "./BatterySection.css";

const BatterySection = () => {
  return (
    <section className="battery-section">
      <Container>
        <Row className="align-items-center justify-content-between battery-row">

          {/* CONTENT FIRST FOR MOBILE */}
          <Col
            xl={6}
            lg={6}
            md={6}
            xs={12}
            className="battery-right order-1 order-md-2"
          >
            <h2 className="battery-title">
              5 Days Battery <br />
              on Single Charge*
            </h2>

            <div className="battery-badge">
              <span className="battery-icon">🔋</span>
              <span className="battery-text">
                5 Day Battery Backup*
              </span>
            </div>
          </Col>

          {/* IMAGE */}
          <Col
            xl={6}
            lg={6}
            md={6}
            xs={12}
            className="battery-left order-2 order-md-1"
          >
            <img
              src={chargerImg}
              alt="MYNK Ring Charger"
              className="charger-img"
            />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default BatterySection;