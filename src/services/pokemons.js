import { POKEMON } from "src/constants";
import instance from ".";

const getPokemons = async (page) => {
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

export default getPokemons;
