import React, { useState, useMemo, useCallback } from 'react';

const Searchbar = () => {
  const [products] = useState([
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 15 },
    { name: 'Item 4', price: 25 },
    { name: 'Gadget 5', price: 30 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = useCallback(
    debounce((term) => {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    }, 300),
    [products]
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search products..."
        className="p-2 border border-gray-300 rounded mb-4"
      />
      <div>
        {filteredProducts.map((product, index) => (
          <div key={index} className="card border p-4 mb-2">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
