import React from 'react';

const Two = () => {
  return (
    <div className="min-h-screen flex  px-7 bg-white">
      {/* Map Section */}
      <div className="w-full md:w-1/2 h-96  md:h-auto">
        <iframe
          className="w-full rounded-xl h-full"
          src="https://www.google.com/maps?q=New%20Baneshwor,%20Kathmandu,%20Bagmati,%20Nepal&output=embed"
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-600">
            If you have any queries, send us a message. Our friendly team would love to hear from you.
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>What can we do for you</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="flex gap-2">
              <span className="flex items-center px-4 bg-gray-200 rounded-md">+977</span>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-fit bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-7 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Two;
