import React from "react";
import { firstLetterUpper, wordSpace } from "src/utils";
import './PokeImage.css'

const PokeImage = ({ pokemon, completeData, showCompleteData }) => {

    return (
        <div className="backgroundData">
            <div
                className="teamFullData"
                onClick={() => showCompleteData(!completeData)}>
                <div className="expandedName">
                    <strong>{firstLetterUpper(wordSpace(pokemon.name))}</strong>
                </div>
                <div className="expandedImage">
                    <img alt="anotherOne" src={pokemon.image} />
                </div>
            </div>
            <div className="addingData">
                <div className="addingType">
                    <label className="addingID">N°: {pokemon.id}</label>
                    {pokemon.types.map(({ type }) => (
                        <div
                            className="mappingType"
                            style={{ backgroundColor: `var(--color-${type.name})` }}
                            key={type.name}
                        >
                            <label className="givingType">{firstLetterUpper(type.name)}</label>
                        </div>
                    ))}
                </div>

                <label>Weight: {pokemon.weight}</label>
                {' '}
                <label>Height: {pokemon.height}</label>
            </div>
        </div>

    )
};

export default PokeImage;
