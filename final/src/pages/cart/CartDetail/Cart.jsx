// src/components/Cart/Cart.jsx
import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items, onRemove, onIncrease, onDecrease }) => {
  //tổng mặt hàng trong cart
  const total = items.reduce(
    (acc, item) => acc + item.current_seller.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      {items.length === 0 ? (
        <div>
          <img
            src="/images/cart_empty.png"
            alt="cart_empty"
            className="cart_image"
          />
          <h3>Giỏ hàng của bạn trống</h3>
        </div>
      ) : (
        <div className="list container-fluid">
          <h2 className="text-start pt-3">Giỏ hàng</h2>
          <div className="row">
            <div className="box-inf col-9 align-item fs-5">
              <div className="d-flex justify-content-between">
                <a className="text-dark">Tất cả</a>
                <div className="d-flex gap-5">
                  <a className="text-dark">Đơn giá</a>
                  <a className="text-dark">Số lượng</a>
                  <a className="text-dark">Thành tiền</a>
                  <a className="text-dark">
                    <i className="fa-solid fa-trash"></i>
                  </a>
                </div>
              </div>
              <div className="item-container">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={onRemove}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                  />
                ))}
              </div>
              <div className="div"></div>
            </div>
            <div className="col-3">
              <div className="box-cart text-start px-2">
                <h5 className="pt-1">Tạm tính: {total.toLocaleString()} ₫</h5>
                <h5 className="pt-4 fw-bold">
                  Tổng tiền: {total.toLocaleString()} ₫
                </h5>
                <div className="pt-4">
                  <button className="btn-cart btn bg-danger text-white fw-bold-200">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
