import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const handleBuyButton = (productName) => {
    alert(`You have bought ${productName}`);
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onBuy={handleBuyButton}
          />
        ))
      ) : (
        <h1>No product</h1>
      )}
    </div>
  );
};

export default ProductList;