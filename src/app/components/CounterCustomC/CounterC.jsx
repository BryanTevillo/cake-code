import React from "react";
import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Button } from "flowbite-react";

import "./styles.css";

const ItemCountC = ({ onAdd, initial = 0, stock = 7 }) => {
  const [qty, setQty] = useState(initial);
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container ">
      <div className="count-container__contador ">
        <div
          className={`border border-button_primary rounded-l-2xl  ${
            qty === initial ? "" : "hover:bg-button_primary"
          } `}
        >
          <button
            className={`count-container__button  ${
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
            className={`count-container__button  ${
              qty === stock ? "" : "hover:text-[32px]"
            } `}
            onClick={() => addProduct(+1)}
            disabled={qty === stock}
          >
            +
          </button>
        </div>
      </div>

      <div className=" px-0">
        <Button
          onClick={() => {
            onAdd(); //se desarrolla en fututo
          }}
          disabled={stock === 0 ? true : null}
          className=" w-80 text-blue-500 bg-button_primary bg-opacity-20 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          <HiShoppingCart className="mr-2 h-5 w-5" />
          AGREGAR AL CARRITO
        </Button>
      </div>
    </div>
  );
};

export default ItemCountC;
