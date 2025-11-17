import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  const isMobile = window.innerWidth < 768;

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "30px",
        color: "white",
      }}
    >
      <Col xs={12} md={10} className="text-center">
        <h1
          className="project-heading pb-4"
          style={{
            paddingBottom: "20px",
            fontSize: isMobile ? "1.6rem" : "2rem",
            textAlign: "center",
          }}
        >
          Days I <strong className="purple">Code</strong>
        </h1>

        <div
          style={{
            width: "100%",
            overflowX: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "fit-content",
              minWidth: isMobile ? "300px" : "500px",
              maxWidth: "95%",
            }}
          >
            <GitHubCalendar
              username="shridhar211971"
              blockSize={isMobile ? 9 : 14}
              blockMargin={isMobile ? 3 : 5}
              color="#c084f5"
              fontSize={isMobile ? 12 : 16}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Github;
