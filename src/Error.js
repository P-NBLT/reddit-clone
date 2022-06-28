import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BUTTON_STYLE1 = {
  backgroundColor: "#3f8eda",
  color: "white",
  border: "none",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  margin: "0px 2px",
  cursor: "pointer",
  borderRadius: "16px",
  fontFamily: "Noto Sans, Arial, sans-serif",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "17px",
};
const BUTTON_STYLE2 = {
  backgroundColor: "#white",
  color: "#3f8eda",
  border: "1px solid #3f8eda",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  margin: "0px 2px",
  cursor: "pointer",
  borderRadius: "16px",
  fontFamily: "Noto Sans, Arial, sans-serif",
  fontSize: "14px",
  fontWeight: "700",
  lineHeight: "17px",
};

const DIV_STYLE = {
  marginTop: "15vh",
  marginLeft: "10vw",
};

const Error = () => {
  const navigate = useNavigate();

  return (
    <div style={DIV_STYLE}>
      <h3>Error 404</h3>
      <p>The page you are looking for doesn't seems to exist</p>
      <button onClick={() => navigate("")} style={BUTTON_STYLE1}>
        Back to home
      </button>
      <button onClick={() => navigate(-1)} style={BUTTON_STYLE2}>
        Previous
      </button>
    </div>
  );
};

export default Error;
