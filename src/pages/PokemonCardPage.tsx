import React, { useState, useEffect, useContext } from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { PokemonDetails } from "../components/PokemonDetails";
import { PokemonSearchContext } from "../providers/PokemonSearchProvider";
import { PokemonNotExist } from "../components/PokemonNotExist";

const PokemonCardPage = () => {
  const { pokemon, setPokemon } = useContext(PokemonSearchContext);
  const [pokemonExist, setPokemonExist] = useState<boolean>(false);

  const searchPokemon = async () => {
    const pokemonName = localStorage.getItem("pokemon");
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;

    const response = await fetch(url);
    if (!response.ok) {
      // throw new Error("Failed to search Pokemon");
      setPokemonExist(false);
    }

    const data = await response.json();
    setPokemon({
      id: data.id,
      name: data.name,
      type: data.types[0].type.name,
      image: data.sprites.other.dream_world.front_default,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      special_atk: data.stats[3].base_stat,
      special_def: data.stats[4].base_stat,
    });
    setPokemonExist(true);
  };

  useEffect(() => {
    searchPokemon();
  }, []);

  return (
    <>
      <HeaderComponent />
      {!pokemonExist && <PokemonNotExist />}
      {pokemonExist && (
        <PokemonDetails
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.image}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          special_atk={pokemon.special_atk}
          special_def={pokemon.special_def}
        />
      )}
    </>
  );
};

export default PokemonCardPage;
