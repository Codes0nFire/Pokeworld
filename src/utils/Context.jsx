import axios from './myaxios'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const Pokemoncontext=createContext()

const Context = ({children}) => {

const [pokemon, setpokemon] = useState(null)

const getpokemon=async()=>{

    let {data:{results}}=await axios("/pokemon?limit=1000")

    let pokemonDetails=await Promise.all(

        results.map(async (p)=>{
            const details=await axios.get(p.url)
            return {
                name:p.name,
                url:details.data.sprites.other.dream_world.front_default,
                detailurl:details.data.sprites.other.showdown.back_default,
                type:details.data.types.map(t=>t.type.name),
                stats:{
                    hp:details.data.stats[0].base_stat,
                    attack:details.data.stats[1].base_stat,
                    defence:details.data.stats[2].base_stat,
                    specialattck:details.data.stats[3].base_stat,
                    specialdefence:details.data.stats[4].base_stat,
                    speed:details.data.stats[5].base_stat,

                },
                height: details.data.height,
                weight: details.data.weight
                
            }
        })

    )

    setpokemon(pokemonDetails)
    
   
}


useEffect(() => {
  getpokemon();
}, [])




  return (
    <Pokemoncontext.Provider value={[pokemon, setpokemon]}>
      {children}
    </Pokemoncontext.Provider>
  )
}

export default Context
