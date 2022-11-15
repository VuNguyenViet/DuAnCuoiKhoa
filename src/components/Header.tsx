import React from "react";
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from '../redux/configStore'
// import {cart} from '../redux/reducers/cartReducer'
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
  // const { cart } = useSelector((state:RootState) => state.cartReducer);
  const { userLogin } = useSelector((state:any) => state.userReducer);

  const elearning = require("../assets/img/elearning.webp")
  const renderUserNavLink = () => {
    if (userLogin) {
      return (
        <>
         <div className="row">
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
          </div>
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
      
      className=" navbar-expand-sm navbar-light bg-dark header_fixed "
    >
      <NavLink className="navbar-brand header_text" to="/">
        <i
          style={{ color: "#06BBCC", fontSize: "50px",padding: '10px ' }}
          className="fas fa-book"
        ></i>
      </NavLink>
   
      <h2>eLEARNING</h2>
      <div
        className="collapse navbar-collapse header_right"
        id="collapsibleNavId"
      >
        <NavLink
            className="nav-link text-light header_icon"
            to="/cart"
            aria-current="page"
          >   
            <i className="fa fa-cart-plus"></i>(
                {/* {cart.reduce(
                  (totalQnt, prodInCart) => (totalQnt += prodInCart.quantity),
                  0
                )} */}
                )
          </NavLink>

        <ul className="navbar-nav me-auto mt-2 mt-lg-0 login_regis">
          <li className="nav-item">
         
            <NavLink className="nav-link active" to="/login" aria-current="page">
            {renderUserNavLink()}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active register"
              to="/register"
              aria-current="page"
            >
              Đăng Ký
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
