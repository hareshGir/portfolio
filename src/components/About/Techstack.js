import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="tech-label">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="tech-label">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="tech-label">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p className="tech-label">TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <p className="tech-label">Redux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p className="tech-label">Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="tech-label">Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
        <p className="tech-label">Web3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p className="tech-label">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandReactNative />
        <p className="tech-label">React Query</p>
      </Col>
    </Row>
  );
}

export default Techstack;
