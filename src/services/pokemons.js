import { POKEMON } from "src/constants";
import { pokeAxios } from "src/services";

export const getPokemons = async (page) => {
  try {
    const {
      data: { results },
    } = await pokeAxios.get(POKEMON, {
      params: {
        limit: 3,
        offset: page * 3,
      },
    });
    return await Promise.all(
      results.map(async ({ name }) => await getPokemon(name))
    );
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (name) => {
  try {
    const { data } = await pokeAxios.get(`${POKEMON}/${name}`);

    return {
      ...data,
      sprite: data.sprites.other.dream_world.front_default,
      altsprite: data.sprites.back_default,
      image: data.sprites.other["official-artwork"].front_default,
      icon: data.sprites.versions["generation-iii"].emerald.front_default,
    };
  } catch (error) {
    console.error(error);
  }
};

export const teamList = async (ids) => {
  try {
    const team = ids.map(async (id) => {
      const { data } = await pokeAxios.get(`${POKEMON}/${id}`);
      return {
        ...data,
        sprite: data.sprites.front_default,
      }
    });
    return Promise.all(team);
  } catch (error) {
    console.error(error);
  }
};

export const listPokemons = async (listPage) => {
  try {
    const {
      data: { results },
    } = await pokeAxios.get(POKEMON, {
      params: {
        limit: listPage,
        offset: 0,
      },
    });
    return await Promise.all(
      results.map(async ({ name }) => await getPokemon(name))
    );
  } catch (error) {
    console.error(error);
  }
};
