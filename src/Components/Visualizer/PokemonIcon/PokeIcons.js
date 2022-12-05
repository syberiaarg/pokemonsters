import React from "react";
import './PokeIcons.css'

const PokeIcons = ({ pokemon }) => (
    <div className="background">
        <div className="pokeIcons">
            <img alt="Icon" src={pokemon.icon} />
        </div>
    </div>
)

export default PokeIcons
