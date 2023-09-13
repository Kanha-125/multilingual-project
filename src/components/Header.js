import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { appData } from "../utils/contextApi";
import navLang from "../utils/navbarLangConstants";

function ColorSchemesExample() {
  const { choosenLanguage, setChoosenLanguage } = useContext(appData);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {navLang[choosenLanguage].navBar}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              {navLang[choosenLanguage].home}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {navLang[choosenLanguage].contact}
            </Nav.Link>
            <NavDropdown
              title={navLang[choosenLanguage].Language}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => setChoosenLanguage("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setChoosenLanguage("hindi")}>
                Hindi
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setChoosenLanguage("spanish")}>
                spanish
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default ColorSchemesExample;
