import React, { useEffect, useState } from "react";
import { getPokemons, listPokemons } from "src/services";
import { Pokebutton, ArrowButton } from "../Button";
import Pokemon from "./Pokemon";
import PokeIcons from "./PokemonIcon/PokeIcons";
import PokemonDetail from "./PokemonDetail";
import "./Visualizer.css";
import PropTypes from "prop-types";


const Visualizer = () => {
  const [page, setPage] = useState(1);
  const [listPage, setList] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [pokeIcons, setIcons] = useState([]);
  const [completeData, showCompleteData] = useState(false);

  useEffect(() => {
    getPokemons(page).then((data) => setPokemons(data));

    listPokemons(listPage).then((data) => setIcons(data));

  }, [page, listPage]);

  const getMorePokemons = () => {
    setPage(page + 1);
  };

  const expandList = () => {
    setList(listPage + 105);
  };




  return (
    <div className="Visualizer">
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
      <div className="listSelector">
        {pokeIcons.map((pokemon) => (
          <PokeIcons
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
        <ArrowButton className="pokeExpand" onClick={expandList} />
      </div>
    </div>
  );
};


Visualizer.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired
  ),
}



/* Visualizer.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  showCompleteData: PropTypes.func,
  completeData: PropTypes.bool,
  Pokemon: PropTypes.elementType,
  setPokemons: PropTypes.func,
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, })),
  PokemonDetail: PropTypes.elementType,
  Pokebutton: PropTypes.elementType,
  getMorePokemons: PropTypes.func,
}

Visualizer.defaultProps = {
  page: 1,
  setPage: () => { },
  showCompleteData: () => { },
  completeData: false,
  Pokemon: null,
  setPokemons: () => { },
  pokemons: [{
    id: 25,
  }],
  PokemonDetail: null,
  Pokebutton: null,
  getMorePokemons: () => { },
} */

export default Visualizer;
