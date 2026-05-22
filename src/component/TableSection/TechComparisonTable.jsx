import React from "react";
import { Container, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TechComparisonTable.css";

import GreenTick from "../../assets/images/greentick.png"
import RedTick from "../../assets/images/redtick.png"

export default function TechComparisonTable() {
  const rows = [
    {
      feature: "Blood Pressure Monitoring",
      myn: "Yes",
      others: "No",
      mynOk: true,
      otherOk: false,
    },
    {
      feature: "Heart Rate",
      myn: "Yes",
      others: "Yes",
      mynOk: true,
      otherOk: true,
    },
    {
      feature: "Family Alert System",
      myn: "Yes",
      others: "No",
      mynOk: true,
      otherOk: false,
    },
    {
      feature: "Sleep Staging (REM/Deep)",
      myn: "Yes",
      others: "Yes",
      mynOk: true,
      otherOk: true,
    },
    {
      feature: "Subscription-Free Access",
      myn: "Yes",
      others: "No",
      mynOk: true,
      otherOk: false,
    },
    {
      feature: "Weight",
      myn: "4 gm",
      others: "4 gm",
    },
    {
      feature: "Battery Life",
      myn: "5 Days",
      others: "4-7 Days",
    },
    {
      feature: "Waterproof Rating",
      myn: "IP68",
      others: "IPX8",
    },
    {
      feature: "Sensor Suite",
      myn: "PPG, SpO₂, BP, HRV",
      others: "PPG, Temperature",
    },
    {
      feature: "OS Compatibility",
      myn: "Android + iOS",
      others: "Android + iOS",
    },
  ];

const CheckIcon = () => (
  <img
    src={GreenTick}
    alt="Tick"
    className="status-icon"
  />
);

const CrossIcon = () => (
  <img
    src={RedTick}
    alt="Cross"
    className="status-icon"
  />
);

  return (
    <section className="tech-table-section">
      <Container>
        <h2 className="tech-title">Where Mynk Wins on Tech</h2>

        <div className="table-responsive custom-table-wrap">
          <Table className="custom-tech-table align-middle mb-0">
            <thead>
              <tr>
                <th>Technical Feature</th>
                <th>Mynk Alpha</th>
                <th>Other Rings</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="feature-cell">{r.feature}</td>

                  <td>
                    <div className="cell-content">
                      {typeof r.mynOk === "boolean" &&
                        (r.mynOk ? <CheckIcon /> : <CrossIcon />)}

                      <span>{r.myn}</span>
                    </div>
                  </td>

                  <td>
                    <div className="cell-content">
                      {typeof r.otherOk === "boolean" &&
                        (r.otherOk ? (
                          <CheckIcon />
                        ) : (
                          <CrossIcon />
                        ))}

                      <span>{r.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
}