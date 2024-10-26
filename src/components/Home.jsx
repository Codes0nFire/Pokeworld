import React, { useContext } from 'react';
import { Pokemoncontext } from '../utils/Context';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const Home = () => {

 

const [pokemon]=useContext(Pokemoncontext)



console.log("Thisb is pokemon from home page:",pokemon)



  
  return pokemon ? (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <h1 className="text-3xl font-bold text-center">Pokeworld</h1>
        <nav className="mt-2">
          {/* <ul className="flex justify-center space-x-4">
            <li>
              <a href="/" className="hover:text-green-200">Home</a>
            </li>
            <li>
              <a href="/favorites" className="hover:text-green-200">Favorites</a>
            </li>
          </ul> */}
        </nav>
      </header>

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
              <p className="text-red-600">{p.type[0]}{p.type[1]?"/":""}{p.type[1]}</p>
            </Link>
            })}




            

            
          </div>
        </section>
      </main>

      
      <footer className="bg-black text-white p-4 text-center fixed bottom-0 left-0 w-full z-10 shadow-md">
        <p>&copy; 2024 Pokeworld. All rights reserved.</p>
      </footer>
    </div>
  ):<Loading/>;
};

export default Home;
