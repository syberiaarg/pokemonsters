import React, { useEffect, useState } from "react";
import { teamList } from "src/services";
import { Changebutton, Mailbutton } from "src/Components/Button";
import Pokemons from '../../Components/TeamBuilder/Pokemons'
import './Team.css'


const TeamBuilder = () => {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const [ids, setIds] = useState(Array(4).fill().map(() => getRandomInt(0, 1000, 4)));
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        teamList(ids).then((data) => setPokemons(data));
    }, [ids]);


    const changeTeam = () => {
        setIds(Array(4).fill().map(() => getRandomInt(0, 1000, 4)));
    };

    return (
        <div className="listFont">
            <div className="teamList">
                {pokemons.map(({ name, url }) => (
                    <Pokemons key={name} name={name} url={url} />
                ))}
                <Changebutton string={"Change Your Team"} onClick={changeTeam} />
            </div>
            <Mailbutton string={'Mail Me'} />
        </div>
    );


};

export default TeamBuilder
