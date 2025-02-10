const ProductCard = ({ product, onBuy }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: product.isStock,
        width: "50%",
        height: "350px",
      }}
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "100%", height: "100px", objectFit: "contain" }}
      />

      <h3>{product.name} </h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => onBuy(product.name)}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
