import React from "react";
import ReactDOM from "react-dom";
import Article from "../page/Article";

const MODAL_STYLE = {
  position: "absolute",
  top: 0,
  left: "10%",
  zIndex: 1000,
  height: "100%",
};

const OVERFLOW_STYLE = {
  position: "fixed",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0, .8)",
  zIndex: "1000",
  overflowY: "auto",
};

const Modal = ({ onClose, open }, children) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div style={OVERFLOW_STYLE} onClick={onClose} />
      <div style={MODAL_STYLE}>
        <Article onClose={onClose} open={open} />
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
