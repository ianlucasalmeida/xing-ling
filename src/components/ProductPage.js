import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

  if (loading) return <p className="text-center text-gray-500">Carregando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-500">Produto não encontrado.</p>;

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain mx-auto md:w-48 md:h-48"
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <div className="mt-6">
          <p className="text-2xl text-teal-600 font-bold">
            R$ {product.price.toFixed(2)}
          </p>
          <div className="flex items-center mt-4 gap-4">
            <label htmlFor="quantity" className="text-gray-700 font-semibold">
              Quantidade:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 p-2 border rounded"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
