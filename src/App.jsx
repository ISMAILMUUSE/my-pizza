import React from "react";
import { CartProvider } from "./context/CartContext";
import Pizza from "./components/Pizza";
import PizzaCart from "./components/PizzaCart";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 w-full">
        {/* Main content expands */}
        <main className="flex-grow w-full">
          <Pizza />
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
