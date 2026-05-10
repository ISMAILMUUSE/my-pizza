import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

function AboutUs() {
  const navigate = useNavigate();
  const { itemCount, setShowCart } = useCart();

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-red-950/90 border-b border-red-900/40 shadow-lg backdrop-blur-sm py-6 px-4 md:px-8 lg:px-12 sticky top-0 z-40">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => navigate('/')} className="text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white hover:text-red-500 transition-colors">🍕 Pizza Nairobi</h1>
              <p className="text-white text-sm md:text-lg hidden md:block">Delicious Pizzas, Delivered Fast</p>
            </button>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-red-500 font-semibold transition-colors duration-200 px-3 py-2 hover:border-b-2 border-red-600"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/menu')}
                className="text-gray-300 hover:text-red-500 font-semibold transition-colors duration-200 px-3 py-2 hover:border-b-2 border-red-600"
              >
                Menu
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-white hover:text-red-500 font-semibold transition-colors duration-200 px-3 py-2 border-b-2 border-red-600"
              >
                About Us
              </button>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Navigation */}
            <nav className="md:hidden flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="text-gray-300 hover:text-red-500 font-semibold text-sm transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/menu')}
                className="text-gray-300 hover:text-red-500 font-semibold text-sm transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-white hover:text-red-500 font-semibold text-sm transition-colors"
              >
                About
              </button>
            </nav>

            <button
              type="button"
              onClick={() => navigate('/login')}
              aria-label="Sign in"
              title="Sign in"
              className="shrink-0 rounded-full p-1.5 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FaUserCircle className="text-[1.35rem] sm:text-xl" aria-hidden />
            </button>
            
            {/* Cart Icon with Count */}
            <button
              onClick={() => setShowCart(true)}
              className="relative bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <span className="text-xl">🛒</span>
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pizza Nairobi</h1>
          <p className="text-xl text-red-100">Crafting delicious moments, one slice at a time</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        
        {/* Story Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to Pizza Nairobi, where passion meets flavor! We started our journey with a simple vision: 
              to serve the most delicious, authentic pizzas and burgers in Nairobi using only the freshest ingredients.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Since our opening, we've been dedicated to crafting each pizza with love and attention to detail. 
              Our chefs bring years of experience and a commitment to quality that you can taste in every bite.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              From our classic Margherita to our signature BBQ Chicken Pizza, every item on our menu is made 
              fresh daily with premium ingredients sourced from trusted local suppliers.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide exceptional food experiences by combining traditional recipes with modern flavors, 
              delivered with outstanding service to every customer.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-700 leading-relaxed">
              Quality, freshness, and customer satisfaction are at the heart of everything we do. 
              We believe great food brings people together and creates lasting memories.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍕</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fresh Ingredients</h4>
              <p className="text-gray-600">We use only the freshest, highest quality ingredients in every dish.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Quick and reliable delivery service, hot and fresh to your door.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Chefs</h4>
              <p className="text-gray-600">Our skilled chefs bring passion and expertise to every meal.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg shadow-lg p-8 md:p-10 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-xl mb-6 text-red-100">Experience the best pizza in Nairobi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254726088998" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Us: (+254) 0726 088 998
            </a>
            <a 
              href="mailto:info@pizzanairobi.com" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

