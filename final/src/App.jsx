import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Book from "./components/Book/Book";
import Nav from "./components/nav/navbar";
import { books } from "../data.json";
import { useCart } from "./context/CartContext";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const { getTotalQuantity } = useCart();

  //filter books
  const filteredBooks = books.filter((book) => {
    return (
      (!selectedCategory || book.categories.name === selectedCategory) &&
      (!selectedSuppliers.length ||
        selectedSuppliers.includes(book.current_seller.name))
    );
  });

  return (
    <div>
      <Header getTotalQuantity={getTotalQuantity} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Nav
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSuppliers={selectedSuppliers}
              setSelectedSuppliers={setSelectedSuppliers}
              books={books}
            />
          </div>
          <div className="dis-book col-lg-9 col-xm-12 pt-4">
            <div className="d-flex flex-wrap">
              {filteredBooks.map((b) => (
                <Book data={b} key={b.id} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
