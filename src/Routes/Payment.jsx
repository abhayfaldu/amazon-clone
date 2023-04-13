import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../Context/StateProvider";
import styles from "../styles/Payment.module.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "../Reducer/Reducer";
import { useEffect } from "react";
import axios from "../utils/axios.js";

const Payment = () => {
  const [{ basket, user }] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        // Stripe expects the total in a curencies subunits
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    // stripe stuff
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confermation

        setSucceeded(true);
        setError(false);
        setProcessing(false);

        navigate("/orders");
      });
  };

  const handleCardChange = (e) => {
    // listen for chnages in the card element
    // and display any error as the custormer types in card number

    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
          <div className={styles.payment__details}>
            {/* stripe code */}
            <form action="" onSubmit={handleSubmit}>
              <CardElement onChange={handleCardChange} />

              <div className={styles.payment__priceContainer}>
                <strong>Order total: </strong>
                <NumericFormat
                  value={getBasketTotal(basket)}
                  decimalScale={2}
                  prefix="₹"
                  displayType="text"
                  thousandsGroupStyle="lakh"
                  thousandSeparator=","
                />
              </div>
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Bur Now"}</span>
              </button>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
