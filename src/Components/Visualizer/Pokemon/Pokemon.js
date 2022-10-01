import React from "react";
import { firstLetterUpper, wordSpace } from "src/utils";
import PokemonTypes from "../PokemonTypes";
import "./Pokemon.css";
import PropTypes from "prop-types";

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        slot: PropTypes.number,
        type: PropTypes.shape({ name: PropTypes.string }),
      })
    ),
    weight: PropTypes.number,
    height: PropTypes.number,
    sprite: PropTypes.string,
  }),

  showCompleteData: PropTypes.func,
};

Pokemon.defaultProps = {
  pokemon: {
    name: "Pikachu",
    id: 25,
    types: [
      {
        slot: 1,
        type: { name: "electric" },
      },
    ],
    weight: 60,
    height: 4,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },

  showCompleteData: () => { },
};

export default Pokemon;
