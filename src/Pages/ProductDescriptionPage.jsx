import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CartContext } from "../Context/CartProvider";

function ProductDescriptionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  

  const [discount, setDiscount] = useState(
    location.state?.caloriesPerServing * 0.1
  );

  const [totalPrice, setTotalPrice] = useState(
    location.state?.caloriesPerServing
  );

  const { dispatch } = useContext(CartContext);

  return (
    <div className="p-6  mx-auto space-y-6">
      <div className="flex justify-center gap-6">
        <div className="w-[400px] ">
          <img
            src={location.state?.image}
            alt={location.state?.name}
            className="w-[200px]  rounded-xl shadow"
          />
        </div>

        <div className="  flex flex-col h-[200px]">
          <div>
            <h1 className="text-2xl font-bold">{location.state?.name}</h1>
            <p className="text-lg text-gray-600">
              Price: {location.state?.caloriesPerServing}
            </p>
            <div className="text-lg flex spaxe-x-3 items-center">
              <p className="text-gray-600 ">Quantity: </p>
              <button
                onClick={() => {
                  if (quantity > 1 && quantity <= 10) {
                    setQuantity(quantity - 1);
                    setTotalPrice(
                      (quantity - 1) * location.state?.caloriesPerServing
                    );

                    setDiscount(
                      (quantity - 1) * location.state?.caloriesPerServing * 0.1
                    );
                  }
                }}
                className="bg-gray-500 ml-3 px-4 font-bold rounded-[5px] cursor-pointer hover:bg-gray-400"
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                onClick={() => {
                  if (quantity >= 1 && quantity < 10) {
                    setQuantity(quantity + 1);
                    setTotalPrice(
                      (quantity + 1) * location.state?.caloriesPerServing
                    );

                    setDiscount(
                      (quantity + 1) * location.state?.caloriesPerServing * 0.1
                    );
                  }
                }}
                className="bg-gray-500 px-4 font-bold cursor-pointer rounded-[5px] hover:bg-gray-400"
              >
                +
              </button>
            </div>
            <div>
              <p className="text-gray-600">
                Discount: <span className="text-red-500">Rs.{discount}</span>{" "}
                <span>Off</span>
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                TotalPrice:{" "}
                <span className="line-through text-red-500">{totalPrice}</span>{" "}
                {totalPrice - discount}
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-auto pt-4">
            <button
              onClick={() => {
                dispatch({ type: "AddToCart", payload: { ...location.state } }); //to fetch data at cart provider
                navigate("/cart");
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
            <button 
            onClick={() => {
                       navigate("/payment", { state: { totalAmount: totalPrice-discount } });

                      }}
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-5">
        {location.state?.ingredients && (
          <div className="bg-gray-100 w-[50%] p-4 rounded-xl shadow mt-4">
            <div>
              <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
              <ul className="space-y-2">
                {location.state.ingredients.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaArrowRight className="text-green-500" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {location.state?.instructions && (
          <div className="bg-gray-100 w-[50%] p-4 rounded-xl shadow mt-4">
            <div>
              <h2 className="text-xl font-semibold mb-3">Instructions</h2>
              <ul className="space-y-2">
                {location.state.instructions.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaArrowRight className="text-green-500" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDescriptionPage;
