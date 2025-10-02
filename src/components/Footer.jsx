import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Address */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p className="hover:text-red-500 transition">Park Road, Pas 7384</p>
          <p className="hover:text-red-500 transition">Buma Yanyo Estate, CA 95131</p>
          <p>
            Phone:{" "}
            <span className="text-red-600 font-semibold">(+254) 0726 088 998</span>
          </p>
        </div>

        {/* Empty column for balance */}
        <div></div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-5 text-2xl">
            <a
              href="#"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition shadow-sm"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-sky-400 hover:text-white transition shadow-sm"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-pink-500 hover:text-white transition shadow-sm"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-600 font-semibold">Pizza Nairobi</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
