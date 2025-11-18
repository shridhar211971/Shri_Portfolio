import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// 🔥 Replace react-pdf (not working on Vercel)
const pdf = "/ShridharBhosale.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* --- Top Download Button --- */}
      <Row style={{ justifyContent: "center" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>

      {/* --- PERFECT PDF VIEW --- */}
      <Row className="resume d-flex justify-content-center mt-4">
        <iframe
          src={pdf}
          title="resume"
          style={{
      width: width > 1024 ? "750px" : width > 768 ? "85%" : "95%",
      height: width > 768 ? "1100px" : "600px",
      border: "none",
      borderRadius: "10px",
      background: "white",
      boxShadow: "0 0 25px rgba(174,144,255,0.4)",
    }}
        ></iframe>
      </Row>

      {/* --- Bottom Download Button --- */}
      <Row style={{ justifyContent: "center", marginTop: "30px" }}>
        {/* <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button> */}
      </Row>
    </Container>
  );
}

export default ResumeNew;
