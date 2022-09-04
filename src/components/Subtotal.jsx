import React, { useState } from 'react';
import styles from './Subtotal.module.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider';
import { useEffect } from 'react';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket)
  console.log(basket)
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (basket.length !== 0) { 
      let newTotalPrice = 0;
      for (let i = 0; i < basket.length; i++) {
        newTotalPrice += basket[i].price;
      }
      setTotalPrice(newTotalPrice.toString());
    }
  }, [basket])
  console.log(typeof totalPrice )
  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{totalPrice}</strong>
              {/* Subtotal({basket.length} items): <strong>20000</strong> */}
            </p>
            <small className={styles.subtotal__gift}>
              <input type="checkbox" name="" id="" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal