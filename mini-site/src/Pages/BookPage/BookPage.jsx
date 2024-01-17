import useParams from "react";
import BookDetail from "../../components/BookDetail";

function BookPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Page Livre détail : {id}</h1>
      <BookDetail bookId={id}></BookDetail>
    </div>
  );
}

export default BookPage;
