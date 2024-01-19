import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../utils/context/CartContext";

function MealCard({ meal }) {
  const { onAddItemToCart } = useContext(CartContext);

  return (
    <Card
      className="card-meal"
      onClick={() => {
        onAddItemToCart(meal);
      }}
    >
      <Card.Img variant="top" src={meal?.imageLink} />
      <Card.Body>
        <Card.Title>{meal?.title}</Card.Title>
        <Card.Text>{meal?.presentation}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MealCard;
