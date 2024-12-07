import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CustomerPage = () => {
  const { id } = useParams(); // ID do cliente vindo da URL
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/users/${id}`);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setCustomer(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Carregando perfil...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!customer) return <p className="text-center text-gray-500">Cliente não encontrado.</p>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Perfil do Cliente</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg font-semibold">Nome: {`${customer.name.firstname} ${customer.name.lastname}`}</p>
        <p>Email: {customer.email}</p>
        <p>Usuário: {customer.username}</p>
        <p className="mt-4 font-semibold">Endereço:</p>
        <p>
          {`${customer.address.street}, ${customer.address.city}, ${customer.address.zipcode}`}
        </p>
        <p className="mt-4 font-semibold">Telefone: {customer.phone}</p>
      </div>
    </div>
  );
};

export default CustomerPage;
