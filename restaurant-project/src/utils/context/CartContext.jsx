import { createContext, useState, useRef, useEffect } from "react";
import { useFetchData } from "../hooks";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
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
    //si le plat est déjà présent, il faut incrémenter la quantité
    console.log("OnAddItemToCart : ", mealToAdd);
    console.log("OnAddItemToCart cartItems BEFORE : ", cartItems);

    const indexIfInCart = cartItems.findIndex(
      (meal) => meal.id === mealToAdd.id
    );

    console.log(indexIfInCart);

    if (indexIfInCart >= 0) {
      await modifyQuantityItem(
        `http://localhost:3000/cart/${mealToAdd.id}`,
        cartItems[indexIfInCart].quantity++
      );
    } else {
      mealToAdd.quantity = 1;
      addCartItem("http://localhost:3000/cart", mealToAdd);
    }
    const newData = await getCartItems("http://localhost:3000/cart");
    setCartItems(newData);
    console.log("OnAddItemToCart cartItems AFTER : ", cartItems);
  }

  async function addCartItem(url = "", meal) {
    try {
      const reponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meal),
      });
      const resultat = await reponse.json();
      console.log("Réussite :", resultat);
    } catch (erreur) {
      console.error("Impossible de récupérer la resource");
    }
  }

  async function modifyQuantityItem(url, newQuantity) {
    console.log("newQuantity : ", newQuantity);
    console.log("url : ", url);
    try {
      const reponse = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          quantity: 4,
        }),
      });
      const resultat = await reponse.json();
      console.log("Réussite :", resultat);
      setData(resultat);
    } catch (erreur) {
      console.error("Impossible de récupérer la resource");
    }
  }

  async function getCartItems(url) {
    const res = await fetch(url);
    try {
      if (res.ok) {
        const dataReceived = await res.json();
        if (dataReceived) {
          return dataReceived;
        }
      } else {
        console.log("pas de data");
      }
    } catch (e) {
      console.error("Impossible de récupérer la resource");
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        onAddItemToCart,
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
