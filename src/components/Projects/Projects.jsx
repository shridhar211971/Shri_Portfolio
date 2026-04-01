import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SmartInventory_shopping from "../../assets/Projects/SmartInventory_shopping.png"
import manufacturing_inventory from "../../assets/Projects/manufacturing_inventory.png"
import Machine_Curd_App from "../../assets/Projects/Machine_Curd_App.png"
import pm from "../../assets/Projects/pm.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> <strong className="Blue">As Personal Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on personally before joining a company.
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

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong> <strong className="Blue">As Company Project  </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently in indi4 with my current role.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartInventory_shopping}
              isBlog={false}
              title=" AndonX Multitenant System"
              description="Developed a real-time manufacturing monitoring system with multi-tenant architecture and role-based
access control and Andon ticketing system for issue tracking and resolution and Integrated React frontend with Django REST APIs."
              // ghLink="https://github.com/shridhar211971/inman-frontend"
              demoLink="https://andonx.indi4.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manufacturing_inventory}
              isBlog={false}
              title="KN Line Stoppage Intimation System"
              description="Built a real-time system to monitor and manage production line stoppages, downtime, and ticket
                work ows and Real-time dashboards for downtime tracking and performance analysis, 
Role-based access control with veri cation work ow."
              // ghLink="https://github.com/shridhar211971/Manufacturing_Product_-Inventory"
              // demoLink="https://manufacturing-product-inventory.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pm}
              isBlog={false}
              title="Production Management System (PM)"
              description="Developed a production planning and execution platform integrating inventory and manufacturing data
for real-time visibility. Implemented role-based access control and seamless API integrations for efficient operations."
              // ghLink="https://github.com/shridhar211971/Machines_Curd_Appp"
              demoLink="https://neosoft-pm.indi4.io/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
