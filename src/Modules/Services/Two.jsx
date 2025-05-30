import { useNavigate } from "react-router-dom";
import backed from "../../assets/backed.png";
import { FaArrowRight } from "react-icons/fa";

function Two() {
    const navigate=useNavigate();
  return (
    
    <div 
            style={{
              backgroundImage: `url(${backed})`, 
              

            }}
            className=" inline-block h-[400px] text-center text-3xl text-white bg-cover border-2 bg-no-repeat w-full justify-items-left pl-11"
            >

            <h1 className="text-left mt-52 ">
              <p className="text-3xl">Dine With Us</p>
              <p className="text-2xl">Enjoy our momos in the comfort of your own home with our delivery services</p>
              
            </h1>
           <div className="bg-teal-700 w-fit mt-6 text-white px-6 py-3 rounded-3xl hover:bg-teal-800 transition">
                   <button
                     onClick={() => navigate("/menu")}
                     className="flex items-center gap-x-3 cursor-pointer font-medium"
                   >
                     Explore Our Menu <FaArrowRight />
                   </button>
                 </div>
          </div>
  )
}

export default Two