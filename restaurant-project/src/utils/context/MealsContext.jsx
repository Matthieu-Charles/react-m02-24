import { createContext, useState, useEffect, useRef } from "react";
import { getItems, addItem } from ".";

export const MealsContext = createContext();

function dynamicSort(ascOrDsc) {
  return function compare(a, b) {
    if (a.title < b.title) {
      return ascOrDsc === "ASC" ? -1 : 1;
    }
    if (a.title > b.title) {
      return ascOrDsc === "ASC" ? 1 : -1;
    }
    return 0;
  };
}

export const MealsProvider = ({ children }) => {
  const [call, setCall] = useState(true);
  const [meals, setMeals] = useState([]);
  const [orderAscOrDesc, setMealsAscOrDesc] = useState("ASC");

  useEffect(() => {
    console.log("Dans useEffect");
    fetch("http://localhost:3000/meals")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
  }, [call]);

  function onSortByNameClick() {
    setMealsAscOrDesc(orderAscOrDesc === "ASC" ? "DESC" : "ASC");
    const mealsOrdered = meals.sort(dynamicSort(orderAscOrDesc));
    setMeals(mealsOrdered);
  }

  // function onDeleteBook(id) {
  //   const modifiedBooks = books.filter(
  //     (book) => book.id.replace(/^0+/, "") != id
  //   );
  //   setBooks(modifiedBooks);
  // }

  // function onModifyBook(modifiedBook) {
  //   const bookToModifyIndex = books.findIndex(
  //     (book) => book.id.replace(/^0+/, "") == modifiedBook.id
  //   );
  //   books[bookToModifyIndex].title = modifiedBook.title;
  //   books[bookToModifyIndex].author = modifiedBook.author;
  //   books[bookToModifyIndex].pages = modifiedBook.pages;
  // }

  function onCreateMeal(newMeal) {
    console.log("dans onCreateMeal : ", newMeal);
    //a compléter :
    const ingredients = [];
    ingredients.push(newMeal.ingredient1);
    newMeal.ingredient2 != "" ? ingredients.push(newMeal.ingredient2) : "";
    newMeal.ingredient3 != "" ? ingredients.push(newMeal.ingredient3) : "";
    newMeal.ingredient4 != "" ? ingredients.push(newMeal.ingredient4) : "";
    console.log(ingredients);
    newMeal.ingredients = ingredients;
    // newMeal.id = meals.length + 1;
    console.log(newMeal);
    //id (auto), imageLink, traiter les ingrédients
    addItem("http://localhost:3000/meals", newMeal);
  }

  // function onNameSearch(searchString) {
  //   if (searchString) {
  //     const modifiedBooks = booksRef.current.filter((book) =>
  //       book.title.toUpperCase().includes(searchString.toUpperCase())
  //     );
  //     setBooks(modifiedBooks);
  //   } else {
  //     setBooks(booksRef.current);
  //   }
  // }

  return (
    <MealsContext.Provider
      value={{
        meals,
        onSortByNameClick,
        orderAscOrDesc,
        // onDeleteBook,
        // onModifyBook,
        onCreateMeal,
        // onNameSearch,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};
