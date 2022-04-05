import React, { useEffect, useState } from "react";
import { firstLetterUpper } from "src/utils";
import "./Pokemon.css";

const initialPokemon = {
  id: 0,
  name: "",
  types: [],
  weight: 0,
  height: 0,
  sprite: "",
  image: "",
  abilities: [],
};

const Pokemon = ({ name, url }) => {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [completeData, showCompleteData] = useState(false);

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
          sprite: data.sprites.front_default,
          altsprite: data.sprites.back_default,
          image: data.sprites.other.dream_world.front_default,
          abilities: data.abilities,
        });
      });
  }, []);

  return (
    <div className="pokeData" onClick={() => showCompleteData(!completeData)}>
      <div className="pokeInfo">
        <div className="name">
          <label>
            <strong>{firstLetterUpper(name)}</strong>
          </label>
        </div>
        <label>N°: {pokemon.id}</label>
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
        <img alt="Sprite" src={pokemon.sprite} />
      </div>
      <div className="moreInfo">
        {completeData && (
          <div className="moreData">
            <img alt="altSprite" src={pokemon.altsprite} />
            <img alt="otherImage" src={pokemon.image} />
            {pokemon.abilities.map(({ ability }) => (
              <div key={ability.name}>{ability.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;
