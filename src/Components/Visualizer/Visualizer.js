import React, { useEffect, useState } from "react";
import { apiUrl } from "../../constants/endpoints";
import Pokemon from "./Pokemon";
import "./Visualizer.css";

const Visualizer = () => {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  // const [pokeParams, setPokeParams] = useState();

  useEffect(() => {
    const pokeParams = {
      limit: 17,
      offset: page * 17,
    };

    fetch(`${apiUrl}?limit=${pokeParams.limit}&offset=${pokeParams.offset}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, [page]);

  const getMorePokemons = () => {
    setPage(page + 1);
  };

  return (
    <div className="ListContainer">
      <div className="PokemonList">
        {pokemons.map(({ name, url }) => (
          <Pokemon key={name} name={name} url={url} />
        ))}
        <button className="pokeButton" onClick={getMorePokemons}>
          Get More
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
