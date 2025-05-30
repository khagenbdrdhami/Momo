import React from 'react'
import { useNavigate } from "react-router-dom";
import back1 from "../../assets/back1.png";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  const navigate=useNavigate();
  return (
    <div>
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
        <div 
                    style={{
                      backgroundImage: `url(${back1})`, 
                      
        
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







    </div>
  )
}

export default Services