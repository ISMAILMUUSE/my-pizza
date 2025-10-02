function PizzaCard({ pizza, onAdd }) {
  return (
    <div style={styles.card}>
      <img src={pizza.image} alt={pizza.name} style={styles.image} />
      <div style={styles.info}>
        <h3>{pizza.name}</h3>
        <p>${pizza.price}</p>
        <button onClick={() => onAdd(pizza)} style={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "12px",
    alignItems: "center",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "6px",
    objectFit: "cover",
  },
  info: {
    flex: 1,
  },
  button: {
    marginTop: "5px",
    padding: "6px 12px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
export default PizzaCard;
