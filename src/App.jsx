import React from "react";
import "./App.css";
import Pizza from "./components/pizza.jsx";
import PizzaCart from "./components/PizzaCart.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Main content expands */}
      <main className="flex-grow flex justify-center items-start py-10">
        <div className="w-full max-w-4xl px-4">
          <Pizza />
          <PizzaCart />
        </div>
      </main>

      {/* Footer full width at bottom */}
      <Footer />
    </div>
  );
}

export default App;
