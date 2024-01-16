/* eslint-disable react/prop-types */
function BookRow({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.year}</td>
      <td>{book.pages}</td>
      <td></td>
      <td></td>
    </tr>
  );
}

export default BookRow;
