import cook1 from "../../assets/cook1.png";

function One() {
  return (
    <div className="mt-10 mb-10">
    <div className="flex items-center justify-between mt-10">
      
      <div className="md:w-1/2 text-center md:text-left ml-16">
        <h2 className="text-teal-600 text-5xl mb-8 font-semibold">Allergy Advice</h2>
        <p className="text-gray-600 text-sm mt-2">
          AT OUR RESTAURANT
        </p>
        <p className=" text-3xl font-bold mt-4">
          We use only the freshest and highest quality ingredients in all our dishes, 

        </p>
        <p className="text-orange-600 font-bold text-3xl mt-2">
          and offer transparency in our ingredient labeling.
        </p>
      </div>

      
      <div className="w-1/2 flex justify-center mt-6 relative">
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