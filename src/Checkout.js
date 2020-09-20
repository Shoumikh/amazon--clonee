import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i0.wp.com/saltlangs.org.uk/wp-content/uploads/2015/10/SALT-Banner-468x601.png?ssl=1"
          alt=""
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>
        <BasketItem
            id="154646344878"
            title="The beauty qween make up set"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Luxury-Category-card-1x._SY304_CB448731790_.jpg"
            rating={3}
          />
        {/** BasketItem */}
        {/** BasketItem */}
        {/** BasketItem */}
        {/** BasketItem */}
      </div>

      <div className="checkout__right">
        <div className="checkout__subtotalInfo">
          <Subtotal className="checkout__subtotal" />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
