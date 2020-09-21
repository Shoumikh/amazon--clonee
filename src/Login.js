import React from "react";
import "./Login.css";
import amazon_logo_black from "./amazon_logo_black.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Login() {
  return (
    <div className="login">
      <img className="login__logo" src={amazon_logo_black} alt="" />
      <div className="login__info">
        <div className="login__infoBox">
          <h2>Sign-In</h2>
          <span>Email (phone for mobile accounts)</span>
          <div className="login__option">
            <input type="text" />
            <button className="login__buttonContinue"> Continue</button>
          </div>
          <div className="login__condition">
            <p>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </p>
          </div>
          <div className="login__help">
            <PlayArrowIcon />
            <a>Need help?</a>
          </div>
        </div>
        <p className="login__newToAmazon">New to Amazon?</p>
        <button className="login__buttonCreateAccount">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;
