import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { BooksContext } from "../../utils/context";
import BookTable from "./../../components/BookTable";
import { useNavigate } from "react-router-dom";

function BooksPage() {
  const { onNameSearch } = useContext(BooksContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Livres</h1>
      <div>
        <Button className="primary my-4" onClick={() => navigate("/new")}>
          Ajouter un livre
        </Button>
        <label htmlFor="search" className="mx-4">
          Recherche ouvrage :
          <input
            id="search"
            type="text"
            className="mx-2"
            onInput={(e) => onNameSearch(e.target.value)}
          />
        </label>
      </div>
      <BookTable></BookTable>
    </div>
  );
}

export default BooksPage;
