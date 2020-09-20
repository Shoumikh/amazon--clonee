import React from "react";
import Emoji from "a11y-react-emoji";
import "./BasketItem.css";

function BasketItem({ id, image, title, price, rating }) {
  return (
    <div className="basketItem">
      <div className="basketItem__left">
        <img className="basketItem__image" src={image} alt="" />
      </div>

      <div className="basketItem__right">
        <div className="basketItem__info">
          <strong>{title}</strong>
          <p className="basketItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="basketItem__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <Emoji symbol="⭐" label="sheep" />
              ))}
          </div>
        </div>
        <button className="basketItem__button">Remove from basket</button>
      </div>
    </div>
  );
}

export default BasketItem;
