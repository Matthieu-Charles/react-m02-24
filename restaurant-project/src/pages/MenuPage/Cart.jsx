import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../../utils/context/CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <Card>
      <Card.Header>Votre Panier</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <ListGroup variant="flush">
          {cartItems?.map((cartItem) => (
            <ListGroup.Item key={cartItem?.id}>
              {cartItem?.title}{" "}
              <span className="bold">X {cartItem?.quantity}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart;
