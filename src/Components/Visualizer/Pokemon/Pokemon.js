import React, { useEffect, useState } from "react";
import { firstLetterUpper } from "src/utils";
import "./Pokemon.css";

const initialPokemon = {
  id: 0,
  name: "",
  types: [],
  weight: 0,
  height: 0,
  image: "",
};

const Pokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(initialPokemon);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon({
          id: data.id,
          name: name,
          types: data.types,
          weight: data.weight,
          height: data.height,
          image: data.sprites.front_default,
        });
      });
  }, []);

  return (
    <div className="pokeData">
      <div className="pokeInfo">
        <label id="name">{firstLetterUpper(name)}</label>
        <label>ID: {pokemon.id}</label>
        <div className="pokeType">
          {pokemon.types.map(({ type }) => (
            <div
              className="type"
              style={{ backgroundColor: `var(--color-${type.name})` }}
            >
              <label key={type.name}>{firstLetterUpper(type.name)}</label>
            </div>
          ))}
        </div>
        <label>Weight: {pokemon.weight}</label>
        <label>Height: {pokemon.height}</label>
      </div>
      <div className="pokeSprite">
        <img alt="Sprite" src={pokemon.image} />
      </div>
    </div>
  );
};

export default Pokemon;
