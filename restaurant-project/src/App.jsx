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
import MenuModificationPage from "./pages/MenuModificationPage/MenuModificationPage";
import FooterNav from "./components/FooterNav";
import { MealsProvider } from "./utils/context/MealsContext";
import { CartProvider } from "./utils/context/CartContext";
import MealCreationPage from "./pages/MealCreationPage/MealCreationPage";
import MealModificationPage from "./pages/MealModificationPage/MealCreationPage";
import AuthProvider from "./utils/context/authentication/AuthProvider";
import Login from "./utils/context/authentication/Login";
import SignUp from "./utils/context/authentication/SignUp";
import PrivateRoute from "./utils/context/authentication/PrivateRoute";

function App() {
  return (
    <div className="app">
      <MealsProvider>
        <CartProvider>
          <AuthProvider>
            <Router>
              <HeaderNav />
              <div className="main w-80">
                <Routes>
                  <Route path="/accueil" element={<Homepage />} />
                  <Route path="/presentation" element={<PresentationPage />} />
                  <Route path="/carte" element={<MenuPage />} />
                  <Route path="/localisation" element={<FindUsPage />} />
                  <Route path="/commande" element={<OrderPage />} />
                  <Route
                    path="/gestion"
                    element={
                      <PrivateRoute>
                        <MenuModificationPage />
                      </PrivateRoute>
                    }
                  />
                  <Route path="/new" element={<MealCreationPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route
                    path="/meal/modification/:id"
                    element={
                      <PrivateRoute>
                        <MealModificationPage />
                      </PrivateRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/accueil" />} />
                </Routes>
              </div>
              <FooterNav />
            </Router>
          </AuthProvider>
        </CartProvider>
      </MealsProvider>
    </div>
  );
}

export default App;
