import React from 'react';

const ProductCard = ({ name, image, price, category }) => (
  <div className="product-card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>Categoria: {category}</p>
    <p>R$ {price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
