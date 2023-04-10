import React from "react";
import styles from "../styles/Subtotal.module.css";
import { useStateValue } from "../Context/StateProvider";
import { getBasketTotal } from "../Reducer/Reducer";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className={styles.subtotal}>
      <>
        <p>
          {/* Part of the homework */}
          Subtotal ({basket.length} items):{" "}
          <strong>
            {
              <NumericFormat
                value={getBasketTotal(basket)}
                decimalScale={2}
                prefix="₹"
                displayType="text"
                thousandsGroupStyle="lakh"
                thousandSeparator=","
              />
            }
          </strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </>
      <button onClick={(e) => navigate("/payment", { replace: true })}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
