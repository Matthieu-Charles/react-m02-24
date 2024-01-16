import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookTable from "./components/BookTable";
import Profile from "./components/Profile";
import HeaderNav from "./components/HeaderNav";
import { BooksProvider } from "./utils/context";

const Accueil = () => <h1>Page Accueil</h1>;
const Livres = () => {
  return (
    <div>
      <h1>Page Livres</h1>
      <BookTable></BookTable>
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
