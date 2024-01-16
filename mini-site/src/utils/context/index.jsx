/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { books as bks } from "../../models";

export const BooksContext = createContext();

function compareASC(a, b) {
  if (a.author < b.author) {
    return -1;
  }
  if (a.author > b.author) {
    return 1;
  }
  return 0;
}

function compareDSC(a, b) {
  if (a.author > b.author) {
    return -1;
  }
  if (a.author < b.author) {
    return 1;
  }
  return 0;
}

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(bks);
  const [orderAscOrDesc, setorderAscOrDesc] = useState("ASC");

  function onSortByAuthorClick() {
    const orderState = orderAscOrDesc === "ASC" ? "DESC" : "ASC";
    const booksOrdered = books.sort(
      orderState === "ASC" ? compareDSC : compareASC
    );
    setBooks(booksOrdered);
    setorderAscOrDesc(orderState);
  }

  return (
    <BooksContext.Provider
      value={{ books, onSortByAuthorClick, orderAscOrDesc }}
    >
      {children}
    </BooksContext.Provider>
  );
};
