import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import { BooksProvider } from "./utils/context";
import BooksPage from "./Pages/BooksPage/BooksPage";
import ContactPage from "./Pages/ProfilPage/ProfilPage";
import Homepage from "./Pages/Homepage/HomePage";
import BookPage from "./Pages/BookPage/BookPage";
import BookModificationPage from "./Pages/BookModificationPage/BookModificationPage";
import BookCreationPage from "./Pages/BookCreationPage/BookCreationPage";

function App() {
  return (
    <div className="app">
      <Router>
        <HeaderNav />
        <div className="main">
          <BooksProvider>
            <Routes>
              <Route path="/accueil" element={<Homepage />} />
              <Route path="/livres" element={<BooksPage />} />
              <Route path="/livre/:id" element={<BookPage />} />
              <Route
                path="/livre/:id/modification"
                element={<BookModificationPage />}
              />
              <Route path="/new" element={<BookCreationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/accueil" />} />
            </Routes>
          </BooksProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
