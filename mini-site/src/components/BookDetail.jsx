/* eslint-disable react/prop-types */
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { BooksContext } from "../utils/context";

function BookDetail({ bookId }) {
  const { books } = useContext(BooksContext);
  const book = books.find(
    (book) => book.id.replace(/^0+/, "") === bookId.replace(/^0+/, "")
  );

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/400" />
      <Card.Body>
        <Card.Title>{book?.title}</Card.Title>
        <Card.Text>
          Auteur : {book?.author}
          Pages : {book?.pages}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookDetail;
