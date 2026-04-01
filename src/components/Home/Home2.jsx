import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../assets/avatar.svg";
// import Shridhar from "../../assets/Shridhar.jpg";
// import shri111 from  "../../assets/shri111.jpg.jpeg";
import shri222 from  "../../assets/shri222.jpg.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who enjoys transforming ideas 
              into reliable and scalable applications. I have a strong 
              interest in building manufacturing and monitoring systems with 
              real-time data visibility, role-based access, and seamless API integrations.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Python, and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications{" "}
                </b>
              </i>
              that combine efficient backend systems 
              with intuitive user interfaces, helping 
              improve operational workflows and decision-making.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Java </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js, SpringBoot</b>. 
                and Currently, I’m expanding my skillset by learning C#, .NET Core, NextJS and cloud technologies to build more robust and enterprise-level applications. {" "}
                {/* <b className="purple">Next.js</b>. */}
              </i>
            </p>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={shri222} className="img-fluid" alt="avatar" width={350} style={{ paddingTop: 60 }} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
