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
    <nav style={{padding:'10px'}} className=" navbar-expand-sm navbar-light bg-dark header_fixed">
      <NavLink className="navbar-brand header_text" to="/">
        <i style={{ color: '#06BBCC', fontSize: '50px' }} className="fas fa-book"></i>
      </NavLink>
      <h2>eLEARNING</h2>
      <div className="collapse navbar-collapse header_right" id="collapsibleNavId">
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
          <NavLink className="nav-link text-light header_icon" to="/cart" aria-current="page">
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
            <NavLink className="nav-link active" to="/register" aria-current="page">
              Đăng Ký
            </NavLink>
          </li>


        </ul>

      </div>
    </nav>

  );
}
