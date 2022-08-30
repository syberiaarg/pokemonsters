import { POKEMON } from "src/constants";
import { instance } from "src/services";

export const getPokemons = async (page) => {
  try {
    const { data } = await instance.get(POKEMON, {
      params: {
        limit: page * 12,
        offset: 0,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const showPokemon = async (name) => {
  try {
    const { data } = await instance.get(`${POKEMON}/${name}`);

    return {
      ...data,
      sprite: data.sprites.front_default,
      altsprite: data.sprites.back_default,
      image: data.sprites.other['official-artwork'].front_default,
    };
  } catch (error) {
    console.error(error);
  }
};

export const teamList = async (page) => {
  try {
    const { data } = await instance.get(POKEMON, {
      params: {
        limit: 4,
        offset: page,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
