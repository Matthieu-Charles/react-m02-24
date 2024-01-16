/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { books as bks } from "../../models";

export const BooksContext = createContext();

function dynamicSort(ascOrDsc) {
  return function compare(a, b) {
    if (a.author < b.author) {
      return ascOrDsc === "ASC" ? -1 : 1;
    }
    if (a.author > b.author) {
      return ascOrDsc === "ASC" ? 1 : -1;
    }
    return 0;
  };
}

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(bks);
  const [orderAscOrDesc, setorderAscOrDesc] = useState("ASC");

  function onSortByAuthorClick() {
    setorderAscOrDesc(orderAscOrDesc === "ASC" ? "DESC" : "ASC");
    const booksOrdered = books.sort(dynamicSort(orderAscOrDesc));
    setBooks(booksOrdered);
  }

  return (
    <BooksContext.Provider
      value={{ books, onSortByAuthorClick, orderAscOrDesc }}
    >
      {children}
    </BooksContext.Provider>
  );
};
