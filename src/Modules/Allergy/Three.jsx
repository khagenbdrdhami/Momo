import React from 'react';
import Qr from "../../assets/Qr.png"
function Three() {
  return (
    <div className="flex justify-center items-center   px-4">
      <div className="bg-white p-8  text-center  w-full">
        <h2 className="text-teal-600 font-semibold text-lg mb-2">Scan the QR code</h2>
        <p className="text-gray-600 mb-6">
          You can also check the allergy advices using your phone as well
        </p>
        <div className="flex justify-center mb-4">
          <img
            src={Qr}
            alt="QR Code"
            className="w-40 h-40"
          />
        </div>
        <p className="text-orange-600 font-bold text-xl">
          SCAN <span className="text-black font-normal">ME!</span> 📱
        </p>
      </div>
    </div>
  );
}

export default Three;
