import React, { useEffect, useState } from "react";

const Pokemon = ({ name, url }) => {
  const [pokeImage, setPokeImage] = useState("");
  const [pokeType, setPokeType] = useState([]);
  const [pokeWeight, setPokeWeight] = useState("");
  const [pokeHeight, setPokeHeight] = useState("");
  const [pokeID, setPokeID] = useState("");

  const nameLabelFix = ({ name }) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokeImage(data.sprites.front_default);
        setPokeType(data.types);
        setPokeWeight(data.weight);
        setPokeHeight(data.height);
        setPokeID(data.id);
      });
  }, []);

  return (
    <div>
      <div className="pokeName">
        <label>{nameLabelFix({ name })}</label>
      </div>
      <div className="pokeID">
        <label>ID: {pokeID}</label>
      </div>
      <div className="type">
        {pokeType.map((types) => (
          <div className="pokeTypes">
            <label key={types["type"]["name"]}>{types["type"]["name"]}</label>
          </div>
        ))}
      </div>
      <div className="pokeWeight">
        <label key={pokeWeight}>Weight: {pokeWeight}</label>
      </div>
      <div className="pokeHeight">
        <label key={pokeHeight}>Height: {pokeHeight}</label>
      </div>
      <div>
        <img alt="Sprite" src={pokeImage} />
      </div>
    </div>
  );
};

export default Pokemon;
