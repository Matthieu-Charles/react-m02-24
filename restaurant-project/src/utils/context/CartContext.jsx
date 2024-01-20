import { createContext, useState, useRef, useEffect } from "react";
import { getItems, addItem, modifyItem, deleteItem } from ".";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [call, setCall] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    console.log("Dans useEffect");
    fetch("http://localhost:3000/cart")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCartItems(data);
      });
  }, [call]);

  useEffect(() => {
    console.log("Dans useEffect2");
    calculateValueOfCart();
  }, [cartItems]);

  function calculateValueOfCart() {
    console.log("calculateValueOfCart");
    let value = 0;
    console.log(cartItems);
    cartItems.forEach(
      (cartItem) => (value = value + cartItem.quantity * cartItem.price)
    );
    console.log(value);
    setCartValue(value);
  }

  async function onAddItemToCart(mealToAdd) {
    console.log("onAddItemToCart");
    const indexIfInCart = cartItems.findIndex(
      (meal) => meal.id === mealToAdd.id
    );
    if (indexIfInCart >= 0) {
      const modifiedItem = { ...cartItems[indexIfInCart] };
      modifiedItem.quantity++;
      await modifyItem(
        `http://localhost:3000/cart/${mealToAdd.id}`,
        modifiedItem
      );
    } else {
      mealToAdd.quantity = 1;
      await addItem("http://localhost:3000/cart", mealToAdd);
    }
    setCall(!call);
  }

  async function onDeleteItemOfCart(mealToDelete) {
    console.log("onDeleteItemOfCart");
    const indexIfInCart = cartItems.findIndex(
      (meal) => meal.id === mealToDelete.id
    );
    if (indexIfInCart >= 0) {
      await deleteItem(`http://localhost:3000/cart/${mealToDelete.id}`);
    } else {
      console.log(
        "L'item demandé pour suppression n'existe pas : ",
        mealToDelete
      );
    }
    const newData = await getItems("http://localhost:3000/cart");
    setCall(!call);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartValue,
        onAddItemToCart,
        onDeleteItemOfCart,
        // onSortByAuthorClick,
        // orderAscOrDesc,
        // onDeleteBook,
        // onModifyBook,
        // onCreateBook,
        // onNameSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
