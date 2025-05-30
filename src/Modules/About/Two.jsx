import { useNavigate } from "react-router-dom";

import cook from "../../assets/cook.png";
import { FaArrowRight } from "react-icons/fa";



function Two() {
    const navigate=useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${cook})`,
      }}
      className=" inline-block h-[400px] text-center text-3xl mt-7 text-white bg-cover border-2 bg-no-repeat w-full justify-items-left pl-11"
    >
      <h1 className="text-left mt-52 ">
        <p className="text-3xl">Process behind the making</p>
        <p className="text-2xl">See how only chefs cooks only the best momos</p>
      </h1>
      <div className="bg-teal-700 w-fit text-white px-6 py-2 mt-6 cursor-pointer rounded-3xl hover:bg-teal-800 transition">
        <button
          onClick={() => navigate("/menu")}
          className="flex cursor-pointer items-center gap-x-3 font-medium"
        >
          Explore Our Menu <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Two;
