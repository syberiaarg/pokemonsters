import md5 from "md5";
import { USER } from "src/constants";
import { apiAxios } from "src/services";

export const createUser = async (user) => {
    try {
        delete user.secondpass
        const res = await apiAxios.post(USER, { ...user, password: md5(user.password) });
        console.log(res);
        if (res.status === 200) { localStorage.setItem('user', user.email) }
    } catch (error) {
        console.error(error);
    }
};
