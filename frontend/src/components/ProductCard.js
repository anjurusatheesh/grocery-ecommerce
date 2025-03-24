import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-lg font-bold text-green-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
