import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Book from "./components/Book/Book";
import Nav from "./components/nav/navbar";
import { books } from "../data.json";
import { useCart } from "./context/CartContext";

function App() {
  const { getTotalQuantity } = useCart();
  console.log("get total", getTotalQuantity);
  return (
    <div>
      <Header getTotalQuantity={getTotalQuantity} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Nav></Nav>
          </div>
          <div className="dis-book col-lg-9 col-xm-12 pt-4">
            <div className="d-flex flex-wrap">
              {books.map((b) => (
                <Book data={b} key={b.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Props - properties */}

      <Footer />
    </div>
  );
}

export default App;
