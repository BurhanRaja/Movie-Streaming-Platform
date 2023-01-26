import React, { useState } from "react";
import AlertContext from "./alertContext";

const AlertState = ({ children }) => {
  const [showAlert, setShowAlert] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <AlertContext.Provider
      value={[message, setMessage, showAlert, setShowAlert]}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
