// src/components/Cart/CartItem.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./cart.css";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className="container cart-item d-flex p-0 m-0 align-items-center justify-content-between border-bottom">
      <img
        src={item.images[0].base_url}
        alt={item.name}
        className="itemImage"
      />
      <div className="item-details flex-grow-1">
        <h4>{item.name}</h4>
      </div>
      <div className="item-price pt-2">
        <p>{item.current_seller.price.toLocaleString()} ₫</p>
      </div>
      <div className="quantity-controls d-flex align-items-center">
        <button
          onClick={() => onDecrease(item.id)}
          className="quantity-button btn border btn-outline-primary"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input
          type="number"
          value={item.quantity}
          readOnly
          className="quantity-input"
        />
        <button
          onClick={() => onIncrease(item.id)}
          className="quantity-button btn border btn-outline-primary"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="item-total pt-2">
        <p>{(item.current_seller.price * item.quantity).toLocaleString()} ₫</p>
      </div>
      <button onClick={() => onRemove(item.id)} id="remove-button">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
};

export default CartItem;
