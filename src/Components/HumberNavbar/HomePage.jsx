// src/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">A One Electronics & AC Center</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-300">About</a></li>
              <li><a href="#products" className="hover:text-blue-300">Products</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-[700px] text-white flex items-center justify-center" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIG3._2sYVo0bwJaZ545nVGUH?w=1024&h=1024&rs=1&pid=ImgDetMain)' }}>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 ">Top Electronics & ACs at Affordable Prices</h2>
          <p className="text-lg mb-6 ">Quality products, exceptional service, and unbeatable prices.</p>
          <a href="#products" className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-700">Shop Now</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
        <p className="text-lg text-center">
          At A One Electronics & AC Center, we specialize in offering a wide range of electronics and air conditioning systems. Our commitment to quality and customer satisfaction is unmatched.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Air Conditioners</h4>
              <p>Top-notch ACs to keep you cool and comfortable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Refrigerators</h4>
              <p>High-efficiency refrigerators for all your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h4 className="text-xl font-semibold mb-4">Home Electronics</h4>
              <p>Quality electronics for your home and office.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2023 A One Electronics & AC Center. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
