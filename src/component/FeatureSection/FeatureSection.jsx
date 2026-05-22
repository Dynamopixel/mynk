import { Container, Row, Col } from "react-bootstrap";
import ringImg from "../../assets/images/ringg.png";

import Love from "../../assets/images/loveicon.png";
import Android from "../../assets/images/app-icon.png";
import Backup from "../../assets/images/backupicon.png";

import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <Container>
        <Row className="align-items-center gx-5">

          {/* LEFT */}
          <Col lg={6} md={12} xs={12} className="feature-left">

            <h2 className="feature-title">
              Track Heart Rate.<br />
              Monitor Sleep. Check<br />
              BP. No Subscriptions.
            </h2>

            <p className="feature-desc">
              India's lightest health ring with BP, sleep
              &amp; heart rate tracking just <strong>4 gm.</strong>
            </p>

            <div className="feature-stats">

              <div className="stat-item">
                <div className="stat-icon">
                  <img src={Love} alt="Users" />
                </div>
                <div className="stat-text">
                  <strong>10,000+</strong>
                  <span>Users</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <img src={Android} alt="Mobile" />
                </div>
                <div className="stat-text">
                  <strong>iOS</strong>
                  <span>Android</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <img src={Backup} alt="Data Secure" />
                </div>
                <div className="stat-text">
                  <strong>Data</strong>
                  <span>Encrypted</span>
                </div>
              </div>

            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={6} md={12} xs={12} className="feature-right">
            <img src={ringImg} alt="MYNK Ring" className="ring-img" />
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;