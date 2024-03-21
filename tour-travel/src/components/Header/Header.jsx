import React from "react";
import "./Header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

const nav_Links = [
  {
    path: "HomePage",
    display: "HomePage",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "Tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-item-center justify-content-between"></div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
