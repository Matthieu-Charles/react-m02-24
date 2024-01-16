import Table from "react-bootstrap/Table";
import BookRow from "./BookRow";
import { books } from "../models";

function BookTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publish Date</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow key={book.id} book={book} />
        ))}
      </tbody>
    </Table>
  );
}

export default BookTable;
