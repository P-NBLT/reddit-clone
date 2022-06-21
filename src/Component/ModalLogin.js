import React from "react";
import Login from "../page/Login";
import ReactDOM from "react-dom";

const MODAL_STYLE = {
  position: "absolute",
  top: 0,
  left: "10%",
  zIndex: 2000,
  height: "100%",
  //   backgroundColor: "white",
};

const OVERFLOW_STYLE = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0, .7)",
  zIndex: "2000",
  overflowY: "auto",
};

const ModalLogin = ({ open, onClose }, children) => {
  return ReactDOM.createPortal(
    <>
      <div style={OVERFLOW_STYLE} />
      <div style={MODAL_STYLE}>
        <Login onClose={onClose} open={open} />
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalLogin;
