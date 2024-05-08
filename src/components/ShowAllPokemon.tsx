import React, { useState, useEffect } from "react";
import PokemonThumbnail from "./PokemonThumbnail";

export const ShowAllPokemon = () => {
  const [allPokemons, setAllPokemons] = useState<any[]>([]);
  const [loadMore, setLoadMore] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const fetchAllPokemons = async () => {
    const response = await fetch(loadMore);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon");
    }
    const data = await response.json();

    setLoadMore(data.next);

    const fetchPokemon = data.results.map(async (pokemon: any) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      return response.json();
    });
    const createPokemonObject = await Promise.all(fetchPokemon);
    setAllPokemons((oldPokemons) => [...oldPokemons, ...createPokemonObject]);
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  return (
    <>
      <div className="pokemon-container">
        <div className="pokemon-cards w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {allPokemons.map((pokemon) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
            />
          ))}
        </div>
        <button
          onClick={fetchAllPokemons}
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Load more Pokemons...
        </button>
      </div>
    </>
  );
};
