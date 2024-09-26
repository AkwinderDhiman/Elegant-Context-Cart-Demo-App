import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  onUpdateCart: () => {},
});

function reducer(state, action) {
return state
  }