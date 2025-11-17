import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../assets/TechIcons/Google Chrome.svg";
import vsCode from "../../assets/TechIcons/vscode.svg";
import eclipseide from "../../assets/TechIcons/eclipseide.svg";

function Toolstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        gap: "10px",
        textAlign: "center",
      }}
    >
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="tech-icons">
        <img src={eclipseide} alt="Eclipse" className="tech-icon-images" />
        <div className="tech-icons-text">Eclipse</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
