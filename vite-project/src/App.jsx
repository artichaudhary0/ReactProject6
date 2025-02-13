import { useState } from "react";
import "./App.css";
import Cart from "./components/Ecommerce/Cart";
import Products from "./components/Ecommerce/Products";
import NavBar from "./components/Ecommerce/NavBar";

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

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // [1,2,3] setCart
  const onAddToCart = (product) => {
    // 6 => prod.id
    setCartItems((value) => {
      // cart = [{id : 1}]
      let alreadyEsiting = value.find((item) => item.id === product.id);

      if (alreadyEsiting) {
        return value.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...value, { ...product, quantity: 1 }];
    });
  };

  const onCardRemove = (productId) => {
    setCartItems((e) => e.filter((item) => item.id !== productId));
  };

  const onRemove = (productId) => {
    setCartItems((e) => {
      return e
        .map((item) => {
          console.log(item);
          console.log(productId);
          if (item.id === productId) {
            console.log(item.quantity);
            return { ...item, quantity: item.quantity - 1 }; // 1
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <NavBar cartCount={cartItemCount} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      <Cart items={cartItems} onRemove={onRemove} onCardRemove={onCardRemove} />
    </div>
  );
}

export default App;
