import React from 'react';
import { useCart } from '../context/CartContext';

function PizzaCart() {
  const { items, showCart, setShowCart, increaseQuantity, decreaseQuantity, removeAllOfItem, total, itemCount } = useCart();

  if (!showCart) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
        onClick={() => setShowCart(false)}
      >
        {/* Cart Modal */}
        <div 
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-red-600 to-red-700 rounded-t-2xl">
            <h2 className="text-3xl font-bold text-white">🛒 Your Cart</h2>
            <button 
              onClick={() => setShowCart(false)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all text-2xl w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-600 text-xl mb-2">Your cart is empty</p>
                <p className="text-gray-400">Add some delicious items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div 
                    key={item.id} 
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="flex gap-4">
                      {/* Item Image */}
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      {/* Item Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h4>
                          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => decreaseQuantity(item.id)}
                              className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors"
                            >
                              −
                            </button>
                            <span className="font-bold text-gray-800 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => increaseQuantity(item.id)}
                              className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors"
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="text-sm text-gray-500">${item.price} each</p>
                            <p className="text-lg font-bold text-red-600">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => removeAllOfItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm mt-2 self-start transition-colors"
                        >
                          Remove all
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer with Total */}
          {items.length > 0 && (
            <div className="border-t bg-gray-50 rounded-b-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Total items</p>
                  <p className="text-2xl font-bold text-gray-900">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">Total amount</p>
                  <p className="text-3xl font-bold text-red-600">${total}</p>
                </div>
              </div>
              <button 
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PizzaCart;