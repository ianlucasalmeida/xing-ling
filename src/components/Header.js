import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-4 px-8 flex justify-between items-center">
      {/* Nome da Loja */}
      <h1 className="text-2xl font-bold">
        <Link to="/">Xing-Ling</Link>
      </h1>

      {/* Links do Menu */}
      <div className="flex gap-6 items-center">
        {/* Link para o Carrinho */}
        <Link to="/cart" className="relative">
          <FiShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>

        {/* Link para o Perfil */}
        <Link to="/customer/1" className="hover:underline text-lg font-semibold">
          Meu Perfil
        </Link>
      </div>
    </header>
  );
};

export default Header;
