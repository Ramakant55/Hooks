import React, { useState, useMemo } from 'react';

const productsData = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
  { id: 3, name: "Product 3", price: 20 },
  { id: 4, name: "Product 4", price: 25 },
  { id: 5, name: "Product 5", price: 30 },
  { id: 6, name: "Product 6", price: 35 },
  { id: 7, name: "Product 7", price: 40 },
  { id: 8, name: "Product 8", price: 45 },
  { id: 9, name: "Product 9", price: 50 },
  { id: 10, name: "Product 10", price: 55 }
];

const ProductList = () => {
  const [cart, setCart] = useState({});

  const totalValue = useMemo(() => {
    return Object.values(cart).reduce((total, quantity, index) => {
      const product = productsData[index];
      return total + (product.price * quantity);
    }, 0);
  }, [cart]);

  const addToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1
    }));
  };

  return (
    <div>
      <h2>Total Value: ${totalValue}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {productsData.map((product) => (
          <div key={product.id} style={{
            border: '1px solid black',
            padding: '10px',
            backgroundColor: 'lightgreen',
            borderRadius: '5px',
            textAlign: 'center',
            width: '150px'
          }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {cart[product.id] || 0}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
