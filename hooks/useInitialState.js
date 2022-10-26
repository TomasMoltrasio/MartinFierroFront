import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  cart: cookies.get("cart") || [],
};

const useInitialState = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(initialState);
  }, []);

  const addProduct = (product, quantity) => {
    const newCart = [...state.cart];
    const productInCart = newCart.find(
      (productInCart) => productInCart._id === product._id
    );

    if (productInCart) {
      if (productInCart.garnish === product.garnish) {
        productInCart.quantity += quantity;
      } else {
        newCart.push({ ...product, quantity });
      }
    } else {
      newCart.push({ ...product, quantity });
    }

    cookies.set(
      "cart",
      newCart,
      { path: "/" },
      {
        expires: new Date(Date.now() + 1000 * 60 * 60),
      }
    );

    setState({
      ...state,
      cart: newCart,
    });
  };

  const removeProduct = (product) => {
    const newCart = [...state.cart];
    const productInCart = newCart.find(
      (productInCart) =>
        productInCart._id === product._id &&
        productInCart.garnish === product.garnish
    );

    if (productInCart) {
      productInCart.quantity -= 1;
    }

    if (productInCart.quantity === 0) {
      const index = newCart.indexOf(productInCart);
      newCart.splice(index, 1);
    }

    cookies.set("cart", newCart, { path: "/" }),
      {
        expires: new Date(Date.now() + 1000 * 60 * 60),
      };

    setState({
      ...state,
      cart: newCart,
    });
  };

  const clearCart = () => {
    cookies.set(
      "cart",
      [],
      { path: "/" },
      {
        expires: new Date(Date.now() + 1000 * 60 * 60),
      }
    );

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
