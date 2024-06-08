import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item.jsx";

const Popular = () => {
  // Filtrar los productos que tienen la categoría null
  const nullCategoryProducts = data_product.filter((item) => item.category === "null");

  return (
    <div className="popular">
      <h1>POPULAR EN MUJERES</h1>
      <hr/>
      <div className="popular-item">
        {/* Mapear solo los productos con categoría null */}
        {nullCategoryProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
