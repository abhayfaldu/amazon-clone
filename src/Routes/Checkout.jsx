import React from 'react'
import styles from '../components/Checkout.module.css'
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../Context/StateProvider';
const ad_image_url = {
  url: 'data:image/jpeg;base64,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',
};

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__left}>
        <img
          className={styles.checkout__ad}
          src={ad_image_url.url}
          alt='ad_image'
        />
        <div>
          <h2 className={styles.checkout__title}>Your shopping basket</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className={styles.checkout__right}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout