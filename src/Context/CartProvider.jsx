import React, { useReducer } from "react";
import { createContext } from "react";
import { Bounce, toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      //data collect
      //check product if exixt or not
      // if exist dont do anything
      // if not >> add product to the cart array also add{qty key and value}
      // add product to the cart array

      const isExist = state.cart.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExist) {
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };

        toast.success(action.payload.name + " Added to Cart", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        return {
          cart: [...state.cart, newProduct],
        };
      }
    }
    case "Increment": {
      //1.collect id
      //2.chech that id in state or cart
      //3.if given id match with exixting id
      //4.qty increase

      const updateCart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });

      return {
        cart: updateCart,
      };
    }
    case "Decrement": {
      const updateCart = state.cart.map((item) => {
        return item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
      return {
        cart: updateCart,
      };
    }
    case "DeleteCart": {
      //1.collect id through payload or dispatch
      //.filter item except that id which is provided by user
      //3.then return the updated items

      const updateCart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        cart: updateCart,
      };
    }
    case "ClearCart": {
      //1.colllect action type
      //2.return empty array or cart

      return {
        cart: [],
      };
    }

    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
