import React from "react";
import { useNavigate } from "react-router-dom";

export const PokemonDetails = (props: {
  name: string;
  type: string;
  image: string;
  hp: string;
  attack: string;
  defense: string;
  speed: string;
  special_atk: string;
  special_def: string;
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    localStorage.clear();
    navigate("/");
    // setTimeout(() => {
    // }, 500);
  };
  const colors: { [key: string]: string } = {
    normal: "bg-normal",
    fire: "bg-fire",
    water: "bg-water",
    electric: "bg-electric",
    grass: "bg-grass",
    ice: "bg-ice",
    fighting: "bg-fighting",
    poison: "bg-poison",
    ground: "bg-ground",
    flying: "bg-flying",
    psychic: "bg-psychic",
    bug: "bg-bug",
    rock: "bg-rock",
    ghost: "bg-ghost",
    dragon: "bg-dragon",
    dark: "bg-dark",
    steel: "bg-steel",
    fairy: "bg-fairy",
  };
  const style = `max-w-screen-100 mx-auto py-8 px-4 lg:py-16 lg:px-6 ${
    colors[props.type]
  }`;

  return (
    <>
      <div className={style}>
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800 capitalize">
            {props.name}
          </h2>
          <h3 className="text-xl tracking-tight font-bold text-primary-800 capitalize">
            {props.type}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0 flex items-center">
            <img
              className="w-1/2 md:w-full mx-auto size-1/2 object-contain"
              src={props.image}
              alt="Pokemon Pict"
            />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border-2 border-slate-950 rounded-xl">
                <h3 className="text-2xl font-bold text-md mb-6">HP</h3>
                <p className="text-2xl font-bold">{props.hp}</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border-2 border-slate-950 rounded-xl">
                <h3 className="text-2xl font-bold text-md mb-6">Speed</h3>
                <p className="text-2xl font-bold">{props.speed}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border-2 border-slate-950 rounded-xl">
                <h3 className="text-2xl font-bold text-md mb-6">Attack</h3>
                <p className="text-2xl font-bold">{props.attack}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border-2 border-slate-950 rounded-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Special Attack
                </h3>
                <p className="text-2xl font-bold">{props.special_atk}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border-2 border-slate-950 rounded-xl">
                <h3 className="text-2xl font-bold text-md mb-6">Defense</h3>
                <p className="text-2xl font-bold">{props.defense}</p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6 border-2 border-slate-950 rounded-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Special Defense
                </h3>
                <p className="text-2xl font-bold">{props.special_def}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={onClick}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-5 py-2.5 text-center"
        >
          Back
        </button>
      </div>
    </>
  );
};
