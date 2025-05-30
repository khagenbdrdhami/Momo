import React from "react";
import man from "../../assets/man.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Third() {
    const navigate=useNavigate();
  return (
    <div className="flex mb-10">
      <div className="w-[50%] flex justify-center">
        <img src={man} className="w-[300px]" alt="" />
      </div>
      <div className="w-[50%] flex items-center">
        <div className="w-[400px]  space-y-3">
            <p className="text-2xl font-bold">Why Customers <span className="text-orange-500">Love Us</span></p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
          fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
          dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
          cursus turpis.
        </p>
        <div className="bg-teal-700 w-[250px] text-white px-6 py-3 cursor-pointer rounded-3xl hover:bg-teal-800 transition">
                <button
                  onClick={() => navigate("/menu")}
                  className="flex cursor-pointer items-center gap-x-3 font-medium"
                >
                  Explore Our Menu <FaArrowRight />
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Third;
