import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import AboutUs from "./components/AboutUs";
import PizzaCart from "./components/PizzaCart";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";

function SiteShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      <main className="flex-grow w-full">{children}</main>
      <PizzaCart />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/"
          element={
            <SiteShell>
              <Home />
            </SiteShell>
          }
        />
        <Route
          path="/menu"
          element={
            <SiteShell>
              <Pizza />
            </SiteShell>
          }
        />
        <Route
          path="/about"
          element={
            <SiteShell>
              <AboutUs />
            </SiteShell>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
