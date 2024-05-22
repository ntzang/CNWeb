import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookDetail from "./pages/Bookdetail/BookDetail.jsx";
import CartPage from "./pages/cart/CartPage.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Search from "./components/Search/Search.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    // Dynamic segment
    path: "/book/:id",
    element: <BookDetail />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={routers} />
    </CartProvider>
  </React.StrictMode>
);
