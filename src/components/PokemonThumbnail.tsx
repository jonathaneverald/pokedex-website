import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const PokemonThumbnail = (props: {
  id: string;
  name: string;
  image: string;
  type: string;
}) => {
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
  const style = `flex flex-col items-center ${
    colors[props.type]
  } max-w-full w-85 shadow-md rounded-xl p-3 duration-500 hover:scale-105 hover:shadow-xl`;

  const navigate = useNavigate();
  const onClick = () => {
    localStorage.setItem("pokemon", props.name);
    setTimeout(() => {
      navigate("/pokemon-card");
    }, 1500);
  };

  return (
    <div className={style}>
      <img
        className="size-2/3 object-contain rounded-t-xl"
        src={props.image}
        alt={props.name}
      />
      <div className="detail-wrapper px-4 py-3 w-72 font-serif">
        <span className="text-black-500 mr-3 uppercase text-xs font-bold">
          ID : #{props.id}
        </span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {props.name}
        </p>
        <p className="text-black-500 mr-3 capitalize text-x">
          Type : {props.type}
        </p>
      </div>
      <button
        onClick={onClick}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm m-2 px-5 py-2.5 text-center"
      >
        Details
      </button>
    </div>
  );
};

export default PokemonThumbnail;
