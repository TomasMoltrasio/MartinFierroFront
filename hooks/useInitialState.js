import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addProduct = (product, quantity) => {
    const newCart = [...state.cart];
    const productInCart = newCart.find(
      (productInCart) => productInCart._id === product._id
    );

    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }

    setState({
      ...state,
      cart: newCart,
    });
  };

  const removeProduct = (product) => {
    const newCart = [...state.cart];
    const productInCart = newCart.find(
      (productInCart) => productInCart._id === product._id
    );

    if (productInCart) {
      productInCart.quantity -= 1;
    }

    if (productInCart.quantity === 0) {
      const index = newCart.indexOf(productInCart);
      newCart.splice(index, 1);
    }

    setState({
      ...state,
      cart: newCart,
    });
  };

  const clearCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };

  return {
    state,
    addProduct,
    removeProduct,
    clearCart,
  };
};

export default useInitialState;
