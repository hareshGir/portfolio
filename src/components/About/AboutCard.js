import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haresh Gir </span>
            from <span className="purple"> Rawalpindi, Pakistan.</span>
            <br />
            I am currently working as a{" "}
            <span className="purple">Lead Frontend Developer</span> at{" "}
            <span className="purple">Kryptos, Sweden</span> (Remote).
            <br />
            I have 5+ years of experience building scalable web applications
            with React.js and Next.js, with a strong focus on Web3 and
            blockchain-based projects.
            <br />
            <br />
            Apart from coding, some other things I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Web3 & Blockchain trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Building side projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build things that matter, ship code that lasts."{" "}
          </p>
          <footer className="blockquote-footer">Haresh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
