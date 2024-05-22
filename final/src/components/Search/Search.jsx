import { useEffect, useState } from "react";
import { books } from "../../../data.json";
import { useSearchParams } from "react-router-dom";
import Book from "../Book/Book";
import Header from "../Header/Header";
import { useCart } from "../../context/CartContext";
import "./Search.css";

function Search() {
  const [booksearh, setBook] = useState([]);
  const [searchParams] = useSearchParams();
  const [count, setCount] = useState(0);
  const { getTotalQuantity } = useCart();
  useEffect(() => {
    if (count < 25) {
      const param = searchParams.get("name");
      console.log(param);
      if (param) {
        const lowercasedParam = param.toLowerCase();
        const filteredBooks = books.filter((book) => {
          const lowercasedBookName = book.name.toLowerCase();
          const lowercasedCate = book.categories.name.toLowerCase();
          const lowercasedseller = book.current_seller.name.toLowerCase();
          return (
            lowercasedBookName.includes(lowercasedParam) ||
            lowercasedCate.includes(lowercasedParam) ||
            lowercasedseller.includes(lowercasedParam)
          );
        });

        setBook(filteredBooks);
      } else {
        setBook([]);
      }
      setCount(count + 1);
    }
  }, [searchParams, count]);
  return (
    <div>
      {booksearh.length === 0 ? (
        <div>
          <h3>Not result</h3>
        </div>
      ) : (
        <div className="">
          <Header getTotalQuantity={getTotalQuantity} />
          <div className="dis-book col-lg-9 col-xm-12 pt-4">
            <div className="d-flex flex-wrap">
              {booksearh.map((b) => (
                <Book data={b} key={b.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Search;
