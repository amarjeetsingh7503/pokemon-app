import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Pokemon List</h1>
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      <PokemonList pokemonData={filteredPokemon} />
    </div>
  );
};

export default App;
