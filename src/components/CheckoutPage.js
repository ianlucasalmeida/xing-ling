import React from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart } = useCart();

  // Calcula o total do carrinho
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Finalização da Compra</h2>
      <p className="text-lg mb-6">Confirme os detalhes antes de concluir a compra:</p>
      <ul className="divide-y divide-gray-300 mb-6">
        {cart.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <span>{item.title}</span>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-teal-600">
          Total: R$ {totalPrice.toFixed(2)}
        </p>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={() => alert('Compra realizada com sucesso!')}
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
