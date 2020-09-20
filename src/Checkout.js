import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i0.wp.com/saltlangs.org.uk/wp-content/uploads/2015/10/SALT-Banner-468x601.png?ssl=1"
          alt=""
        />
        <h2 className="checkout__title">Your Shopping Basket</h2>

        {basket.map((product) => (
          <BasketItem
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            rating={product.rating}
          />
        ))}
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
