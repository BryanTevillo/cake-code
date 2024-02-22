import React from "react";
import { useState } from "react";

import "./styles.css";

const CountCar = ({ initial = 0, stock = 7 }) => {
  const [qty, setQty] = useState(initial);
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container ">
      <div className="count-container__contador w-[90px]  text-sm md:text-md lg:text-lg">
        <div
          className={`border border-button_primary rounded-l-2xl  ${
            qty === initial ? "" : "hover:bg-button_primary"
          } `}
        >
          <button
            className={`count-container__button text-[29px]  ${
              qty === initial ? "" : "hover:text-[32px]"
            } `}
            onClick={() => addProduct(-1)}
            disabled={qty === initial}
          >
            -
          </button>
        </div>

        <span className="count-container__qty border border-button_primary">
          {qty}
        </span>
        <div
          className={`border border-button_primary rounded-r-2xl  ${
            qty === stock ? "" : "hover:bg-button_primary"
          } `}
        >
          <button
            className={`count-container__button text-[29px] ${
              qty === stock ? "" : "hover:text-[32px]"
            } `}
            onClick={() => addProduct(+1)}
            disabled={qty === stock}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountCar;
