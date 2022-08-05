import React, { useEffect, useState } from "react";
import { getPokemons } from "src/services";
import Pokemon from "./Pokemon";
import "./Visualizer.css";

const Visualizer = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [completeData, showCompleteData] = useState(false);

  useEffect(() => {
    getPokemons(page).then((data) => setPokemons(data.results));
  }, [page]);

  const getMorePokemons = () => {
    setPage(page + 1);
  };
  return (
    <div className="ListContainer">
      <div className="PokemonList">
        {pokemons.map(({ name, url }) => (
          <Pokemon
            key={name}
            name={name}
            url={url}
            completeData={completeData}
            showCompleteData={showCompleteData}
          />
        ))}
      </div>
      <button className="pokeButton" onClick={getMorePokemons}>
        Load More Pokemons
      </button>
    </div>
  );
};

export default Visualizer;
