import React from "react";
import useInitialState from "hooks/useInitialState";

const CartContext = React.createContext("");

export const CartContextProvider = ({ children }) => {
  const initialState = useInitialState();
  return (
    <CartContext.Provider value={initialState}>{children}</CartContext.Provider>
  );
};

export default CartContext;
