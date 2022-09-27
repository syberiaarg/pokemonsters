import React from "react";
import { firstLetterUpper, wordSpace } from "src/utils";
import PokemonTypes from "../PokemonTypes";
import styles from "./PokemonDetail.module.css";

const PokemonDetail = ({ pokemon, showCompleteData }) => {
  return (
    <div className={styles.detail} onClick={() => showCompleteData(null)}>
      <div className={styles.defaultDetail}>
        <div className={styles.avatar}>
          <img alt="avatar" src={pokemon?.image} />
        </div>
        <div className={styles.name}>
          <strong>{`N° ${pokemon?.id} ${firstLetterUpper(
            pokemon?.name
          )}`}</strong>
        </div>
        <PokemonTypes types={pokemon?.types} />
      </div>

      {/*  
        TODO
        <div >
          <img alt="Sprite" src={pokemon?.sprite} />
          <img alt="altSprite" src={pokemon?.altsprite} />
        </div> 
      */}
      {pokemon?.abilities.map(({ ability }) => (
        <div key={ability.name}>
          {wordSpace(firstLetterUpper(ability.name))}
        </div>
      ))}
    </div>
  );
};

export default PokemonDetail;
