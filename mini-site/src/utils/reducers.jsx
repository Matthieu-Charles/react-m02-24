import { ADD_BOOK, DELETE_BOOK } from "./actions";

export function bookReducer(currentState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...currentState,
        books: [...currentState.books, action.payload],
      };
    case DELETE_BOOK:
      return {
        ...currentState,
        todolist: currentState.todolist.filter((t) => t.id !== action.payload),
      };
    default:
      console.error("Action inconnue");
  }
}
