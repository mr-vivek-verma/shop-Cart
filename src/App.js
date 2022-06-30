import React from "react";
import "./styles.css";
import { APIContextProvider } from "./apiContext";
import ProductList from "./ProductList";
// import ProductCard from "./productCard";

export default function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <h1>This is Products list</h1>
        <ProductList />
      </div>
    </APIContextProvider>
  );
}
