import { useState } from "react";
import "./App.css";
import Cart from "./components/Ecommerce/Cart";
import Products from "./components/Ecommerce/Products";

function App() {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Owl",
      description: "buy owl",
      price: 1000,
      rating: 65,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Owl",
      description: "buy owl",
      price: 1000,
      rating: 65,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Owl",
      description: "buy owl",
      price: 1000,
      rating: 65,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Owl",
      description: "buy owl",
      price: 1000,
      rating: 65,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Owl",
      description: "buy owl",
      price: 1000,
      rating: 65,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1734907865880-6eb669831b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      name: "Owl",
      description: "buy owl",
      price: 1000,
      rating: 65,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    // []
    // setCartItems((cI) => {
    //   const isExisting = cI.find((i) => i.id === product.id);
    //   if (isExisting) {
    //     // true
    //     return cI.map((i) =>
    //       i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
    //     );
    //   }
    //   return [...cI, { ...product, quantity: 1 }];
    // });

    setCartItems((arti) => {
      console.log(arti);
      const exist = arti.find((item) => item.id === product.id);
      // console.log(exist);

      if (exist) {
        return arti.map((item) => {
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return [...arti, { ...product, quantity: 1 }];
    });
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      {products.map((product) => (
        <Products
          product={product}
          onAddToCart={onAddToCart}
          key={product.id}
        />
      ))}
      <Cart items={cartItems} />
    </div>
  );
}

export default App;
