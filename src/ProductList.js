import React from "react";
import { useAPI } from "./apiContext";

export default function ProductList() {
  const { products } = useAPI();
  console.log(products);
  return (
    <ul>
      {products.map((u) => (
        <li key={u.id}>
          {u.title}
          {u.price}
          {u.category}
          {u.image}
        </li>
      ))}
    </ul>
  );
}
