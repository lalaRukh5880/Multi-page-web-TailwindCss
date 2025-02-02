import React from 'react';

const Flowers = () => {
  const flowersData = [
    { id: 1, name: "White Rose", price: 500, description: "Specially for Brides", image: "/flower2.png" },
    { id: 2, name: "Real Rose", price: 800, description: "Made with Real Roses", image: "/flower2.png" },
    { id: 3, name: "Rose", price: 500, description: "Rose", image: "/flower2.png" },
    { id: 4, name: "Rose", price: 500, description: "Rose", image: "/flower2.png" },
    { id: 5, name: "Rose", price: 500, description: "Rose", image: "/flower2.png" },
    { id: 6, name: "Rose", price: 500, description: "Rose", image: "/flower2.png" },
  ];

  return (
    <div className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {flowersData.map((flower) => (
          <div
            key={flower.id}
            className="flowers-card bg-white p-5 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110"
            />
            <h3 className="mt-4 text-lg font-semibold">{flower.name}</h3>
            <p className="text-sm text-gray-600">{flower.description}</p>
            <div className="text-xl font-bold text-red-700 mt-2">${flower.price}</div>
            <button className="mt-4 px-4 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-black transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flowers;
