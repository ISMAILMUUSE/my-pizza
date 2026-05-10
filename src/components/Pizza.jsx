import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { pizzas } from '../constants/pizzas';
import PizzaCard from './PizzaCard';
import { useCart } from '../context/CartContext';

function Pizza() {
  const navigate = useNavigate();
  const { addToCart, itemCount, setShowCart } = useCart();

  return (
    <div className="w-full">
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
                className="text-white hover:text-red-500 font-semibold transition-colors duration-200 px-3 py-2 border-b-2 border-red-600"
              >
                Menu
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-gray-300 hover:text-red-500 font-semibold transition-colors duration-200 px-3 py-2 hover:border-b-2 border-red-600"
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
                className="text-white hover:text-red-500 font-semibold text-sm transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-gray-300 hover:text-red-500 font-semibold text-sm transition-colors"
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

      {/* Pizza Menu */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} onAdd={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
