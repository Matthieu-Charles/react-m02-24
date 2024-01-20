import { useContext } from "react";
import { MealsContext } from "../../utils/context/MealsContext";
import Cart from "../MenuPage/Cart";

function OrderPage() {
  const { meals } = useContext(MealsContext);

  return <Cart />;
}

export default OrderPage;
