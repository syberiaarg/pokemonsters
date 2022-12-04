import React, { useEffect, useState } from "react";
import { teamList } from "src/services";
import { Changebutton, Mailbutton } from "src/Components/Button";
import Pokemon from '../../Components/Visualizer/Pokemon'
import './Team.css'


const TeamBuilder = () => {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const [ids, setIds] = useState(Array(4).fill().map(() => getRandomInt(0, 905, 4)));
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        teamList(ids).then((data) => setPokemons(data));
    }, [ids]);


    // ID's 905++ DEVUELVE 404 - NOT FOUND PokeAPI // Manually solved

    const changeTeam = () => {
        setIds(Array(4).fill().map(() => getRandomInt(0, 905, 4)));
    };

    return (
        <div className="listFont">
            <div className="teamList">
                {pokemons.map((pokemon) => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
                <Changebutton string={"Change Your Team"} onClick={changeTeam} />
            </div>
            <Mailbutton string={'Mail Me'} />
        </div>
    );


};

export default TeamBuilder
