// src/components/Book.jsx
import React from "react";
import "./book.css";
function Book(props) {
  return (
    <div id="book" className="px-2 py-2">
      <div className="card rounded p-0" style={{ width: "18rem" }}>
        <a href={"book/" + props.data.id}>
          <img
            src={props.data.images[0].base_url}
            className="card-img-top p-0"
            alt={props.data.name}
          />
        </a>
        <div className="rating card-body pt-4 text-start">
          <h6 className="book-title">{props.data.name}</h6>
          <div className="d-flex gap-2 text-start">
            <span className="">
              {Array.from({ length: props.data.rating_average }, (_, index) => (
                <img
                  key={index}
                  src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                  alt="star"
                  className="star"
                />
              ))}
            </span>
            <span className="text-footer fw-light">
              | Đã bán{" "}
              {props.data.quantity_sold ? props.data.quantity_sold.value : "0"}
            </span>
          </div>
          <div className="d-flex pt-4 align-items-center">
            <h1 className="fw-bold-400 fs-5 ">
              {props.data.current_seller.price.toLocaleString()}₫
            </h1>
            <span className="discount">
              <a>
                {Math.round(
                  100 -
                    (props.data.current_seller.price /
                      props.data.original_price) *
                      100
                ) !== 0
                  ? `-${Math.round(
                      100 -
                        (props.data.current_seller.price /
                          props.data.original_price) *
                          100
                    )}%`
                  : ""}
              </a>
            </span>
          </div>
          <div className="text-center border-top pt-3 fs-6 fw-light">
            Giao siêu tốc 2h
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
