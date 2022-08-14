import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon";

const CompletePokemon = ({ pokemon, childToParent }) => {

  const [result, handleResult] = useState(true)

  useEffect(() => {
    childToParent(result)
  }, [result])

  return (result ? (
    <div
      className="moreData"
      onClick={() => handleResult(!result)}>
      <img alt="altSprite" src={pokemon.altsprite} />
      <img alt="otherImage" src={pokemon.image} />
      {pokemon.abilities.map(({ ability }) => (
        <label key={ability.name}>{ability.name}</label>
      ))}
    </div>
  ) : (
    <Pokemon name={pokemon.name} childToParent={childToParent} />
  )
  )
};

export default CompletePokemon;
