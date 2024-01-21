import { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { MealsContext } from "../../utils/context/MealsContext";

function MealRow({ meal }) {
  const { meals } = useContext(MealsContext);

  return (
    <tr>
      <td>
        <Nav.Link as={Link} to={`/meal/${meal.id.replace(/^0+/, "")}`}>
          {meal.title}
        </Nav.Link>
      </td>
      <td>{meal.country}</td>
      <td>{meal.category}</td>
      <td>
        <Nav.Link
          as={Link}
          to={`/meal/${meal.id.replace(/^0+/, "")}/modification`}
        >
          ✏️
        </Nav.Link>
      </td>
      {/* <td onClick={() => onDeleteBook(book.id.replace(/^0+/, ""))}>❌</td> */}
    </tr>
  );
}

export default MealRow;
