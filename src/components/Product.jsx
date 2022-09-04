import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import styles from './Product.module.css'

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();
console.log('basket')
  console.log(basket)

  const addToBasket = () => {
    // dispatch the item into the context
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        }
      });
    }
  return (
    <div key={id} className={styles.product}>
      <div className={styles.product__info}>
        <p>{title}</p>
        <p className={styles.product__price}>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product__rating}>
          {Array(rating).fill().map((_, i) => (
            <p key={`${Date.now()}-${i}`}>⭐️</p>
          ))}
        </div>
      </div>
      <img
        src={image}
        alt='product_image'
      />
      <button onClick={addToBasket} >Add to basket</button>
    </div>
  );
}

export default Product