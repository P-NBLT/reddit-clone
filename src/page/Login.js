import React from "react";
import "./Login.css";

const Login = ({ open, onClose }) => {
  return (
    <div className="loginContainer">
      <div className="leftLoginContainer"></div>
      <div className="rightLoginContainer">
        <div className="closeButtonLoginCard">
          <button onClick={onClose}>X</button>
        </div>
        <div>
          <p id="login">Log in</p>
        </div>
        <div className="secondPartRightLoginCard">
          <div className="automaticLogin">
            <button>
              <img
                src={
                  "https://s1.qwant.com/thumbr/474x474/9/1/ca418b10b889aceea900f762d397ef01debd368e0a81c80dec88da5cfc1b4a/th.jpg?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sd4jEfOGNF6niLAMQREF-AHaHa%26pid%3DApi&q=0&b=1&p=0&a=0"
                }
              />
              <p>Continue with Google</p>
            </button>
            <button>
              <img
                src={
                  "https://s1.qwant.com/thumbr/474x474/b/a/6dfaf64aa1f3cd0ec110669a06c1b837485dbcd36dcdb3ef7e3d5468b277ea/th.jpg?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HKoDLEf2PVCQK500SS4TAwHaHa%26pid%3DApi&q=0&b=1&p=0&a=0"
                }
              />
              <p>Continue with Apple</p>
            </button>
          </div>
          <div className="orSeeparatorLoginCard">
            <div className="lineSeparatorLoginCard"></div>
            <p>Or</p>
            <div className="lineSeparatorLoginCard"></div>
          </div>
          <div className="inputLoginCard">
            <input placeholder="USERNAME" />

            <input placeholder="PASSWORD" />
          </div>
          <button className="loginButtonLoginCard">Log In</button>
          <p>Forgot your username or password?</p>
          <p>New to Reddit-Litte? SIGN UP</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
