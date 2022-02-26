import React, { useEffect, useState } from "react";
import { apiUrl } from "../../constants/endpoints";
import Pokemon from "./Pokemon";
import "./Visualizer.css";

const Visualizer = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);
  return (
    <div className="ListContainer">
      <div className="PokemonList">
        {pokemons.map(({ name, url }) => (
          <Pokemon key={name} name={name} url={url} />
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
