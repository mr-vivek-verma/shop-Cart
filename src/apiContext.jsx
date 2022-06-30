import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      console.log(data);
      setProducts(data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        products
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
