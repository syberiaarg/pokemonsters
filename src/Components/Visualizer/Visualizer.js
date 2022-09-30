import React, { useEffect, useState } from "react";
import { getPokemons } from "src/services";
import { Pokebutton } from "../Button";
import Pokemon from "./Pokemon";
import PokemonDetail from "./PokemonDetail";
import "./Visualizer.css";
import PropTypes from "prop-types";

const Visualizer = () => {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [completeData, showCompleteData] = useState(false);

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


Visualizer.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      showCompleteData: PropTypes.func,
    }).isRequired
  ),
}



// ES MEJOR ASI? O DECLARAR PROPTYPES POR SEPARADO (CHILD COMPONENTS) ? //

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
