import React, { useEffect, useState } from "react";
import { teamList } from "src/services";
import { Mailbutton, Pokebutton } from "src/Components/Button";
import Pokemons from '../../Components/TeamBuilder/Pokemons'
import './Team.css'


const TeamBuilder = () => {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    const [page, setPage] = useState(getRandomInt(0, 1154));
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        teamList(page).then((data) => setPokemons(data.results));
    }, [page]);



    const changeTeam = () => {
        setPage(getRandomInt(0, 1154));
    };

    return (
        <div className="listFont">
            <div className="teamList">
                {pokemons.map(({ name, url }) => (
                    <Pokemons key={name} name={name} url={url} />
                ))}
                <Pokebutton string={"Change Your Team"} onClick={changeTeam} />
            </div>
            <Mailbutton string={'Mail Me'} />
        </div>
    );
};

export default TeamBuilder
