import React from "react";
import ReactDOM from "react-dom";
import Article from "../page/Article";

const MODAL_STYLE = {
  position: "absolute",
  display: "block",
  //   top: 0,
  //   left: "10%",
  //   marginRight: "20%",
  zIndex: 1000,
  marginLeft: "20%",
  marginRight: "20%",
  top: 0,
  left: 0,
  right: 0,
  //   border: "1px solid yellow",
  // backgroundColor: "#dae0e6",
  //   minWidth: "1000px",
};

const OVERFLOW_STYLE = {
  position: "fixed",
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
