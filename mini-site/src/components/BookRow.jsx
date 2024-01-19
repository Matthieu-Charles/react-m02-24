import { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { BooksContext } from "../utils/context";
import { bookReducer } from "./../utils/reducers";

/* eslint-disable react/prop-types */
function BookRow({ book }) {
  const { onDeleteBook } = useContext(BooksContext);

  const [state, dispatch] = useReducer(bookReducer, {
    books: books,
  });

  return (
    <tr>
      <td>
        <Nav.Link as={Link} to={`/livre/${book.id.replace(/^0+/, "")}`}>
          {book.title}
        </Nav.Link>
      </td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>{book.pages}</td>
      <td>
        <Nav.Link
          as={Link}
          to={`/livre/${book.id.replace(/^0+/, "")}/modification`}
        >
          ✏️
        </Nav.Link>
      </td>
      <td onClick={() => onDeleteBook(book.id.replace(/^0+/, ""))}>❌</td>
    </tr>
  );
}

export default BookRow;
