import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="d-flex gap-2 text-start mt-3">
          <span>
            <Link
              to="/"
              className="text-decoration-none text-footer fw-bold-200 fs-16"
            >
              {" "}
              Trang chủ{" "}
            </Link>
          </span>
          &#62;
          <span>
            <Link
              to="/"
              className="text-decoration-none text-footer fw-bold-400 fs-6"
            >
              Nhà sách tiki
            </Link>
          </span>
        </div>
        <div id="nav" className="col text-start pt-3 gap-3">
          <div className="col pt-2 gap-2">
            <p className="fw-bold fs-16">Danh Mục Sản Phẩm</p>
            <a
              href="/"
              className="text-decoration-none pt-1 d-block text-black"
            >
              English Books
            </a>
            <a
              href="/"
              className="text-decoration-none pt-1 d-block text-black"
            >
              Sách Tiếng Việt
            </a>
            <a
              href="/"
              className="text-decoration-none pt-1 d-block text-black"
            >
              Văn phòng phẩm
            </a>
            <a
              href="/"
              className="text-decoration-none pt-1 d-block text-black"
            >
              Quà lưu niệm
            </a>
          </div>
          <div className="col pt-3">
            <p className="fw-bold fs-16">Nhà Cung Cấp</p>
            <div className="flex">
              <div className="form-check d-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Nhà sách Fahasa
                </label>
              </div>
              <div className="form-check d-block">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Bamboo Books
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Times Books
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Nhà Sách Trẻ Online
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  VBooks
                </label>
              </div>
              <span className="text-primary pt-3">Xem thêm &#8744;</span>
            </div>
            <div className="col">
              <p className="fw-bold fs-16 mb-2 m-0">Đánh giá</p>
              <div className="star pt-0 mb-2">
                <div className="d-flex">
                  <span>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="start"
                    />
                  </span>
                  <span>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="start"
                    />
                  </span>
                  <span>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="start"
                    />
                  </span>
                  <span>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="start"
                    />
                  </span>
                  <span>
                    <img
                      src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                      alt="start"
                    />
                  </span>
                </div>
              </div>
              <div className="d-flex star col mb-2">
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                    alt="start"
                  />
                </span>
              </div>
              <div className="d-flex star col">
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                    alt="start"
                  />
                </span>
                <span>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/50/f9/af/0d540e678d0d639d4eba86c1cdd38556.png"
                    alt="start"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        id="mobile-nav"
        className="container-fluid d-block d-lg-none border-bottom"
      >
        <div className="container p-3 d-flex justify-content-between align-items-center">
          <a href="/" className="text-black">
            Phổ biến
          </a>
          <a href="/" className="text-black">
            .
          </a>
          <a href="/" className="text-black">
            Bán chạy
          </a>
          <a href="/" className="text-black">
            .
          </a>
          <a href="/" className="text-black">
            Hàng mới
          </a>
          <a href="/" className="text-black">
            .
          </a>
          <a href="/" className="text-black">
            Giá
          </a>
        </div>
        <div className="filter container-fluid d-flex text-start gap-3 pt-2 border-bottom">
          <div className="filter-icon pt-2 ">
            <a>
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  class="clr-i-outline clr-i-outline-path-1"
                  d="M33,4H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2l2,.76V19a1,1,0,0,0-.29-.71L4,6.59V6H32v.61L20.33,18.29A1,1,0,0,0,20,19l0,13.21L22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5A1,1,0,0,0,33,4Z"
                ></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
              </svg>
            </a>
            <span> Lọc</span>
          </div>
          <div className="icon-snow d-flex pt-2">
            <img src="./images/now.png" alt="Now Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
