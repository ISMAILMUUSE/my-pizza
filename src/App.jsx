import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import AboutUs from "./components/AboutUs";
import PizzaCart from "./components/PizzaCart";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 w-full">
        {/* Main content expands */}
        <main className="flex-grow w-full">
          {currentPage === 'home' ? (
            <Home onNavigate={setCurrentPage} />
          ) : currentPage === 'menu' ? (
            <Pizza onNavigate={setCurrentPage} />
          ) : (
            <AboutUs onNavigate={setCurrentPage} />
          )}
        </main>

        {/* Cart component */}
        <PizzaCart />

        {/* Footer full width at bottom */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
