import React, { useState } from "react";
import "./Login.css";
import amazon_logo_black from "./amazon_logo_black.png";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); //redirect to a certain page using history.push("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //firebase things
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //firebase things
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if successfully creates user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazon_logo_black} alt="" />
      </Link>

      <div className="login__infoBox">
        <h2>Sign-In</h2>
        <form className="login__option">
          <p>Email (phone for mobile accounts)</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>

        <div className="login__infoBottom">
          <div className="login__condition">
            <span>
              By Signing in, you agree to Amazon clone by Shoumikh's Conditions
              of Use and Privacy Notice.
            </span>
          </div>
          <div className="login__help">
            <NavigateNextIcon fontSize="small" />
            <p>Need help?</p>
          </div>
        </div>
      </div>
      <p className="login__newToAmazon">New to Amazon?</p>
      <button className="login__buttonCreateAccount" onClick={register}>
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
