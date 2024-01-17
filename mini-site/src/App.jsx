import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import BookTable from "./components/BookTable";
import Profile from "./components/Profile";
import HeaderNav from "./components/HeaderNav";
import { BooksContext, BooksProvider } from "./utils/context";
import BookDetail from "./components/BookDetail";
import BookModification from "./components/BookModification";
import Button from "react-bootstrap/Button";
import BookCreation from "./components/BookCreation";
import { useContext } from "react";

const Accueil = () => <h1>Page Accueil</h1>;
const Livres = () => {
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
};
const Livre = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Page Livre détail : {id}</h1>
      <BookDetail bookId={id}></BookDetail>
    </div>
  );
};
const LivreModification = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Page Livre Modification : {id}</h1>
      <BookModification bookId={id}></BookModification>
    </div>
  );
};
const LivreCreation = () => {
  return (
    <div>
      <h1>Page création nouveau livre :</h1>
      <BookCreation></BookCreation>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Page Contact</h1>
      <Profile></Profile>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <HeaderNav />
        <div className="main">
          <BooksProvider>
            <Routes>
              <Route path="/accueil" element={<Accueil />} />
              <Route path="/livres" element={<Livres />} />
              <Route path="/livre/:id" element={<Livre />} />
              <Route
                path="/livre/:id/modification"
                element={<LivreModification />}
              />
              <Route path="/new" element={<LivreCreation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/accueil" />} />
            </Routes>
          </BooksProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
