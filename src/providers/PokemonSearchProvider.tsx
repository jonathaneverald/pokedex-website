import React, {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
} from "react";

interface PokemonSearch {
  id: number;
  name: string;
  type: string;
  image: string;
  hp: string;
  attack: string;
  defense: string;
  speed: string;
  special_atk: string;
  special_def: string;
}

interface PokemonSearchContextInterface {
  pokemon: PokemonSearch;
  setPokemon: React.Dispatch<SetStateAction<PokemonSearch>>;
}

export const PokemonSearchContext =
  createContext<PokemonSearchContextInterface>({
    pokemon: {
      id: 0,
      name: "",
      type: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      special_atk: "",
      special_def: "",
    },
    setPokemon: () => {},
  });

export const PokemonSearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokemon, setPokemon] = useState<PokemonSearch>({
    id: 0,
    name: "",
    type: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    special_atk: "",
    special_def: "",
  });
  return (
    <PokemonSearchContext.Provider
      value={{ pokemon: pokemon, setPokemon: setPokemon }}
    >
      {children}
    </PokemonSearchContext.Provider>
  );
};
