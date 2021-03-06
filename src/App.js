import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//for stripe payment. here were are setting in the stripe api key
const stripePromise = loadStripe(
  "pk_pk_test_51HXw8HKWFoHhquj0OUkbZcCbs8ZxAWItvIT2YeyLZT6roE8cxAZexB8qit3XGHusHEYQiMtxA2dl0FNcFypzKa2I00fiU8oZOj"
);

function App() {
  const [state, dispatch] = useStateValue();
  //this is a listener for the app...alaways keep track of any change
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      //saying listener to keep track of auth user
      console.log("USER >>>>", authUser);
      if (authUser) {
        //user logged in/ user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          //user is logged out
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>{/* this is for stripe functionality */}
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
