import cook1 from "../../assets/cook1.png";

function One() {
  return (
    <div className="mt-10 mb-10">
    <div className="flex flex-col md:flex-row items-center justify-between mt-10">
      
      <div className="md:w-1/2 text-center md:text-left ml-16">
        <h2 className="text-teal-600 text-5xl mb-8 font-semibold">Our Services</h2>
        <p className="text-gray-600 text-sm mt-2">
          KNOWING OUR CUSTOMERS NEEDS
        </p>
        <p className="text-orange-600 text-3xl font-bold mt-4">
          We're more than just momos.
        </p>
        <p className="text-gray-800 text-3xl mt-2">
          We're a full-service dining experience.
        </p>
      </div>

      
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative">
        <div className="">
          <div className=""></div>
          <img
            src={cook1}
            alt="Chef"
            className="w-[400px]"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default One