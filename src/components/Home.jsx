import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaPizzaSlice, FaChevronDown, FaFire, FaUserCircle } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const { itemCount, setShowCart } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreMenu = () => {
    navigate('/menu');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="w-full bg-red-950/55 backdrop-blur-md shadow-lg border-b border-red-900/40 py-4 px-4 md:px-8 lg:px-12 sticky top-0 z-50 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPizzaSlice className="text-red-500 text-3xl animate-spin-slow" />
              <h1 className="text-xl md:text-2xl font-bold text-white">🍕 Pizza Nairobi</h1>
            </div>
            <p className="text-white/80 text-sm hidden md:block">Delicious Pizzas, Delivered Fast</p>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden md:flex items-center gap-4">
              <button
                onClick={handleExploreMenu}
                className="text-white hover:text-red-400 font-semibold transition-all duration-200 px-4 py-2 hover:scale-110"
              >
                Menu
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-gray-300 hover:text-red-400 font-semibold transition-all duration-200 px-4 py-2 hover:scale-110"
              >
                About Us
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
            
            <button
              onClick={() => setShowCart(true)}
              className="relative bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="text-xl">🛒</span>
              <span className="hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-12 py-20">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className={`text-center md:text-left space-y-6 md:space-y-8 z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30 mb-4 animate-pulse">
              <FaFire className="text-red-500 animate-pulse" />
              <span className="text-red-300 font-semibold text-sm">Fresh & Hot Daily</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              <span className="block animate-slide-up">Experience</span>
              <span className="block text-red-400 animate-slide-up-delay">Authentic Italian</span>
              <span className="block animate-slide-up-delay-2">Pizza Magic</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto md:mx-0">
              Handcrafted with passion, fresh ingredients, and authentic Italian recipes. 
              Every bite is a journey to Naples.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                onClick={handleExploreMenu}
                className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Menu
                  <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              
              <button
                onClick={() => navigate('/about')}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full text-lg border-2 border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-red-400">50+</div>
                <div className="text-sm text-gray-300">Pizza Varieties</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">10K+</div>
                <div className="text-sm text-gray-300">Happy Customers</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-orange-400">30min</div>
                <div className="text-sm text-gray-300">Fast Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={`relative z-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Image container with parallax effect */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <img 
                  src="/home photo.jpg" 
                  alt="Delicious Pizza" 
                  className="w-full h-[500px] md:h-[600px] object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-md rounded-full p-4 animate-bounce-slow">
                  <FaPizzaSlice className="text-yellow-400 text-3xl" />
                </div>
                <div className="absolute bottom-20 left-10 bg-red-500/80 backdrop-blur-md rounded-full px-4 py-2 text-white font-bold animate-pulse">
                  🔥 Hot Deal
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <FaChevronDown className="text-white/60 text-2xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 px-4 md:px-8 lg:px-12 bg-black/30 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🍕', title: 'Fresh Ingredients', desc: 'Sourced daily from local farms' },
              { icon: '⏱️', title: 'Fast Delivery', desc: 'Hot pizza in 30 minutes or less' },
              { icon: '👨‍🍳', title: 'Expert Chefs', desc: 'Trained in authentic Italian cuisine' },
            ].map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl mb-4 animate-bounce-slow">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

