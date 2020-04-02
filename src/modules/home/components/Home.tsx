import React, { useEffect, useState } from 'react';
import { getPokemon } from '../api';
import { Pokemon } from '../types';

export const Home = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    (async () => {
      const response = await getPokemon('ditto');
      const pokemon = response.parsedBody;
      if (pokemon) {
        setPokemon(pokemon);
      }
    })();
  }, []);
  return (
    <div>
      {!pokemon && <span>Loading...</span>}
      {pokemon && <div>{pokemon.name}</div>}
    </div>
  );
};
