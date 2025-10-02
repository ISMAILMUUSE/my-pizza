import React, { useState } from "react";

const pizzas = [
  { 
    id: 1, 
    name: "Margherita", 
    price: 8.99, 
    image: "https://cookieandkate.com/images/2021/07/classic-margherita-pizza-548x824.jpg" 
  },
  { 
    id: 2, 
    name: "Pepperoni", 
    price: 10.49, 
    image: "https://tse4.mm.bing.net/th/id/OIP._Tuj6ElUF8jhhcSg41_V_QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
  },
  { 
    id: 3, 
    name: "Veggie", 
    price: 9.25, 
    image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-7-1025x1536.jpg" 
  },
];

export default function PizzaCart() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div style={styles.page}>
      {/* Pizza Menu */}
      <div style={styles.container}>
        <h1 style={styles.title}>🍕 Pizza Menu</h1>
        <div style={styles.pizzaList}>
          {pizzas.map((pizza) => (
            <div key={pizza.id} style={styles.pizzaItem}>
              <img src={pizza.image} alt={pizza.name} style={styles.image} />
              <div style={styles.info}>
                <span style={styles.pizzaName}>
                  {pizza.name} - ${pizza.price}
                </span>
                <button onClick={() => addToCart(pizza)} style={styles.button}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Button */}
      <button style={styles.cartButton} onClick={() => setShowCart(true)}>
        🛒 View Cart ({cart.length})
      </button>

      {/* Cart Sidebar */}
      <div style={{ 
        ...styles.cartSidebar, 
        right: showCart ? "0" : "-350px"  // slide effect
      }}>
        <h2 style={styles.cartTitle}>🛒 Your Cart</h2>
        <button style={styles.closeButton} onClick={() => setShowCart(false)}>
          ❌ Close
        </button>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={styles.cartList}>
            {cart.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                {item.name} - ${item.price}
                <button 
                  onClick={() => removeFromCart(index)} 
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  container: {
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  pizzaList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  pizzaItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px",
    backgroundColor: "#fafafa",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  pizzaName: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  button: {
    padding: "6px 12px",
    backgroundColor: "#ff6347",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    alignSelf: "flex-start",
  },
  cartButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
  cartSidebar: {
    position: "fixed",
    top: "0",
    right: "-350px",
    width: "350px",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "-2px 0 10px rgba(0,0,0,0.3)",
    padding: "20px",
    transition: "right 0.3s ease-in-out",
    zIndex: 1000,
  },
  cartTitle: {
    marginBottom: "15px",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  cartList: {
    listStyle: "none",
    padding: 0,
    margin: "10px 0",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: "8px 12px",
    marginBottom: "8px",
    borderRadius: "6px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "4px 8px",
    cursor: "pointer",
    fontSize: "12px",
  },
};
