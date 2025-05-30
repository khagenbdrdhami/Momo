import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import cart from "../assets/cart.png"

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const price = state.cart.reduce(
    (acc, item) => acc + item.caloriesPerServing * item.qty,
    0
  );
  const discount = price * 0.1;
  const totalPrice = price - discount;

  const totalItem = state.cart.reduce((acc, item) => acc + item.qty, 0);

  const navigate = useNavigate();

  console.log(state.cart);
  return (
    <div>
      <div>
        <div>
          {state.cart.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-[50%] pt-7">
                  <div className="flex justify-around">
                    <p className="text-2xl font-bold text-orange-500 ">
                      OrderItems
                    </p>
                    <button
                      onClick={() => {
                        dispatch({ type: "ClearCart" });
                      }}
                      className="flex items-center space-x-2 text-orange-500 border-2 border-gray-500 cursor-pointer bg-gray-400 p-2 rounded-2xl"
                      type="button"
                    >
                      <MdDeleteForever size={20} />
                      ClearCart
                    </button>
                  </div>
                  {state.cart.map((cart) => {
                    return (
                      <div
                        key={cart.id}
                        className="flex items-center mx-[80px] px-6 p-2 m-2 shadow-2xl shadow-gray-700  bg-gray-200 space-x-7"
                      >
                        <div>
                          <img
                            src={cart.image}
                            className="w-[80px] rounded-[10px]"
                            alt=""
                          />
                        </div>
                        <div>{cart.name}</div>
                        <div className="ml-auto">
                          Rs.{cart.caloriesPerServing}
                        </div>
                        <div className="text-lg flex spaxe-x-3 items-center">
                          <button
                            onClick={() => {
                              dispatch({ type: "Decrement", payload: cart.id });
                            }}
                            className="bg-gray-500 ml-3 px-4 font-bold rounded-[5px] cursor-pointer hover:bg-gray-400"
                          >
                            -
                          </button>
                          <span className="mx-4">{cart.qty}</span>
                          <button
                            onClick={() => {
                              dispatch({ type: "Increment", payload: cart.id });
                            }}
                            className="bg-gray-500 px-4 font-bold cursor-pointer rounded-[5px] hover:bg-gray-400"
                          >
                            +
                          </button>
                          <button className="text-red-600 cursor-pointer text-2xl mx-4">
                            <MdDeleteForever
                              onClick={() => {
                                dispatch({
                                  type: "DeleteCart",
                                  payload: cart.id,
                                });
                              }}
                            />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="w-[50%]  ">
                  <div className="max-w-sm mt-[50px] mx-[100px] border rounded-xl shadow-md p-6 bg-gray-200 space-y-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                      Order Summary
                    </h2>

                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>Rs.{price}</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span>Discount Gained</span>
                      <span>Rs.{discount.toFixed(0)}</span>
                    </div>

                    <div className="flex justify-between text-lg font-semibold text-gray-800">
                      <span>Total</span>
                      <span>Rs.{totalPrice}</span>
                    </div>

                    <button
                      onClick={() => {
                       navigate("/payment", { state: { totalAmount: totalPrice } });

                      }}
                      className="w-full cursor-pointer bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition duration-150"
                    >
                      PROCEED TO CHECKOUT ({totalItem})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex space-y-6 justify-center flex-col items-center">
              <img src={cart} className="w-96" alt="" />
              <h1 className="text-2xl text-orange-500">Cart Is Empty !!!</h1>
              <div 
              onClick={() => navigate("/menu")}
              className="bg-teal-700 w-[250px] text-white px-6 py-3 cursor-pointer rounded-3xl hover:bg-teal-800 transition">
                <button
                  
                  className="flex cursor-pointer items-center gap-x-3 font-medium"
                >
                  Explore Our Menu <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
