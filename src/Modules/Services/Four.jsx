
import { FaArrowRight } from "react-icons/fa";

function Four() {
  return (
    <div className="flex flex-col w-[800px] m-auto items-center gap-y-4 mt-12 mb-12">
      <p className="font-bold text-2xl">Got any Queries?</p>
      <p className="text-slate-400">
        If you have any queries, send us a message. Our Friendly team would love
        to hear from you
      </p>
      <div className="bg-teal-700 text-white px-6 py-3 rounded-3xl hover:bg-teal-800 transition">
        <button
          onClick={() => navigate("/menu")}
          className="flex items-center gap-x-3 cursor-pointer font-medium"
        >
          Explore Our Menu <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Four;
