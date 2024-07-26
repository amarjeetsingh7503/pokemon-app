import React from 'react';

export default function PokemonCard({ id, name }){
  return (
    <div className="card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt={name}
      />
      <h2>{name}</h2>
    </div>
  );
};