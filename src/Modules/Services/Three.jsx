import party from "../../assets/party.png";
import back from "../../assets/back.png";
import Qfood from "../../assets/Qfood.png";
import Pparty from "../../assets/Pparty.png";

function Three() {
  return (
    <div>
      <div className="flex flex-row mt-5 gap-x-11 overflow-hidden">
        <div className=" p-6 flex flex-col justify-between  m-auto w-96 shadow-lg rounded-lg">
          <div>
            <div className=" items-center mb-4">
              <div className="">
                <img src={Pparty} alt="" className="w-10 " />
              </div>
              <h2 className=" text-xl font-bold">Private Party</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Lorem facilisis lacus at
              adipiscing. Leo odio tristique ipsum magna lacus viverra
              tincidunt.
            </p>
          </div>
          <div className="flex items-center mt-4 shadow-lg shadow-slate-300 rounded-lg  p-6 pr-2 ">
            <p className="text-teal-500  font-medium">Scan the QR code</p>
            <img src={party} alt="QR Code" className="w-16 h-16 ml-20 " />
          </div>
        </div>
        <div className=" w-[500px] m-auto shadow-lg rounded-lg shadow-slate-300">
          <img
            src={party}
            alt="Private Party"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse mt-5 gap-x-11 overflow-hidden">
        <div className=" p-6 flex flex-col justify-between  m-auto  w-96 shadow-lg rounded-lg">
          <div>
            <div className=" items-center mb-4">
              <div className="">
                <img src={Pparty} alt="" className="w-10 " />
              </div>
              <h2 className=" text-xl font-bold">Private Party</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Lorem facilisis lacus at
              adipiscing. Leo odio tristique ipsum magna lacus viverra
              tincidunt.
            </p>
          </div>
          <div className="flex items-center mt-4 shadow-lg shadow-slate-300 rounded-lg  p-6 pr-2 ">
            <p className="text-teal-500  font-medium">Scan the QR code</p>
            <img src={party} alt="QR Code" className="w-16 h-16 ml-20 " />
          </div>
        </div>
        <div className=" w-[500px] m-auto shadow-lg rounded-lg shadow-slate-300">
          <img
            src={party}
            alt="Private Party"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
     
    </div>
  );
}

export default Three;
