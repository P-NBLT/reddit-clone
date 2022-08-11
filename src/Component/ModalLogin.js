import React from "react";
import Login from "../page/Login";
import ReactDOM from "react-dom";
import "./ModalLogin.css";

const ModalLogin = ({ open, onClose }, children) => {
  return ReactDOM.createPortal(
    <>
      <div className="overflowLogin" />
      <div className="modalLogin">
        <Login onClose={onClose} open={open} />
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalLogin;
