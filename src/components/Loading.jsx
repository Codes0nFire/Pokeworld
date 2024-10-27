import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" // Charmeleon sprite
          alt="Loading"
          className="scale-150 w-32 h-32 mb-4 animate-pulse" 
        />
        <h2 className="text-xl font-semibold text-black">Loading Pokémon...</h2>
        
      </div>
    </div>
  );
};

export default Loading;
