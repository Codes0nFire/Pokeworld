import React, { useContext, useEffect } from 'react';
import { Pokemoncontext } from '../utils/Context';
import Loading from './Loading';
import { Link, useLocation } from 'react-router-dom';
import axios from '../utils/myaxios';
import Header from './Header';
import { toast } from 'react-toastify';

const Home = () => {
  const { pokemon, setpokemon, copypokemon } = useContext(Pokemoncontext);
  let { search } = useLocation();

  const getPokemon = async () => {
    if (search.split('=')[1] === "") return;
    try {
      let { data } = await axios(`pokemon/${search.split('=')[1]}`);
      let singlepokemonDetails = [{
        name: data.name,
        url: data.sprites.other.dream_world.front_default,
        type: data.types.map(t => t.type.name),
      }];
      setpokemon(singlepokemonDetails);
    } catch (error) {
      toast.error("No Pokémon found. Please check the spelling.");
    }
  };

  useEffect(() => {
    if (search !== "") getPokemon();
    else setpokemon(copypokemon);
  }, [search]);

  return pokemon ? (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-24 p-4 overflow-y-auto">
        <section className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pokemon.map((p, i) => (
              <Link to={`/detail/${p.name}`} key={i}  className="bg-white rounded-lg shadow-2xl p-4 lg:p-6 flex flex-col items-center">
                <img  src={p.url} alt={p.name}
                 className="w-28 h-28 lg:w-32 lg:h-32 transition-transform duration-300 transform hover:scale-125" />
                <h4  className="text-lg font-semibold mt-4">{p.name.toUpperCase()}</h4>
                <p style={{color:`${p.color}`}} >{p.type.join("/")}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  ) : <Loading />;
};

export default Home;
