import { useNavigate } from "react-router-dom";
import circle from "../../assets/circle.png";
import Momo from "../../assets/momo.png";
import one from "../../assets/one.jpg";
import { FaArrowRight } from "react-icons/fa";

function First() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex  ">
        <div className=" w-[50%] flex justify-center mt-20  p-2 ">
          <div className="space-y-4 flex flex-col w-[300px]">
            <p className="text-gray-500">RESTAURANT</p>
            <h1 className="text-4xl space-y-4">
              The
              <span
                className=" bg-center bg-size-[100px]  inline-block text-white items-center px-3 bg-no-repeat "
                style={{ backgroundImage: `url(${one})` }}
              >
                #one
              </span>
              <br /> Momo Restaurant
            </h1>
            <p className="font-semibold">
              More than <span className="text-orange-500">20+ Varieties </span>{" "}
              of momo available for you
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

        <div className="flex w-[50%] overflow-hidden justify-end  ">
          <img className="h-[500px]   -mt-5 " src={circle} alt="" />
          <img
            className="h-72   absolute  top-44 right-[40px]"
            src={Momo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default First;
