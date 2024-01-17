import { useParams } from "react-router-dom";
import BookModification from "../../components/BookModification";

function BookModificationPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Page Livre Modification : {id}</h1>
      <BookModification bookId={id}></BookModification>
    </div>
  );
}

export default BookModificationPage;
