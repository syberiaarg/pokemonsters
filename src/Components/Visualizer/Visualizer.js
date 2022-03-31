import React, { useEffect, useState } from "react";
import { apiUrl } from "../../constants/endpoints";
import Pokemon from "./Pokemon";
import "./Visualizer.css";

const Visualizer = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  // const [pokeParams, setPokeParams] = useState();

  useEffect(() => {
    const pokeParams = {
      limit: page * 12,
      offset: 0,
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
      </div>
      <button className="pokeButton" onClick={getMorePokemons}>
        Load More Pokemons
      </button>
    </div>
  );
};

export default Visualizer;
