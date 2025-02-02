import React from 'react';

const Hero = () => {
  return (
    <div>
      <section
        className="hero bg-cover bg-center h-screen flex justify-start items-center text-center text-black pl-16"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow-lg animate-fade-in">
            Welcome to Flowers Shop
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Your one-stop shop for the best Flowers
          </p>
          <button className="mt-6 px-6 py-3 bg-red-700 text-black font-bold rounded-md hover:bg-white transition ease-in-out duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
