import { useState, useEffect } from "react";
import md5 from "md5";
import { createUser } from "src/services/users";

const initialState = {
  name: "",
  secondName: "",
  lastName: "",
  email: "",
  password: "",
};

const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(initialState);
  const [showAlert, setShowAlert] = useState({
    show: false,
    severity: '',
    message: ''
  });

  useEffect(() => { }, []);

  const regisryNewUser = async () => {
    setIsLoading(true)


    const res = await createUser({ ...user, password: md5(user.password) })
    if (res.status === 200) {
      setShowAlert({ show: true, severity: 'success', message: 'User was created' })
    } else {
      setShowAlert({ show: true, severity: 'error', message: "User wasn't created" })
    }
    setIsLoading(false)
    console.log(res);
  }

  return {
    showAlert,
    isLoading,
    user,
    setUser,
    regisryNewUser
  };
};

export default useUser
