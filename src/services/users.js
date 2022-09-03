import { USER } from "src/constants";
import { apiAxios } from "src/services";

export const createUser = async (user) => {
    try {
        await apiAxios.post(USER, user);
    } catch (error) {
        console.error(error);
    }
};
