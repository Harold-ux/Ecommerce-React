import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../db/firebaseConfig";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [carritoTotal, setCarritoTotal] = useState(0);
  const [idProducto, setIdProducto] = useState(null); 
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "newProducts"));
        const productsArray = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(productsArray);
        console.log(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (cantidad) => {
    setCarritoTotal((prevTotal) => prevTotal + cantidad);
  };

  const contextValue = {
    all_product,
    products,
    carritoTotal,
    handleAddToCart,
    setCarritoTotal,
    idProducto,
    setIdProducto,
    cartItems,
    setCartItems,
    db
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
