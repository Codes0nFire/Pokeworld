import React from 'react';

const Details = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-lg w-full bg-gray-900 rounded-lg shadow-lg p-8">
        {/* Pokémon Image with Glow */}
        <div className="flex justify-center mb-6">
          <div className="w-full h-64 bg-white rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out mx-4">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" // Sample image of Bulbasaur
              alt="Bulbasaur"
              className="w-full h-full object-cover rounded-md"
              style={{ padding: '0 50px' }} // Adds padding to create the gap
            />
          </div>
        </div>

        {/* Pokémon Name */}
        <h1 className="text-5xl font-extrabold text-center mb-4 tracking-wide">Bulbasaur</h1>

        {/* Pokémon Info and Stats */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-6">Info</h2>
          <p className="text-gray-400 text-sm mb-1 capitalize">Type: Grass, Poison</p>
          <p className="text-gray-400 text-sm mb-1">Height: 0.7 m</p>
          <p className="text-gray-400 text-sm mb-4">Weight: 6.9 kg</p>

          {/* Pokémon Stats */}
          <h2 className="text-3xl font-semibold mt-6 mb-4">Stats</h2>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>HP</span>
              <span>45</span>
            </li>
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>Attack</span>
              <span>49</span>
            </li>
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>Defense</span>
              <span>49</span>
            </li>
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>Speed</span>
              <span>45</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
