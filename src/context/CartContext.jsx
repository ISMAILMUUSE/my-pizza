import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart reducer actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  ADD_ONE: 'ADD_ONE',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ALL_OF_ITEM: 'REMOVE_ALL_OF_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_CART: 'TOGGLE_CART',
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { item } = action.payload;
      const existingItem = state.items.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      }
      
      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }

    case CART_ACTIONS.ADD_ONE: {
      const { itemId } = action.payload;
      return {
        ...state,
        items: state.items.map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case CART_ACTIONS.REMOVE_ITEM: {
      const { itemId } = action.payload;
      const existingItem = state.items.find(item => item.id === itemId);
      
      if (existingItem && existingItem.quantity > 1) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === itemId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== itemId),
      };
    }

    case CART_ACTIONS.REMOVE_ALL_OF_ITEM: {
      const { itemId } = action.payload;
      return {
        ...state,
        items: state.items.filter(item => item.id !== itemId),
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    case CART_ACTIONS.TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
};

// Initial state
const initialState = {
  items: [],
  showCart: false,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Helper function to get cart list as array
  const getCartList = () => {
    return state.items.flatMap(item => 
      Array(item.quantity).fill(null).map((_, index) => ({
        ...item,
        cartIndex: `${item.id}-${index}`,
      }))
    );
  };

  // Actions
  const addToCart = (item) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { item } });
  };

  const increaseQuantity = (itemId) => {
    dispatch({ type: CART_ACTIONS.ADD_ONE, payload: { itemId } });
  };

  const decreaseQuantity = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { itemId } });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { itemId } });
  };

  const removeAllOfItem = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ALL_OF_ITEM, payload: { itemId } });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  const toggleCart = () => {
    dispatch({ type: CART_ACTIONS.TOGGLE_CART });
  };

  const setShowCart = (show) => {
    if (show !== state.showCart) {
      dispatch({ type: CART_ACTIONS.TOGGLE_CART });
    }
  };

  // Computed values
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  const cartList = getCartList();

  const value = {
    // State
    items: state.items,
    cartList, // New: provides the list in array format
    showCart: state.showCart,
    
    // Actions
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    removeAllOfItem,
    clearCart,
    toggleCart,
    setShowCart,
    
    // Computed
    total,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
