import React, {useState} from 'react'

import "../App.css"



const Pokemon = ({pokemon}) => {

    const [showData, setShowData] = useState(true)
    const [showDetails, setShowDetails] = useState(false)

    const getPokeData = (data) => {

    }

    return (
        <div  className="pokemon">
            <img onMouseOver={() => getPokeData(pokemon)} src={pokemon.sprites.front_default} alt=""/>
            <h4>{pokemon.name}</h4>
            <p>#{pokemon.id}</p>
            <ul>{pokemon.types.map(type => (
                    <li key={type.type.name}>{type.type.name}</li>
            ))}</ul>
        </div>
    )
}

export default Pokemon
