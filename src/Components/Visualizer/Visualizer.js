import React, { useEffect, useState } from "react";
import { getPokemons } from "src/services";
import Pokemon from "./Pokemon";
import "./Visualizer.css";

const Visualizer = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [data, setData] = useState(false);

  const childToParent = (childdata) => (setData(childdata));


  useEffect(() => {
    getPokemons(page).then((data) => setPokemons(data.results));
  }, [page, data]);

  const getMorePokemons = () => {
    setPage(page + 1);
  };


  return (
    <div className="ListContainer">
      <div className="PokemonList">
        {pokemons.map(({ name, url }) => (
          <Pokemon key={name} name={name} url={url} childToParent={childToParent} />
        ))}
      </div>
      {!data && (
        <button className="pokeButton" onClick={getMorePokemons}>
          Load More Pokemons
        </button>
      )}
    </div>
  );
};



export default Visualizer;
