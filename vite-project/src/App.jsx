import "./App.css";
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

  return (
    <>
      <Products product={products} />
    </>
  );
}

export default App;
