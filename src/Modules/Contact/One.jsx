import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const user=[{email: "dilipshrestha554@gmail.com"}]

export default function One() {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl text-teal-700 font-script">Our Contact</h2>
        <p className="text-gray-400 uppercase tracking-widest mt-2">
          Get in touch
        </p>
        <h3 className="text-xl font-semibold mt-2">
          <span className="text-orange-500">Our Friendly Team</span> would love
          to hear from you
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {/* Location */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaMapMarkerAlt className="text-orange-500 text-3xl mx-auto mb-4" />
          <h4 className="text-lg font-semibold mb-2">Location</h4>
          <p className="text-gray-600 leading-relaxed">
            New Baneshwor -41201, <br />
            Kathmandu, Bagmati, Nepal
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaPhoneAlt className="text-orange-500 text-3xl mx-auto mb-4" />
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-gray-600">
            <strong>Mobile:</strong> <br />
            (+977) 980 5689789 <br />
            (+977) 9841 275897
          </p>
          <p className="text-gray-600 mt-2">
            <strong>E-mail:</strong> <br />
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user[0].email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:underline"
            >
              {user[0].email}
            </a>
          </p>
        </div>

        {/* Service Time */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <FaClock className="text-orange-500 text-3xl mx-auto mb-4" />
          <h4 className="text-lg font-semibold mb-2">Service Time</h4>
          <p className="text-gray-600">
            <strong>MON - FRI</strong> <br />8 am - 8 pm
          </p>
          <p className="text-gray-600 mt-2">
            <strong>SAT - SUN</strong> <br />
            Closed
          </p>
        </div>
      </div>
    </section>
  );
}
