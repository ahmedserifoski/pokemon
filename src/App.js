import React, {useState, useEffect} from 'react';
import './App.css';

import Pokemons from "./components/Pokemons"
import Header from "./components/Header"

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=201"
  
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

  useEffect(() => {
    
    // fetching actual data for each pokemon one at a time
    const fetchPokemonData = async () => {
    
      for(let i = 1; i < rawPokeData.length; i++) {
                  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
                  const data = await res.json()
                  setPokeData(prevData => [...prevData, data])
                  console.log(pokeData)
      }
    
    }
    // catually calling the function
    fetchPokemonData()
    
  }, [rawPokeData])

  
  return (
    <div className="App">
      <Header />
      <Pokemons pokeData={pokeData}/>
    </div>
  );
}

export default App;
