import React, { useEffect, useState } from 'react';
import axios from '../utils/myaxios';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const Details = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  const getPokemon = async () => {
    let { data } = await axios(`pokemon/${name}`);
    const speciesData = await axios(data.species.url);
    const color = speciesData.data.color.name;

    let pokemonDetails = {
      name: data.name,
      detailurl:data.sprites.other.dream_world.front_default,
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defence: data.stats[2].base_stat,
        specialattack: data.stats[3].base_stat,
        specialdefence: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
      },
      height: data.height,
      weight: data.weight,
      color: color
    };

    setPokemon(pokemonDetails);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return pokemon ? (
    <div className="min-h-screen max-h-screen flex items-center justify-center bg-white  p-4 lg:p-6">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-2xl p-4 lg:p-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
        
        {/* Pokémon Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="w-2/3 lg:w-3/4 h-40 lg:h-64 bg-gray-100 rounded-md shadow-lg">
            <img 
              src={pokemon.detailurl}
              alt={pokemon.name}
              className="w-full h-full object-contain rounded-md mx-auto"
            />
          </div>
        </div>

        {/* Pokémon Info and Stats */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-medium text-center lg:text-left mb-2 lg:mb-4 tracking-wide">{pokemon.name}</h1>
          
          <div className="mt-2 lg:mt-4">
            <p className="text-gray-600 text-xs lg:text-sm mb-1">Height: {pokemon.height}m</p>
            <p className="text-gray-600 text-xs lg:text-sm mb-2 lg:mb-4">Weight: {pokemon.weight} kg</p>
          </div>
          
          <ul className="space-y-3 lg:space-y-4 text-base lg:text-lg">
            {Object.keys(pokemon.stats).map((stat) => (
              <li key={stat} className="text-gray-800">
                <div className="flex justify-between">
                  <span className="capitalize">{stat}</span>
                  <span>{pokemon.stats[stat]}</span>
                </div>
                <div className="w-full h-2 lg:h-3 bg-gray-300 rounded-md mt-1 lg:mt-2">
                  <div
                    style={{ width: `${pokemon.stats[stat] * 0.5}%`, backgroundColor: pokemon.color }}
                    className="h-full rounded-md"
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
