import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../../utils/context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, onDeleteItemOfCart } = useContext(CartContext);

  console.log(cartItems);

  return (
    <Card>
      <Card.Header>Votre Panier</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          {cartItems?.map((cartItem) => (
            <ListGroup.Item key={cartItem?.id}>
              <CloseButton
                className="btn-sm me-2"
                onClick={() => onDeleteItemOfCart(cartItem)}
              ></CloseButton>
              {cartItem?.title} <br></br>
              <span className="bold">X {cartItem?.quantity}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="d-flex justify-content-center py-3">
          <Link to="/commande">
            <Button variant="primary">Passer la commande</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cart;
