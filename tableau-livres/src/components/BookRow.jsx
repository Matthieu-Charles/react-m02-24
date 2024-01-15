function BookRow({ book }) {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publishDate}</td>
      <td>{book.price}</td>
    </tr>
  );
}

export default BookRow;
