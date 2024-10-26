import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <nav className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              className='w-1/4 cursor-pointer'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzC89UEqNdpV6-2XhfVXHnaEzSLReC14rXQQ&s"
              alt="Pokéball"
            />
            <h1 className='text-white text-center' >Home</h1>
          </Link>
         
        </div>
        <div className="flex-grow max-w-xs flex items-center">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-full p-2 rounded-md text-black outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link onClick={(e)=>setQuery("")} to={`/?pokemon=${query}`} className="ml-2 bg-white text-black px-4 py-2 rounded-md shadow-md hover:bg-gray-200">
            Search
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
