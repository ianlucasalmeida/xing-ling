import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ id, name, image, price, category }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price, image, quantity: 1 },
    });
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 hover:shadow-lg flex flex-col">
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">Categoria: {category}</p>
      <p className="text-teal-600 font-bold mt-2">R$ {price.toFixed(2)}</p>
      <div className="mt-auto flex justify-between items-center">
        <Link
          to={`/product/${id}`}
          className="bg-blue-500 text-white text-center py-2 px-4 rounded hover:bg-blue-600"
        >
          Ver Detalhes
        </Link>
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          + Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
