import axios from "axios";
import { API_URL, API_POKEMON_URL } from "src/constants";

export const pokeAxios = axios.create({
  baseURL: API_POKEMON_URL,
});

export const apiAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});
