import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Section */}
      <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
        <h1 className="text-3xl font-bold text-center">Pokeworld</h1>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/" className="hover:text-green-200">Home</a>
            </li>
            <li>
              <a href="/favorites" className="hover:text-green-200">Favorites</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 mt-24 p-4 overflow-y-auto">
      

        {/* Pokémon List Section */}
        <section className="p-4">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Sample Pokémon Card  */}
            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>



            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>


            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>
            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            <div className="bg-white rounded-lg shadow-2xl p-6 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                alt="Bulbasaur"
                className="w-32 h-32"
              />
              <h4 className="text-lg font-semibold mt-4 text-green-700">Bulbasaur</h4>
              <p className="text-gray-600">Grass/Poison</p>
            </div>

            {/* Additional Pokémon cards can be added here */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white p-4 text-center fixed bottom-0 left-0 w-full z-10 shadow-md">
        <p>&copy; 2024 Pokeworld. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
