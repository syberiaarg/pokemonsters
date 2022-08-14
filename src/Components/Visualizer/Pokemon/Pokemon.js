import React, { useEffect, useState } from "react";
import { showPokemon } from "src/services";
import { firstLetterUpper } from "src/utils";
import CompletePokemon from "../CompletePokemon";
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


const Pokemon = ({ name, url, childToParent }) => {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [completeData, showCompleteData] = useState(false);

  useEffect(() => {
    showPokemon(name).then((data) => setPokemon(data));
  }, [name]);

  return (
    <>
      {!completeData ? (
        <div
          className="pokeData"
          onClick={() => showCompleteData(!completeData)}
        >
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
        </div>
      ) : (
        <CompletePokemon pokemon={pokemon} childToParent={childToParent} />
      )}
    </>
  );
};

export default Pokemon;
