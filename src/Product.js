import React from "react";
import "./Product.css";
import Emoji from "a11y-react-emoji";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch a item into the datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <Emoji symbol="⭐" label="sheep" />
            ))}
        </div>
      </div>

      <img className="product__image" src={image} alt="" />

      <button className="product__button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
