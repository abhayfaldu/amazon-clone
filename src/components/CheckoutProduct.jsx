import React from "react";
import { useStateValue } from "../Context/StateProvider";
import styles from "../styles/CheckoutProduct.module.css";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className={styles.checkoutProduct} key={id}>
      <img
        className={styles.checkoutProduct__image}
        src={image}
        alt="product__image"
      />
      <div className={styles.checkoutProduct__info}>
        <p className={styles.checkoutProduct__title}>{title}</p>
        <p className={styles.checkoutProduct__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkoutProduct__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`${Date.now()}-${i}`}>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
