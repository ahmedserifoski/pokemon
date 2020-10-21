import React, {useState} from 'react'

import "../App.css"



const Pokemon = ({pokemon}) => {

    return (
        <div 
            className="pokemon"
            // onMouseEnter={() => setShowData(false)}
            // onMouseLeave={() => setShowData(true)}
        >
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
                        <p>{pokemon.height}</p>
                        <p>{pokemon.weight}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
