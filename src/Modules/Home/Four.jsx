import back from "../../assets/back.png";
import Qfood from "../../assets/Qfood.png";
import Pparty from "../../assets/Pparty.png";
import cate from "../../assets/cate.png";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Four() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-10 mb-10 ">
        <h1 className="text-3xl text-center  ">
          <span className="text-3xl text-orange-600  ">We Offer People </span>
          The Service They Want
        </h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${back})`,
        }}
        className="bg-gradient-to-t from-black to-white inline-block h-[500px] text-center text-white bg-cover border-2 bg-no-repeat w-full justify-items-center"
      >
        <h1 className="text-center justify-items-center mt-52 text-slate-300">
          <p className="text-3xl">Process behind the making</p>
          <p className="text-2xl">
            See how only chefs cooks only the best momos
          </p>
        </h1>
        <div className="bg-teal-700 w-[250px] text-white px-6 py-3 mt-10 cursor-pointer rounded-3xl hover:bg-teal-800 transition">
          <button
            onClick={() => navigate("/menu")}
            className="flex cursor-pointer items-center gap-x-3 font-medium"
          >
            Explore Our Menu <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="text-center flex flex-row justify-items-center m-20 ml-72 ">
        <div className="justify-items-center  ml-14 w-64 ">
          <img src={Qfood} alt="" className="w-20  " />
          <h1 className="text-3xl mt-5 mb-5">Quality Food</h1>
          <p>Only the best food with top quality products and ingredients</p>
        </div>
        <div className="justify-items-center w-64 ml-14 ">
          <img src={Pparty} alt="" className="w-20 " />
          <h1 className="text-3xl mt-5 mb-5">Private Party</h1>
          <p>Only the best food with top quality products and ingredients</p>
        </div>
        <div className="justify-items-center w-64 ml-14 ">
          <img src={cate} alt="" className="w-20 h-20 " />
          <h1 className="text-3xl mt-5 mb-5">Catering</h1>
          <p>Only the best food with top quality products and ingredients</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-teal-700 w-[250px] text-white px-6 py-3 cursor-pointer flex rounded-3xl hover:bg-teal-800 transition">
        <button
          onClick={() => navigate("/menu")}
          className="flex cursor-pointer  items-center gap-x-3 font-medium"
        >
          Explore Our Menu <FaArrowRight />
        </button>
      </div>
      </div>
    </div>
  );
}

export default Four;
