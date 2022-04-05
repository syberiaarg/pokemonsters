const CompletePokemon = (pokemon) => {
  <div className="moreData">
    <img alt="altSprite" src={pokemon.altsprite} />
    <img alt="otherImage" src={pokemon.image} />
    {pokemon.abilities.map(({ ability }) => (
      <label key={ability.name}>{ability.name}</label>
    ))}
  </div>;
};

export default CompletePokemon;
