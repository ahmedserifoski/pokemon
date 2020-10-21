import React, {useState, useEffect} from 'react';
import './App.css';

import Pokemons from "./components/Pokemons"
import Header from "./components/Header"

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=4"
  
  const [rawPokeData, setRawPokeData] = useState([])
  const [pokeData, setPokeData] = useState([])
  
  useEffect( () => {

    //fetching the name and image of the pokemon
    const fetchRawPokemon = async () => {
      const res = await fetch(url)
      const data = await res.json()
      
      setRawPokeData(data.results)

      
    }
    fetchRawPokemon()

  }, [])

  // console.log(rawPokeData)

  useEffect(() => {
    const fetchPokemonData = () => {
      rawPokeData.map(async(pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        // console.log(data)
        setPokeData(prevData => [...prevData, data])
      })
    }
    fetchPokemonData()

  }, [rawPokeData])

  // console.log(pokeData)

  return (
    <div className="App">
      <Header />
      <Pokemons pokeData={pokeData}/>
    </div>
  );
}

export default App;
