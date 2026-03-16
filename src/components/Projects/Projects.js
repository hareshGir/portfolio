import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zeptagram from "../../Assets/Projects/chatify.png";
import cryptoGame from "../../Assets/Projects/codeEditor.png";
import gpkBatta from "../../Assets/Projects/leaf.png";
import kryptos from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the key projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kryptos}
              isBlog={false}
              title="Kryptos — Web3 Finance Platform"
              description="Lead Frontend Developer at Kryptos (Sweden). Built React/Next.js interfaces for crypto tax reporting, unified portfolio tracking, and DeFi/NFT analytics dashboards across 5000+ integrations on Ethereum, Solana, and other major networks."
              demoLink="https://kryptos.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeptagram}
              isBlog={false}
              title="Zeptagram — NFT Marketplace"
              description="Led frontend development for a blockchain platform enabling NFT minting and trading. Built minting workflows, wallet integrations, and NFT marketplace UI using React.js, Web3, and Smart Contracts."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoGame}
              isBlog={false}
              title="Crypto Gaming Platform"
              description="Built interactive game interfaces and integrated blockchain wallet functionality for in-game crypto transactions. Developed with React.js, TypeScript, and Web3 libraries for a seamless play-to-earn experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gpkBatta}
              isBlog={false}
              title="GPK Batta — NFT Mining Platform"
              description="Developed the complete frontend interface for asset discovery, mining operations, and user dashboards on an NFT-based blockchain mining platform using React.js and blockchain UI libraries."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
