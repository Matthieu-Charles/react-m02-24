/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BooksContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

function BookModification({ bookId }) {
  const { books, onModifyBook } = useContext(BooksContext);
  const book = books.find(
    (book) => book.id.replace(/^0+/, "") === bookId.replace(/^0+/, "")
  );
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/livres");
  const [bookTitle, setBookTitle] = useState(book.title);
  const [bookAuthor, setBookAuthor] = useState(book.author);
  const [bookPages, setBookPages] = useState(book.pages);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/400" />
      <Card.Body>
        <Card.Title>
          Titre :{" "}
          <input
            id="title"
            type="text"
            placeholder={book?.title}
            onInput={(e) => setBookTitle(e.target.value)}
          ></input>
        </Card.Title>
        <Card.Text>
          Auteur :{" "}
          <input
            type="text"
            placeholder={book?.author}
            onInput={(e) => setBookAuthor(e.target.value)}
          ></input>
          Pages :{" "}
          <input
            type="text"
            placeholder={book?.pages}
            onInput={(e) => setBookPages(e.target.value)}
          ></input>
        </Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        onClick={() => {
          onModifyBook({
            id: bookId,
            title: bookTitle,
            author: bookAuthor,
            pages: bookPages,
          });
          navigate("/livres");
        }}
      >
        Valider les changements
      </Button>
      <Button variant="secondary" onClick={handleOnClick}>
        Annuler
      </Button>
    </Card>
  );
}

export default BookModification;
