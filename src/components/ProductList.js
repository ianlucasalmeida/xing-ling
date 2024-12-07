import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Erro ao carregar os produtos.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="product-grid">
      {products.slice(0, 10).map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          image={product.image}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductList;
