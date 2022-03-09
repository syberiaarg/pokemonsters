import React, { useEffect, useState } from "react";
import "./Pokemon.css";

const Pokemon = ({ name, url }) => {
  const [pokeImage, setPokeImage] = useState("");
  const [pokeType, setPokeType] = useState([]);
  const [pokeWeight, setPokeWeight] = useState("");
  const [pokeHeight, setPokeHeight] = useState("");
  const [pokeID, setPokeID] = useState("");

  const nameLabelFix = ({ name }) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const typeLabelFix = (types) => {
    return types.charAt(0).toUpperCase() + types.slice(1);
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
    <div className="pokeData">
      <div className="pokeName">
        <label>{nameLabelFix({ name })}</label> <label>ID: {pokeID}</label>
      </div>
      <div className="pokeType">
        {pokeType.map((types) => (
          <div>
            <label key={types["type"]["name"]}>
              {typeLabelFix(types["type"]["name"])}
            </label>
          </div>
        ))}
      </div>
      <div className="pokeForm">
        <label key={pokeWeight}>Weight: {pokeWeight}</label>
        <label key={pokeHeight}>Height: {pokeHeight}</label>
      </div>
      <div className="pokeSprite">
        <img alt="Sprite" src={pokeImage} />
      </div>
    </div>
  );
};

export default Pokemon;
