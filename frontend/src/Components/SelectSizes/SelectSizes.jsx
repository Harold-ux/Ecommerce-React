import React, { useState } from "react";
import "../ProductDisplay/ProductDisplay.css";

const SelectSizes = ({ onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(null); // Cambiado de selectedSizes a selectedSize

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const toggleSize = (size) => {
    setSelectedSize(selectedSize === size ? null : size); // Cambiado de setSelectedSizes a setSelectedSize
    onSizeChange(selectedSize === size ? null : size); // Notifica a ProductDisplay sobre el cambio
  };

  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <div
          key={size}
          className={`size-box ${selectedSize === size ? "selected" : ""}`} // Cambiado de selectedSizes a selectedSize
          onClick={() => toggleSize(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default SelectSizes;
