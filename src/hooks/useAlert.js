import { useState } from "react";

const useAlert = () => {
  const [showAlert, setShowAlert] = useState({
    show: false,
    severity: '',
    message: ''
  });

  return {
    showAlert,
    setShowAlert
  };
};

export default useAlert
