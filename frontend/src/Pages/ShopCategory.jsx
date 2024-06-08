  import React, { useContext, useState } from "react";
  import "./CSS/ShopCategory.css";
  import { ShopContext } from "../Context/ShopContext";
  import dropdown_icon from "../Components/Assets/dropdown_icon.png";
  import Item from "../Components/Item/Item.jsx";
  import { getProductsByCategory } from "../Components/Assets/data.js";

  const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [showMore, setShowMore] = useState(false);
    const [additionalProducts, setAdditionalProducts] = useState([]);

    // Función para manejar el clic en el botón "Explore más"
    const handleShowMore = () => {
      // Obtener los productos adicionales por categoría
      const additionalProducts = getProductsByCategory(props.category);
      setAdditionalProducts(additionalProducts);
      // Mostrar los productos adicionales
      setShowMore(true);
    };

    return (
      <div className="shop-category">
        <img
          className="shopcategory-banner"
          src={props.banner}
          alt="Category banner"
        />
        <div className="shopcategory-indexSort">
          <p>
            <span>Mostrando 1-12</span> de 36 productos
          </p>
          <div className="shopcategory-sort">
            Ordenar por <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product
            .filter((item) => props.category === item.category)
            .map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          {showMore &&
            additionalProducts.map((item, i) => (
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
        {!showMore && (
          <div className="loadmore-container">
          <button onClick={handleShowMore} className="shopcategory-loadmore">
            Ver más
          </button>
          </div>
        )}
      </div>
    );
  };

  export default ShopCategory;
