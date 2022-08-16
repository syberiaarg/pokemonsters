import React, { useEffect, useState } from "react";
import { firstLetterUpper, wordSpace } from "src/utils";
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

      <div className="bigName">
        <strong>{firstLetterUpper(pokemon.name)}</strong>
      </div>
      <div className="bigSprites">
        <img alt="Sprite" src={pokemon.sprite} />
        <img alt="altSprite" src={pokemon.altsprite} />
      </div>
      <div className="bigImage">
        <img alt="otherImage" src={pokemon.image} />
      </div>

      {pokemon.abilities.map(({ ability }) => (
        <div key={ability.name}>{wordSpace(firstLetterUpper(ability.name))}</div>
      ))}
    </div>
  ) : (

    <Pokemon name={pokemon.name} childToParent={childToParent} />
  )
  )
};

export default CompletePokemon;
