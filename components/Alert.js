import React, { useContext, useEffect } from "react";
import AlertContext from "../context/alertContext";

function Alert() {
  const [message, setMessage, showAlert, setShowAlert] =
    useContext(AlertContext);

  useEffect(() => {
    if (showAlert) {
      let timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);
    }

  }, [showAlert, setShowAlert]);
  return (
    <div
      className={`fixed bottom-20 z-[1000] left-[45%] rounded-md bg-white text-black text-center p-3 px-10 ${
        showAlert ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
    >
      {message}
    </div>
  );
}

export default Alert;
