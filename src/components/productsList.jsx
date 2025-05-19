import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://qk3j6rqsn4.execute-api.eu-west-1.amazonaws.com/dev/get-products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('API Error:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Catalog</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {products.map(product => (
          <div key={product.productId} style={{ border: '1px solid #ccc', padding: '1rem', width: '250px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
