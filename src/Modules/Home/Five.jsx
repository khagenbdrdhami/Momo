import girl from "../../assets/girl.png";
function Five() {
  return (
    <div className="flex mt-10">
      <div className="w-96  ml-80 mt-20 mb-10">
        <p className="text-3xl">
          200+
          <span className="text-orange-600 ml-2">Happy Customers</span>
        </p>
        <p className="text-green-900 text-xl">
        What our customers say about us
        </p>
        <p className="mt-10 mb-5">
          “Only the best momo you can find in the market. Different Varieties of
          momo to choose from. Will be visiting again soon”
        </p>
        <p className="text-xl">Dilip Shrestha</p>
      </div>
      <div className="w-96 ml-56">
        <img src={girl} alt="" className="" />

      </div>
    </div>
  );
}

export default Five;
