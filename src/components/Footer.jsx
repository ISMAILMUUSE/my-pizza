import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white mt-20 w-full overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🍕</span>
              <h2 className="text-3xl font-bold text-white">Pizza Nairobi</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving the most delicious pizzas, burgers, and more. Fresh ingredients, authentic flavors, delivered fast to your door.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-sky-400 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-pink-500 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-red-600 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-red-500 transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-red-600 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Park Road, Pas 7384</p>
                  <p className="text-gray-300">Buma Yanyo Estate, CA 95131</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-red-500 flex-shrink-0" />
                <a href="tel:+254726088998" className="text-gray-300 hover:text-red-500 transition-colors">
                  (+254) 0726 088 998
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-red-500 flex-shrink-0" />
                <a href="mailto:info@pizzanairobi.com" className="text-gray-300 hover:text-red-500 transition-colors">
                  info@pizzanairobi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-red-600 pb-2 inline-block">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white font-semibold">10:00 - 22:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white font-semibold">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white font-semibold">12:00 - 21:00</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-red-600/20 rounded-lg border border-red-500/30">
              <p className="text-sm text-gray-300 flex items-center gap-2">
                <FaClock className="text-red-500" />
                <span>We deliver 24/7!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-red-500 font-semibold">Pizza Nairobi</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
