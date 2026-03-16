import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have been building web applications for over{" "}
              <b className="purple">5+ years</b> and I still love every bit of
              it.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              , with a strong focus on performance, clean architecture, and
              pixel-perfect UIs.
              <br />
              <br />
              My passion lies in the intersection of{" "}
              <i>
                <b className="purple">Web3 and Frontend Engineering</b>
              </i>{" "}
              — building decentralized applications, NFT platforms, and DeFi
              dashboards.
              <br />
              <br />
              Currently serving as{" "}
              <b className="purple">Lead Frontend Developer</b> at{" "}
              <b className="purple">Kryptos (Sweden)</b>, an all-in-one Web3
              finance platform with 5000+ integrations across major blockchain
              networks.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg.src || myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hareshgir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haresh-gir-0b1a04205"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
