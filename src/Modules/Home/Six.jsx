import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,

} from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Six() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-1">
          Get <span className="text-orange-500">In Touch</span>
        </h2>
        <p className="text-center font-bold text-teal-700 mb-6">
          Our Friendly team would love to hear from you
        </p>
      </div>
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl flex overflow-hidden">
        <div className="w-1/2 bg-teal-800 text-white p-8 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <FaMapMarkerAlt /> Our Address
          </h3>
          <p>New Baneshwor, Kathmandu, Bagmati, Nepal</p>

          <h3 className="text-xl font-bold flex items-center gap-2 mt-6">
            <FaPhoneAlt /> Our Contacts
          </h3>
          <div className="pl-6 flex space-x-14">
            <p>
              <strong>Mobile</strong>
              <br />
              980 5689789
              <br />
              9841 275897
            </p>
            <p>
              <strong>Landline</strong>
              <br />
              01-4783972
            </p>
          </div>

          <h3 className="text-xl font-bold flex items-center gap-2 mt-6">
            <FaClock /> Our Service Time
          </h3>
          <div className="pl-6 flex space-x-14">
            <p>
              <strong>MON - FRI</strong>
              <br />
              10 am - 8 pm
            </p>
            <p>
              <strong>SAT - SUN</strong>
              <br />
              Closed
            </p>
          </div>

          <div className="pt-10">
            <p>Get in touch in social networks</p>
            <div className="flex flex-row gap-x-5 mt-5">
              <NavLink to="https://facebook.com" target="_">
                <CiFacebook className=" text-white cursor-pointer rounded-full size-8" />
              </NavLink>
              <NavLink to="https://instagram.com" target="_">
                <AiFillTikTok className="rounded-full cursor-pointer size-8" />
              </NavLink>
              <NavLink to="https://tiktok.com" target="_">
                <FaSquareInstagram className="rounded-full cursor-pointer size-8" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-white p-10">
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-3 border rounded-md"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />

            <select className="w-full p-3 border rounded-md text-gray-500">
              <option>What can we do for you</option>
              <option>Support</option>
              <option>Sales Inquiry</option>
              <option>Partnership</option>
            </select>

            <div className="flex gap-2">
              <select className="p-3 border rounded-md">
                <option>+977</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 border rounded-md"
            ></textarea>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-[450px] mt-6 overflow-hidden shadow-md">
        <iframe
          title="Google Map - New Baneshwor"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.216126325407!2d85.34512381506138!3d27.703553932773692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198e338f1f6f%3A0x2d893a899d9730f1!2sNew%20Baneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1614975040000!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default Six;
