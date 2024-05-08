import React from "react";
import { HeaderComponent } from "../components/HeaderComponent";
import { ShowAllPokemon } from "../components/ShowAllPokemon";
import { SearchPokemon } from "../components/SearchPokemon";

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <SearchPokemon />
      <ShowAllPokemon />
    </>
  );
}
