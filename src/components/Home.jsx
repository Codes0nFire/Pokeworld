import React, { useContext, useEffect, useState } from 'react';
import { Pokemoncontext } from '../utils/Context';
import Loading from './Loading';
import { Link, useLocation } from 'react-router-dom';
import axios from '../utils/myaxios';
import Header from './Header';


const Home = () => {

 

const { pokemon, setpokemon, copypokemon, setcopypokemon }=useContext(Pokemoncontext)





let {search,pathname}=useLocation();

const getPokemon = async () => {
  try {
    let { data } = await axios(`pokemon/${search.split('=')[1]}`);
  
  let singlepokemonDetails = [{
    name: data.name,
    url: data.sprites.other.dream_world.front_default,
    type:data.types.map(t=>t.type.name),
  }];
   
  setpokemon(singlepokemonDetails);
  alert("Pokemon Found")
  } catch (error) {
    alert("No Such pokemons exist please check for any spelling mistakes!!")
    
  }
  
};

useEffect(() => {
  if (search != "" ){
    getPokemon()
  }
  else{
    setpokemon(copypokemon)
  }
  
}, [search]);






console.log(pokemon)




  
  return pokemon ? (
    <div className="min-h-screen flex flex-col " >
      {/* Header Section */}
       <Header/>
      {/* Main Content Section */}
      <main className="flex-1 mt-24 p-4 overflow-y-auto">
      

        {/* Pokémon List Section */}
        <section className="p-4">
       
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/*Pokémon Card  */}
            
            {pokemon && pokemon.map((p,i)=>{
              return <Link to={`/detail/${p.name}`} key={i} className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src={p.url}
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">{p.name.toUpperCase()}</h4>
              <p className="text-red-600">{p.type[0]?p.type[0]:""}{p.type[1]?"/":""}{p.type[1]}</p>
            </Link>
            })}




            

            
          </div>
        </section>
      </main>

      
      {/* <footer style={{ backgroundColor: '#FFD700' }} className=" text-white p-4 text-center fixed bottom-0 left-0 w-full z-10 shadow-md">
        <p>&copy; 2024 Pokeworld. All rights reserved.</p>
      </footer> */}
    </div>
  ):<Loading/>;
};

export default Home;
