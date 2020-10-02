import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { TotalPrice } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory(); //works similary as <Link to=""> tag but better of linking with button
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={TotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => history.push("/payment")} //links proceed page with the proceed button
        className="subtotal__proceedButton"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
