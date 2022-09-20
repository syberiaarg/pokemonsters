import React, { useEffect, useState } from "react";
import { getPokemons } from "src/services";
import { Pokebutton } from "../Button";
import Pokemon from "./Pokemon";
import PokemonDetail from "./PokemonDetail";
import "./Visualizer.css";

const Visualizer = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [completeData, showCompleteData] = useState(null);

  useEffect(() => {
    getPokemons(page).then((data) => setPokemons(data));
  }, [page]);

  const getMorePokemons = () => {
    setPage(page + 1);
  };

  return (
    <div className="ListContainer">
      {!completeData ? (
        <div className="PokemonList">
          {pokemons.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              pokemon={pokemon}
              showCompleteData={showCompleteData}
            />
          ))}
        </div>
      ) : (
        <PokemonDetail
          pokemon={completeData}
          showCompleteData={showCompleteData}
        />
      )}
      {!completeData && (
        <Pokebutton string={"Load More Pokemons"} onClick={getMorePokemons} />
      )}
    </div>
  );
};

export default Visualizer;
