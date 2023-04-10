import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../Context/StateProvider";
import styles from "../styles/Payment.module.css";

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className={styles.payment}>
      <div className={styles.payment__container}>
        <h1>
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>

        {/* Address section */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Deliver address</h3>
          </div>
          <div className={styles.payment__address}>
            <p>{user?.email}</p>
            <p>123 Jashapar</p>
            <p>Jamanagar, Gujrat</p>
          </div>
        </div>

        {/* Review item section */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={styles.payment__items}>
            {basket?.map((item, i) => (
              <CheckoutProduct
                key={`${Date.now()}-${i}`}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment method section */}
        <div className={styles.payment__section}>
          <div className={styles.payment__title}>
            <h3>Payment Method</h3>
          </div>
          <div className={styles.payment__details}>{/* stripe code */}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
