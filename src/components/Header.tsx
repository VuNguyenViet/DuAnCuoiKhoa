import React from "react";
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import {
  ACCESS_TOKEN,
  clearCookie,
  clearLocalStorage,
  USER_LOGIN,
} from "../util/setting";

type Props = {
  title?: string;
};

export default function Header({ }: Props) {
  const { userLogin } = useSelector((state:any) => state.userReducer);

  const elearning = require("../assets/img/elearning.webp")
  const renderUserNavLink = () => {
    if (userLogin) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link " to="/profile" aria-current="page">
              XIN CHÀO: {userLogin.taiKhoan}!
            </NavLink>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => {
                clearLocalStorage(USER_LOGIN);
                clearLocalStorage(ACCESS_TOKEN);
                clearCookie(ACCESS_TOKEN);

                window.location.href = "/";
              }}
            >
              Đăng xuất 
            </span>
          </li>
        </>
      );
    }
    return (
      <NavLink className="nav-link" to="/login">
        Đăng nhập
      </NavLink>
    );
  };
  return (
    <nav
      style={{ padding: "10px" }}
      className=" navbar-expand-sm navbar-light bg-dark header_fixed"
    >
      <NavLink className="navbar-brand header_text" to="/">
        <i
          style={{ color: "#06BBCC", fontSize: "50px" }}
          className="fas fa-book"
        ></i>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <h2>eLEARNING</h2>
      <div
        className="collapse navbar-collapse header_right"
        id="collapsibleNavId"
      >
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2 w-50"
            type="text"
            placeholder="Tìm kiếm"
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Tìm kiếm
          </button>
          <NavLink
            className="nav-link text-light header_icon"
            to="/cart"
            aria-current="page"
          >   
            <i className="fa fa-cart-plus"></i>(0)
          </NavLink>
        </form>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
         
            <NavLink className="nav-link active" to="/login" aria-current="page">
            {renderUserNavLink()}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              to="/register"
              aria-current="page"
            >
              Đăng Ký
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">Navbar</a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">Link</a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //             Dropdown
    //           </a>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li><a className="dropdown-item" href="#">Action</a></li>
    //             <li><a className="dropdown-item" href="#">Another action</a></li>
    //             <li><hr className="dropdown-divider" /></li>
    //             <li><a className="dropdown-item" href="#">Something else here</a></li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
    //         </li>
    //       </ul>
    //       <form className="d-flex">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
}
