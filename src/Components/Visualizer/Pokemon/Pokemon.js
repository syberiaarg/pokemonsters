import React, { useEffect, useState } from "react";

const Pokemon = ({ name, url }) => {
  const [pokeImage, setPokeImage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokeImage(data.sprites.front_default);
      });
  }, []);

  return (
    <div>
      <label>{name}</label>
      <img alt="Sprite" src={pokeImage} />
    </div>
  );
};

export default Pokemon;
