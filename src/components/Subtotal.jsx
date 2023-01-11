import React from 'react';
import styles from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  
  console.log(typeof totalPrice )
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" name="" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal