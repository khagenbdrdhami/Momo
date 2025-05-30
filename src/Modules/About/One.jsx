import Agirl from "../../assets/Agirl.png";

function One() {
  return (
    <div>
      <div className="flex  ">
        <div className="w-96 m-auto ">
          <h1 className="text-6xl font-serif text-green-900">About Us</h1>
          <p className="text-slate-300 mt-10 mb-6">WE PRIDE OURSELF ON</p>
          <p className="text-3xl"><span className="text-orange-600">Our authentic momo recipes</span> passed down through generations</p>
        </div>

        <div className=" w-[50%] ">
          <img src={Agirl}  alt="" className=" w-96 m-auto" />
        </div>
      </div>
    </div>
  );
}

export default One;
