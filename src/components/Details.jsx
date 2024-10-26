import React, { useContext, useEffect, useState } from 'react';
import axios from '../utils/myaxios';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const Details = () => {

  const [pokemon, setpokemon] = useState(null)

  const{name}=useParams()

  const getpokemon=async()=>{

    let {data}=await axios(`pokemon/${name}`)

    
    let pokemonDetails= { 
    name:data.name,
    
    detailurl:data.sprites.other.home.front_default,
    
    stats:{
        hp:data.stats[0].base_stat,
        attack:data.stats[1].base_stat,
        defence:data.stats[2].base_stat,
        specialattck:data.stats[3].base_stat,
        specialdefence:data.stats[4].base_stat,
        speed:data.stats[5].base_stat,

    },
    height: data.height,
    weight: data.weight}

    setpokemon(pokemonDetails)
     
    
    
    
   
}


useEffect(() => {
  getpokemon();
}, [])

  


  

  return pokemon ? (
    <div className="min-h-screen flex items-center justify-center bg-white text-white p-6">
      <div className="max-w-lg w-full bg-black rounded-lg shadow-lg p-8">
        {/* Pokémon Image */}
        <div className="flex justify-center mb-6">
          <div className="w-full h-64 bg-white rounded-md shadow-lg   mx-4">
            <img 
              src= {pokemon.detailurl}
              
              className="w-3/4 h-full object-top rounded-md mx-auto"
              
            />
          </div>
        </div>

        {/* Pokémon Name */}
        <h1 className="text-5xl font-medium text-center mb-4 tracking-wide">{pokemon.name}</h1>

        {/* Pokémon Info and Stats */}
        <div className="mt-8">
          <h2 className="text-3xl font-semibold mb-6">Info</h2>
         
          <p className="text-gray-400 text-sm mb-1">Height: {pokemon.height}m</p>
          <p className="text-gray-400 text-sm mb-4">Weight: {pokemon.weight} kg</p>

          {/* Pokémon Stats */}
          <h2 className="text-3xl font-semibold mt-6 mb-4">Stats</h2>
          <ul className="grid grid-cols-2 gap-4 text-lg">
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>HP</span>
              <span>{pokemon.stats.hp}</span>
            </li>
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>Attack</span>
              <span>{pokemon.stats.attack}</span>
            </li>
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>Defense</span>
              <span>{pokemon.stats.defence}</span>
            </li>
            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>Speed</span>
              <span>{pokemon.stats.speed}</span>
            </li>

            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>SpecialAttack</span>
              <span>{pokemon.stats.specialattck}</span>
            </li>

            <li className="flex justify-between text-gray-300 px-4 py-2 bg-gray-800 rounded-md shadow-inner">
              <span>SpecialDefence</span>
              <span>{pokemon.stats.specialdefence}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ):<Loading/>;
};

export default Details;
