import React from 'react';

const Evolution = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">Evolution Chain</h1>

      {/* Evolution Chain */}
      <div className="flex flex-wrap justify-center space-x-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" // Bulbasaur
            alt="Bulbasaur"
            className="w-64 h-64 object-cover mb-2" 
          />
          <h2 className="text-3xl font-semibold">Bulbasaur</h2>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" // Ivysaur
            alt="Ivysaur"
            className="w-64 h-64 object-cover mb-2" 
          />
          <h2 className="text-3xl font-semibold">Ivysaur</h2>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" // Venusaur
            alt="Venusaur"
            className="w-64 h-64 object-cover mb-2" 
          />
          <h2 className="text-3xl font-semibold">Venusaur</h2>
        </div>
      </div>
    </div>
  );
};

export default Evolution;
