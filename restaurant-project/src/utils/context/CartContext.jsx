import { createContext, useState, useRef, useEffect } from "react";
import { getItems, addItem, modifyItem, deleteItem } from ".";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

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
  }, []);

  async function onAddItemToCart(mealToAdd) {
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
    const newData = await getItems("http://localhost:3000/cart");
    setCartItems(newData);
  }

  async function onDeleteItemOfCart(mealToDelete) {
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
    setCartItems(newData);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
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
