import React, { useEffect, useState } from "react";
import { firstLetterUpper, wordSpace } from "src/utils";
import Pokemon from "../Pokemon";

const CompletePokemon = ({ pokemon, completeData, showCompleteData }) => {

  return (
    <div
      className="moreData"
      onClick={() => showCompleteData(!completeData)}>

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
  )
};

export default CompletePokemon;
