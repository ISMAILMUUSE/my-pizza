import React from 'react';

function PizzaCard({ pizza, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pizza.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{pizza.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-red-600">${pizza.price}</span>
          <button
            onClick={() => onAdd(pizza)}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;