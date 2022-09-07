import { USER } from "src/constants";
import { apiAxios } from "src/services";

export const createUser = async (user) => {
  try {
    return await apiAxios.post(USER, user);
  } catch (error) {
    return error.response
  }
};
