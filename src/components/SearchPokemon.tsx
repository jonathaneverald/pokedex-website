import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pokemonName) {
      setErrorMessage("Pokemon name search input can not be empty!");
      return;
    }
    const lowerCasePokemon = pokemonName.toLowerCase();
    localStorage.setItem("pokemon", lowerCasePokemon);
    setTimeout(() => {
      navigate("/pokemon-card");
    }, 1500);
  };

  useEffect(() => {
    if (errorMessage) {
      const timeoutId = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [errorMessage]);

  return (
    <div className="bg-pokemon-blue border-gray-200 px-4 lg:px-6 py-2.5 flex flex-wrap justify-center items-center">
      <form className="flex flex-col items-center justify-center px-6 py-8">
        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Search Pokemon
        </label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-m rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5"
        />
        {errorMessage && (
          <span className="text-red-800 text-sm font-bold">{errorMessage}</span>
        )}
        <button
          onClick={(e) => onSubmit(e)}
          className="text-white bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-5 py-2.5 text-center"
        >
          Search
        </button>
      </form>
    </div>
  );
};
