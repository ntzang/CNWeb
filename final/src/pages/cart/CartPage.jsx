// src/pages/CartPage/CartPage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Cart from "./CartDetail/Cart";
import { useCart } from "../../context/CartContext";
import "./cartpage.css";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalQuantity,
  } = useCart();
  console.log("cart", cartItems);
  return (
    <div>
      <Header getTotalQuantity={getTotalQuantity} />
      <div className="cart-page">
        <Cart
          items={cartItems}
          onRemove={removeFromCart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
