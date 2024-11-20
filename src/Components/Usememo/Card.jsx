import React, { useState, useMemo } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="p-4 border rounded-md shadow-inner shadow-gray-700 bg-gray-200">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">
        Price: <span className="text-black font-medium">${product.price}</span>
      </p>
      <p className="text-sm text-gray-600 mb-4">
        Quantity: <span className="text-black font-medium">{product.quantity}</span>
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={() => onAddToCart(product.id)}
      >
        Add To Cart
      </button>
    </div>
  );
};

const Card = () => {
  const initialProducts = [
    { id: "1", name: "Product1", price: 10, quantity: 0 },
    { id: "2", name: "Product2", price: 30, quantity: 0 },
    { id: "3", name: "Product3", price: 40, quantity: 0 },
    { id: "4", name: "Product4", price: 80, quantity: 0 },
    { id: "5", name: "Product5", price: 70, quantity: 0 },
    { id: "6", name: "Product6", price: 18, quantity: 0 },
    { id: "7", name: "Product7", price: 26, quantity: 0 },
    { id: "8", name: "Product8", price: 37, quantity: 0 },
  ];
  const [products, setProducts] = useState(initialProducts);

  const totalValue = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  }, [products]);

  const handleAddToCart = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Total Value of Cart: <span className="text-blue-500">${totalValue}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
