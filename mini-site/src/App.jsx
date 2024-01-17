import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import BookTable from "./components/BookTable";
import Profile from "./components/Profile";
import HeaderNav from "./components/HeaderNav";
import { BooksProvider } from "./utils/context";
import BookDetail from "./components/BookDetail";
import BookModification from "./components/BookModification";

const Accueil = () => <h1>Page Accueil</h1>;
const Livres = () => {
  return (
    <div>
      <h1>Page Livres</h1>
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
