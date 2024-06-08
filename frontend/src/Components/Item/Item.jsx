import React, { useState } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula un retraso con un "Cargando..."
    
    setTimeout(() => {
      setIsLoading(false);
      navigate(`/product/${props.id}`); 
    }, 1000);
  };

  return (
    <div className="item">
      {isLoading && <div className="loading-overlay">Cargando...</div>}
      <a href={`/product/${props.id}`} onClick={handleImageClick}>
        <img src={props.image} alt="" />
      </a>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
