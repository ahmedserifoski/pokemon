import React from 'react'

import "../App.css"

const Pokemon = ({pokemon}) => {

    return (
        <div className="pokemon">
            <div className="pokemon-inner">
                <div className="pokemon-front"  >
                    <img className="image" src={pokemon.sprites.front_default} alt=""/>
                    <h3 className="name">{pokemon.name}</h3>
                    <p className="id">#{pokemon.id}</p>
                    <ul className="list">{pokemon.types.map(type => (
                            <li key={type.type.name}>{type.type.name}</li>
                    ))}</ul>
                </div>
                <div className="pokemon-back">
                        <p className="heigth">Weight: {pokemon.height * 10}kg</p>
                        <p className="weight">Height: {pokemon.weight / 10} cm</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
