import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";

const Product = () => {
  const { all_product, handleAddToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(
    (product) => product.id === Number(productId)
  );

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Product;
