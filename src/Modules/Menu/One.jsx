import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function One() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="p-6 px-14">
      {product.length > 0 ? (
        <div className="flex flex-wrap justify-around gap-6">
          {product.map((item) => (
            <div
              onClick={() => {
                navigate("/productdescriptionpage", { state: item });
              }}
              key={item.id}
              className="w-[200px] cursor-pointer p-4 flex flex-col bg-white rounded-2xl items-center shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[180px] rounded-[10px]"
              />

              <p className="text-lg mt-2 font-semibold mb-2">{item.name}</p>
              <div className="mt-auto border-t-2 w-full  border-gray-400">
                <h1 className="text-sm text-gray-500">
                  Price:{" "}
                  <span className="text-orange-500 font-bold">
                    {item.caloriesPerServing}
                  </span>
                </h1>
                <h1 className="text-sm text-gray-500">
                  Meal Type: {item.mealType[0]}
                </h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-xl">Loading.......</div>
      )}
    </div>
  );
}

export default One;
