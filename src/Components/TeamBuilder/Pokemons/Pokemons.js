import React, { useEffect, useState } from "react";
import { showPokemon } from "src/services";
import { firstLetterUpper, wordSpace } from "src/utils";
import PokeImage from "./PokeImage";
import "./Pokemons.css";

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


const Pokemons = ({ name, url }) => {
    const [pokemon, setPokemon] = useState(initialPokemon);
    const [completeData, showCompleteData] = useState(true);

    useEffect(() => {
        showPokemon(name).then((data) => setPokemon(data));
    }, [name]);

    return (
        <>
            <div
                className="buildData"
                onClick={() => showCompleteData(!completeData)}>
                <div className="buildInfo">
                    <div className="name">
                        <label>
                            <strong>{firstLetterUpper(wordSpace(name))}</strong>
                        </label>
                    </div>
                    <label className="pokeID">N°: {pokemon.id}</label>
                    <div className="pokeType">
                        {pokemon.types.map(({ type }) => (
                            <div
                                className="type"
                                style={{ backgroundColor: `var(--color-${type.name})` }}
                                key={type.name}
                            >
                                <label>{firstLetterUpper(type.name)}</label>
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
            {!completeData && <PokeImage pokemon={pokemon} completeData={completeData} showCompleteData={showCompleteData} />}
        </>
    )
}

export default Pokemons
