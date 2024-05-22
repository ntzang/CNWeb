import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { books } from "../../../data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bookdetail.css";
import { useCart } from "../../context/CartContext";

function BookDetail(props) {
  //cart
  const { addToCart, cartItems, getTotalQuantity } = useCart();
  console.log("cart item", cartItems);
  const handleAddToCart = () => {
    //call context
    addToCart(book, quantity);
  };
  //Slick-carousel

  const { id } = useParams();
  const book = books.find((item) => item.id == id);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  //quantity
  const [quantity, setQuantity] = useState(1);
  const plus = () => {
    setQuantity(quantity + 1);
  };
  const minus = () => {
    setQuantity(quantity <= 1 ? 1 : quantity - 1);
  };

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settingsMain = {
    asNavFor: nav2,
    ref: slider1,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const settingsThumbs = {
    asNavFor: nav1,
    ref: slider2,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    arrows: false,
  };

  return (
    <div id="bookdetail">
      <Header getTotalQuantity={getTotalQuantity} />
      <div className="container">
        <div className="row gap-3">
          {/* featured */}
          <div className="col-3 pt-5">
            <div className="card1 card p-0 justify-content-center">
              {book.images.length > 1 ? (
                <>
                  <Slider {...settingsMain}>
                    {book.images.map((image, index) => (
                      <div key={index}>
                        <img
                          className="card-img-top card-img"
                          src={image.base_url}
                          alt={`Slide ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                  <Slider {...settingsThumbs}>
                    {book.images.map((image, index) => (
                      <div key={index} className="thumbnail">
                        <img
                          className="card-img-thumbnail"
                          src={image.base_url}
                          alt={`Thumbnail ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                </>
              ) : (
                <img
                  className="card-img-top card-img"
                  src={book.images[0].base_url}
                  alt="Book cover"
                />
              )}
              <div className="card-body">
                <h5 className="card-title text-start fw-bold fs-16 pt-3">
                  Đặc điểm nổi bật
                </h5>
                <p className="card-text d-flex fs-14 text-start p-0 gap-2">
                  <span>
                    <img
                      className="img-check"
                      src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                      alt=""
                    />
                  </span>
                  Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.
                </p>
                <p className="card-text d-flex fs-14 text-start p-0 gap-2">
                  <span>
                    <img
                      className="img-check"
                      src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                      alt=""
                    />
                  </span>
                  Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của
                  trẻ em.
                </p>
                <p className="card-text d-flex fs-14 text-start p-0 gap-2 border-bottom">
                  <span>
                    <img
                      className="img-check"
                      src="https://salt.tikicdn.com/ts/upload/81/61/d4/92e63f173e7983b86492be159fe0cff4.png"
                      alt=""
                    />
                  </span>
                  Cung cấp thông tin tổng quát
                </p>
                <div className="d-flex col py-1 gap-2">
                  <div className="d-flex gap-2 col-11 fs-14 text-start">
                    <img
                      src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
                      alt=""
                      className="img-people"
                    />
                    <div>
                      <span className="text-start">
                        <a href="/" className="text-footer">
                          Xem thêm
                        </a>
                      </span>
                      Tóm tắt nội dung sách
                    </div>
                  </div>
                  <div className="col-1 fw-bold">
                    <a href="/" className="text-black">
                      &#62;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* chi tiết sách */}
          <div className="btn-book col-6 pt-3 gap-2 rounded">
            <div className="btn-book1">
              <div className="d-flex gap-2">
                <img
                  src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                  alt=""
                  className="logo-check"
                />
                <span>Tác giả:</span>
                <a href="/" className="text-primary">
                  {book.authors && book.authors[0].name}
                </a>
              </div>
              <div className="pt-3 text-start">
                <h2>{book.name}</h2>
              </div>
              <div className="d-flex gap-2 text-start">
                <span className="">{book.rating_average}</span>
                <span className="">
                  {Array.from({ length: book.rating_average }, (_, index) => (
                    <img
                      key={index}
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="star"
                      className="star"
                    />
                  ))}
                  {Array.from(
                    { length: 5 - Math.round(book.rating_average) },
                    (_, index) => (
                      <img
                        key={index}
                        src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                        alt="star"
                        className="star"
                      />
                    )
                  )}
                </span>
                <span className="text-footer">
                  (
                  {book.quantity_sold &&
                    Math.round(book.quantity_sold.value / 3)}
                  ) |
                </span>
                <span className="text-footer">
                  Đã bán {book.quantity_sold ? book.quantity_sold.value : "0"}
                </span>
              </div>
              <div className="d-flex pt-3 align-items-center gap-2">
                <h1 className="fw-bold">
                  {book.current_seller.price.toLocaleString()}₫
                </h1>
                <span className="bg-light">
                  <a>
                    {Math.round(
                      100 -
                        (book.current_seller.price / book.original_price) * 100
                    ) !== 0
                      ? `-${Math.round(
                          100 -
                            (book.current_seller.price / book.original_price) *
                              100
                        )}%`
                      : ""}
                  </a>
                </span>
              </div>
              <div id="detail" className="d-flex pt-5 rounded">
                <h5 className="fw-bold-200">Thông tin chi tiết</h5>
              </div>
              <div className="row text-start pt-3">
                <div className="col-6 border-bottom">
                  <span className="text-footer">Phiên bản sách</span>
                </div>
                <div className="col-6 border-bottom p-0">
                  <span>Phiên bản thường</span>
                </div>
                {book.specifications[0].attributes.map((item, index) => (
                  <div key={index} className="d-flex border-bottom pt-3">
                    <div className="col-6 text-footer">
                      <span>{item.name}</span>
                    </div>
                    <div className="col-6" style={{ display: "inline" }}>
                      <span
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* box thêm giỏ hàng */}
          <div id="add" className="col-2 pt-5">
            <div className="btn-book3 px-2 ">
              <h5 className="text-start fw-bold">Số lượng</h5>
              <div className="pt-2 text-start">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                  alt=""
                  className="node"
                  onClick={minus}
                />
                <span className="p-2">{quantity}</span>
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                  alt=""
                  className="node"
                  onClick={plus}
                />
              </div>
              <h5 className="text-start fw-bold pt-3">Tạm tính</h5>
              <div className="text-start fw-bold fs-3">
                {(book.current_seller.price * quantity).toLocaleString()}₫
              </div>
              <div className="pt-2">
                <div className="">
                  <button className="btn bg-danger text-white fw-bold-200">
                    Mua ngay
                  </button>
                </div>
                <div className="pt-2">
                  <button
                    className="btn border btn-outline-primary"
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ
                  </button>
                </div>
                <div className="pt-2">
                  <button className="btn border btn-outline-primary">
                    Mua trước trả sau
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mô tả sách */}
      <div className="row gap-3">
        <div className="col-3"></div>
        <div className="col-6 px-4">
          <div className="btn-book2 rounded">
            <div className="p-0">
              <h5 className="text-start p-2">Mô tả sản phẩm</h5>
              <img
                className="card-img-top card-mota pt-2 p-2"
                src={book.images[0].base_url}
                alt=""
              />
              <div
                className="text-start px-3 pt-3"
                style={{ display: "block" }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: book.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookDetail;
