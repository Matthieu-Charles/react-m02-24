import Table from "react-bootstrap/Table";
import BookRow from "./BookRow";
import { useContext } from "react";
import { BooksContext } from "../utils/context";

function BookTable() {
  const { books, onSortByAuthorClick, orderAscOrDesc } =
    useContext(BooksContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th onClick={() => onSortByAuthorClick()}>
            Author <span>{orderAscOrDesc === "ASC" ? "🔽" : "🔼"}</span>
          </th>
          <th>Publish Date</th>
          <th>Number of pages</th>
          <th>Change</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.data.map((book) => (
          <BookRow key={book.id} book={book} />
        ))}
      </tbody>
    </Table>
  );
}

export default BookTable;
