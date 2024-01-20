import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../utils/context/CartContext";

function HeaderNav() {
  const { cartItems, cartValue, onDeleteItemOfCart } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="p-0">
      <Container>
        <Navbar.Brand className="p-0">
          <Link to="/accueil">
            <img
              src="src/assets/logo_restaurant.jpg"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
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
        <Nav>
          <Nav.Link as={Link} to="/commande">
            <Button variant="secondary">🛒 Mon Panier : {cartValue}€</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
