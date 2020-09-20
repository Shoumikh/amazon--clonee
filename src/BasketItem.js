import React from "react";
import Emoji from "a11y-react-emoji";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
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
              .map(() => (
                <Emoji symbol="⭐" label="sheep" />
              ))}
          </div>
        </div>
        <button onClick={removeFromBasket} className="basketItem__button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
