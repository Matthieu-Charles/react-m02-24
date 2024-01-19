import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <Navbar expand="lg" className="p-0">
      <Container>
        <Navbar.Brand href="accueil" className="p-0">
          <img
            src="src/assets/logo_restaurant.jpg"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/presentation">
              Présentation
            </Nav.Link>
            <Nav.Link as={Link} to="/carte">
              Carte
            </Nav.Link>
            <Nav.Link as={Link} to="/localisation">
              Localisation
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
