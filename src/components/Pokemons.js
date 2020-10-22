import React from 'react'

import Pokemon from "./Pokemon"

import "../App.css"

const Pokemons = ({pokeData}) => {
   

    return (
        <section className="pokemons">
            {console.log(pokeData)}
            {pokeData.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon}></Pokemon>
            ))}
        </section>
    )
}

export default Pokemons