import React, { useContext, useEffect } from "react";
import AlertContext from "../context/alertContext";

function Alert() {
  const { message, showAlert, setShowAlert } = useContext(AlertContext);

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
      className={`fixed bottom-20 z-[1000] left-[45%] rounded-md bg-white text-black text-center  px-10  ${
        showAlert ? "opacity-100 p-3" : "opacity-0"
      } transition-all duration-300`}
      data-testid="alert-message"
    >
      {message}
    </div>
  );
}

export default Alert;
