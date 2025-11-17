import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// ✅ Correct worker for pdfjs 3.11.174
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

// ✅ Load file from public/
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

      {/* --- PDF Viewer --- */}
      <Row className="resume d-flex justify-content-center mt-4">
        <Document
          file={pdf}
          onLoadError={(error) => console.error("❌ Error loading PDF:", error.message)}
        >
          <Page
            pageNumber={1}
            scale={width > 786 ? 1.5 : 0.7}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </Row>

      {/* --- Bottom Download Button --- */}
      <Row style={{ justifyContent: "center", marginTop: "30px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
