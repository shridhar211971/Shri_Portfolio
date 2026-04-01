import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shridhar Bhosale</span>{" "}
            from <span className="purple">Maharashtra, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Full Stack Developer</span> at{" "}
            <span className="purple">Indi4</span>, where I build real-world applications and scalable systems.
            <br />I completed my Bachelor of Computer Applications (BCA) from{" "}
            {/* <span className="purple">Mathematics and Computing</span> from{" "} */}
            <span className="purple">VCK Kolhapur</span> and am currently pursuing my Master of 
            Computer Applications (MCA) from{" "}
            <span className="purple">D Y Patil University, Pune</span>, alongside my job.
            <br />
            <br />
            Outside of coding, I enjoy activities that keep me creative and energized:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Ground Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing and exploring creative ideas (Poems)✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and discovering new places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe in building impactful solutions and continuously improving my skills to grow as a developer.!"{" "}
          </p>
          <footer className="blockquote-footer">Shridhar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
