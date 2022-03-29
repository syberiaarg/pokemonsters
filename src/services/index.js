import { apiUrl } from "src/constants/endpoints";

export const fetchPokemons = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};

export const fetchPokeData = async (url) => {
  const response = await fetch(url);
  return response.json();
};
