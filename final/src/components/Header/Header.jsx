import "./heading.css";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import CartItem from "../../pages/cart/CartDetail/CartItem";

//Component header
function Header({ getTotalQuantity }) {
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
  };
  console.log(getTotalQuantity);

  return (
    <div>
      <div id="header" className="row container-fluid">
        <div className="col-2 d-flex align-items-center justify-content-center">
          <Link to="/" className=" text-decoration-none">
            <div className="dflex flex-wrap">
              <img
                className="img-logo w-full h-full object-fit-contain"
                src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                alt=""
              />
              <span className="Spanlogo d-block">Tốt & Nhanh</span>
            </div>
          </Link>
        </div>
        <div className="col-7 pt-4 justify-content-between align-items-center m-0">
          <form className="d-flex align-items-center" action="/search">
            <input
              className="form-control me-2"
              type="Tìm kiếm"
              placeholder="Freeship đến 30k"
              aria-label="Tìm kiếm"
              value={input}
              name="name"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
            <button
              className="btn btn-outline-primary text-black"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-3 d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4 align-items-center">
            <a href="/" className="text-decoration-none text-dark fs-16">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6139 1.21065C12.2528 0.929784 11.7472 0.929784 11.3861 1.21065L2.38606 8.21065C2.14247 8.4001 2 8.69141 2 9V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V9C22 8.69141 21.8575 8.4001 21.6139 8.21065L12.6139 1.21065ZM16 20H20V9.48908L12 3.26686L4 9.48908V20H8V12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12V20ZM10 20V13H14V20H10Z"
                  fill="#000000"
                />
              </svg>{" "}
              Trang chủ
            </a>
            <a href="/" className="text-decoration-none text-dark fs-16">
              <svg
                fill="#000000"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15,13.5 C15,13.2238576 15.2238576,13 15.5,13 C15.7761424,13 16,13.2238576 16,13.5 C16,15.4329966 14.4329966,17 12.5,17 L11.5,17 C9.56700338,17 8,15.4329966 8,13.5 C8,13.2238576 8.22385763,13 8.5,13 C8.77614237,13 9,13.2238576 9,13.5 C9,14.8807119 10.1192881,16 11.5,16 L12.5,16 C13.8807119,16 15,14.8807119 15,13.5 Z M9,11 C8.44771525,11 8,10.5522847 8,10 C8,9.44771525 8.44771525,9 9,9 C9.55228475,9 10,9.44771525 10,10 C10,10.5522847 9.55228475,11 9,11 Z M15,11 C14.4477153,11 14,10.5522847 14,10 C14,9.44771525 14.4477153,9 15,9 C15.5522847,9 16,9.44771525 16,10 C16,10.5522847 15.5522847,11 15,11 Z" />
              </svg>{" "}
              Tài khoản
            </a>
            <Link to="/cart" className="fs-16 cart-btn">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7H13H18.79C19.9733 7 20.8978 8.02164 20.7801 9.19901L20.1801 15.199C20.0779 16.2214 19.2175 17 18.19 17H8.63961C7.68625 17 6.86542 16.3271 6.67845 15.3922L5 7Z"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinejoin="round"
                />
                <path
                  d="M5 7L4.18937 3.75746C4.07807 3.3123 3.67809 3 3.21922 3H2"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 21H10"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 21H18"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{getTotalQuantity()}</span>
            </Link>
          </div>
        </div>
      </div>
      <div
        id="mobile-header"
        className="container-fluid d-block bg-primary d-lg-none"
      >
        <div className="container p-0 d-flex justify-content-between align-items-center">
          <a href="/">
            <button>
              <i className="fa-solid fa-xl fa-chevron-left"></i>
            </button>
          </a>
          <button>
            <i className="fa-solid fa-xl fa-bars"></i>
          </button>
          <form
            action="/search"
            className="mobile-search d-flex align-items-center justify-content-between"
          >
            <span>
              <img className="kinhlup" src="/images/kinhlup.png" alt="" />
            </span>
            <input type="text" name="name" placeholder="Bạn đang tìm kiếm gì" />
          </form>
          <Link to="/cart">
            <button className="mobile-cart-btn">
              <i className="fa-solid fa-xl fa-cart-shopping"></i>
              <span>{getTotalQuantity()}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
