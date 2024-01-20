import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Homepage from "./pages/Homepage/Homepage";
import PresentationPage from "./pages/PresentationPage/PresentationPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import FindUsPage from "./pages/FindUsPage/FindUsPage";
import FooterNav from "./components/FooterNav";
import { MealsProvider } from "./utils/context/MealsContext";
import { CartProvider } from "./utils/context/CartContext";

function App() {
  return (
    <div className="app">
      <Router>
        <HeaderNav />
        <div className="main w-80">
          <MealsProvider>
            <CartProvider>
              <Routes>
                <Route path="/accueil" element={<Homepage />} />
                <Route path="/presentation" element={<PresentationPage />} />
                <Route path="/carte" element={<MenuPage />} />
                <Route path="/localisation" element={<FindUsPage />} />
                <Route path="/commande" element={<OrderPage />} />
                <Route path="*" element={<Navigate to="/accueil" />} />
              </Routes>
            </CartProvider>
          </MealsProvider>
        </div>
        <FooterNav />
      </Router>
    </div>
  );
}

export default App;
