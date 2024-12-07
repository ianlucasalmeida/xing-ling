import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, image, price, category }) => (
  <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg flex flex-col">
    <img
      src={image}
      alt={name}
      className="h-48 w-full object-contain mb-4 rounded-md"
    />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-500">Categoria: {category}</p>
    <p className="text-teal-600 font-bold mt-2">R$ {price.toFixed(2)}</p>
    <Link
      to={`/product/${id}`}
      className="mt-auto bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600"
    >
      Ver detalhes
    </Link>
  </div>
);

export default ProductCard;
