/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BooksContext } from "../utils/context";
import { useNavigate } from "react-router-dom";

function BookCreation() {
  const { onCreateBook } = useContext(BooksContext);
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/livres");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPages, setBookPages] = useState("");

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/400" />
      <Card.Body>
        <Card.Title>
          Titre :{" "}
          <input
            id="title"
            type="text"
            onInput={(e) => setBookTitle(e.target.value)}
          ></input>
        </Card.Title>
        <Card.Text>
          Auteur :{" "}
          <input
            type="text"
            onInput={(e) => setBookAuthor(e.target.value)}
          ></input>
          Pages :{" "}
          <input
            type="text"
            onInput={(e) => setBookPages(e.target.value)}
          ></input>
        </Card.Text>
      </Card.Body>
      <Button
        variant="primary"
        onClick={() => {
          onCreateBook({
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

export default BookCreation;
