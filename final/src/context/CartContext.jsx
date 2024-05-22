import React, { createContext, useState, useContext, useEffect } from "react";

// Tạo ngữ cảnh cho giỏ hàng
const CartContext = createContext();

// Tạo một hook tùy chỉnh để sử dụng ngữ cảnh giỏ hàng
export const useCart = () => useContext(CartContext);

///CartProvider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Lấy giỏ hàng từ localStorage nếu có
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Hàm thêm sách vào giỏ hàng
  const addToCart = (book, quantity = 1) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === book.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...book, quantity }];
      }
    });
  };

  // Hàm xóa sách khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Hàm tăng số lượng sách trong giỏ hàng
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Hàm giảm số lượng sách trong giỏ hàng
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
