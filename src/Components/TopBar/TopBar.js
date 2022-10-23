import React from "react";
import { Container, Dropdown, Navbar } from "react-bootstrap";
import logo from "../../assets/whole.png";
import "./TopBar.css";

const TopBar = () => {
  return (
    <Navbar className="d-none d-lg-flex">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <div class="inputSearchContainer">
            <input class="input " type="text" id="input" />
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
              class="image"
              alt="icon"
            />
          </div>
        </Navbar.Collapse>

        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="light"
            style={{
              backgroundColor: "white",
              fontSize: "16px",
            }}
          >
            Create account,{" "}
            <span style={{ color: "#2F6CE5", fontWeight: "700" }}>
              It's free!
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu variant="light">
            <Dropdown.Item href="#register" active>
              Register
            </Dropdown.Item>
            <Dropdown.Item href="#login">Login</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default TopBar;
