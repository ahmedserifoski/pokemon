import React from 'react'

import "../App.css"

const Pokemon = ({pokemon}) => {

    return (
        <div className="pokemon">
            <div className="pokemon-inner">
                <div className="pokemon-front"  >
                    <p className="id"># {pokemon.id}</p>
                    <img className="image" src={pokemon.sprites.front_default} alt=""/>
                    <h3 className="name">{pokemon.name}</h3>
                    <div className="list">{pokemon.types.map(type => (
                            <span key={type.type.name}>{type.type.name} </span>
                    ))}</div>
                </div>
                <div className="pokemon-back">
                        <p className="weight">height: {pokemon.weight / 10}cm</p>
                        <p className="height">weight: {pokemon.height * 10}kg</p>
                        <p className="base_experience">base experience: {pokemon.base_experience}</p>
                        <div className="stats">{pokemon.stats.map(stat => (
                            <div key={stat.stat.name}><p className="inline">{stat.stat.name}: </p> <p className="inline">{stat.base_stat}</p></div>
                        ))}</div>
                        
                </div>
            </div>
        </div>
    )
}

export default Pokemon
