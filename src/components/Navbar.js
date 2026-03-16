import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../Assets/BrandLogo.png";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const isActive = (path) => router.pathname === path;

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <Image src={logo} className="img-fluid logo" alt="brand" height={28} width={40} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link onClick={() => updateExpanded(false)} className={isActive("/") ? "active" : ""}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link onClick={() => updateExpanded(false)} className={isActive("/about") ? "active" : ""}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/project" passHref legacyBehavior>
                <Nav.Link onClick={() => updateExpanded(false)} className={isActive("/project") ? "active" : ""}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
                  Projects
                </Nav.Link>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/resume" passHref legacyBehavior>
                <Nav.Link onClick={() => updateExpanded(false)} className={isActive("/resume") ? "active" : ""}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
