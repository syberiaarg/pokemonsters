import React from "react";
import { firstLetterUpper, wordSpace } from "src/utils";
import PokemonTypes from "../PokemonTypes";
import "./Pokemon.css";

const Pokemon = ({ pokemon, showCompleteData }) => (
  <div className="pokeData" onClick={() => showCompleteData(pokemon)}>
    <div className="pokeInfo">
      <div className="name">
        <label>
          <strong>{firstLetterUpper(wordSpace(pokemon.name))}</strong>
        </label>
      </div>
      <label className="pokeID">N°: {pokemon.id}</label>
      <PokemonTypes types={pokemon.types} />
      <label>Weight: {pokemon.weight}</label>
      <label>Height: {pokemon.height}</label>
    </div>
    <div className="pokeSprite">
      <img alt="Sprite" src={pokemon.sprite} />
    </div>
  </div>
);

export default Pokemon;
