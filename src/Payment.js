import React from "react";
import BasketItem from "./BasketItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [{ user, basket }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        {/*payment section- delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>jila road, Mirpur</p>
            <p>Dhaka 1216</p>
          </div>
        </div>
        {/*payment section- review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
        </div>
        {/*payment section- payment methord*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Methord</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
