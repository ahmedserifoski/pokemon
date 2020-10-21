import React from 'react'

import Pokemon from "./Pokemon"

import "../App.css"

const Pokemons = ({pokeData}) => {
   

    return (
        <div className="pokemons">
            {console.log(pokeData)}
            {pokeData.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon}/>
            ))}
            

        </div>
    )
}

export default Pokemons