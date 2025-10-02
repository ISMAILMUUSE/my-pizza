import React from "react";

function Pizza() {
  const pizza = {};

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Header */}
      <header className="w-full bg-black shadow-lg py-4 px-6 flex items-center gap-6">
        <h1 className="text-2xl font-bold">🍕 Pizza Restuarant</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-6">
        <div className="bg-gray-900 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            {/* Add pizza content here */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pizza;
