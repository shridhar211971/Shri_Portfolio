import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SmartInventory_shopping from "../../assets/Projects/SmartInventory_shopping.png"
import manufacturing_inventory from "../../assets/Projects/manufacturing_inventory.png"
import Machine_Curd_App from "../../assets/Projects/Machine_Curd_App.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartInventory_shopping}
              isBlog={false}
              title="Smart_Inventory_+_Shopping
              Website"
              description="A Developing  Smart Inventory Management and Shopping system using Java, Spring Boot, MySQL, 
 and Angular to optimize resource utilization and streamline operations efficiently. "
              ghLink="https://github.com/shridhar211971/inman-frontend"
              demoLink="https://inman-frontend-8gdg.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manufacturing_inventory}
              isBlog={false}
              title="Manufacturing_Product_-Inventory"
              description="A Developing  Manufacturing_Product_-Inventory system Using 
                JavaScript, React.Js and MUI, Rechats, Redux to optimize resource utilization and streamline operations efficiently. "
              ghLink="https://github.com/shridhar211971/Manufacturing_Product_-Inventory"
              demoLink="https://manufacturing-product-inventory.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Machine_Curd_App}
              isBlog={false}
              title="Machines_Curd_Website"
              description="A Developing  Smart Machines_Curd_Appp system using JavaScript, React.Js, Redux
             to optimize resource utilization and streamline operations efficiently. "
              ghLink="https://github.com/shridhar211971/Machines_Curd_Appp"
              demoLink="https://machines-curd-appp.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
