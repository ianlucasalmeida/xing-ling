import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  // Calcula o total do carrinho
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Redireciona para a página de finalização
  };

  if (cart.length === 0) {
    return <p className="text-center text-gray-500 mt-8">O carrinho está vazio.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Seu Carrinho</h2>
      <ul className="divide-y divide-gray-300 mb-6">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>Quantidade: {item.quantity}</p>
              <p className="text-teal-600 font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-teal-600">
          Total: R$ {totalPrice.toFixed(2)}
        </p>
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Realizar Compra
        </button>
      </div>
    </div>
  );
};

export default CartPage;
