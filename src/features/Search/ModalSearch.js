import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { CardsSlice } from "./CardsSlice";
import { useSelector } from "react-redux";

const MODAL_STYLE = {
  position: "absolute",
  display: "block",
  zIndex: 1000,
  marginLeft: "20%",
  marginRight: "20%",
  top: 0,
  left: 0,
  right: 0,
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

const ModalSearch = (props, children) => {
  const state = useSelector((state) => state.card.modal);
  console.log(state);
  if (state) {
    return ReactDOM.createPortal(
      <>
        <div style={OVERFLOW_STYLE} onClick={props.onClose} />
        <div style={MODAL_STYLE}>
          <Card />
        </div>
      </>,
      document.getElementById("portal")
    );
  }
};

export default ModalSearch;
