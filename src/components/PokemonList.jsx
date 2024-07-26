import React from 'react';
import PokemonCard from './PokemonCard';

export default function PokemonList({ pokemonData }) {
  return (
    <div className="card-container">
      {pokemonData.map(pokemon => {
        const id = pokemon.url.split('/').slice(-2, -1)[0];
        return <PokemonCard key={id} id={id} name={pokemon.name} />;
      })}
    </div>
  );
};