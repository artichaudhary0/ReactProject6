import React from "react";
import ProductList from "./ProductList";

function ProductData() {
  const products = [
    {
      name: "Product 1",
      imageUrl:
        "https://images.unsplash.com/photo-1736329279938-372e9e471795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus voluptas fuga dolor! Fugit quo voluptas omnis necessitatibus odit laboriosam!",
      price: 54345,
    },
    {
      name: "Product 2",
      imageUrl:
        "https://images.unsplash.com/photo-1736329279938-372e9e471795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus voluptas fuga dolor! Fugit quo voluptas omnis necessitatibus odit laboriosam!",
      price: 54345,
    },
    {
      name: "Product 3",
      imageUrl:
        "https://images.unsplash.com/photo-1736329279938-372e9e471795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus voluptas fuga dolor! Fugit quo voluptas omnis necessitatibus odit laboriosam!",
      price: 54345,
    },
  ];
  return <ProductList products={products} />;
}

export default ProductData;
