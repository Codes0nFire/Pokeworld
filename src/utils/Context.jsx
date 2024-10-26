import axios from './myaxios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useLocation } from 'react-router-dom'


export const Pokemoncontext=createContext()

const Context = ({children}) => {

const [pokemon, setpokemon] = useState(null)
const [copypokemon, setcopypokemon] = useState(null)

const getpokemon=async()=>{

    let {data:{results}}=await axios("/pokemon?limit=1302")
    

    let pokemonDetails=await Promise.all(

        results.map(async (p)=>{
            const details=await axios.get(p.url)
            return {
                name:p.name,
                url:details.data.sprites.other.dream_world.front_default,
                detailurl:details.data.sprites.other.showdown.back_default,
                type:details.data.types.map(t=>t.type.name),
                
                
            }
        })

    )

    setpokemon(pokemonDetails)
    setcopypokemon(pokemonDetails)
    
   
}


useEffect(() => {
  getpokemon();
}, [])






  return (
    <Pokemoncontext.Provider value={{ pokemon, setpokemon, copypokemon, setcopypokemon }}>
      {children}
    </Pokemoncontext.Provider>
  )
}

export default Context
