import React from "react";
import { NavLink } from 'react-router-dom'

type Props = {
  title?: string;
};

export default function Header({ }: Props) {
  const elearning = require("../assets/img/elearning.webp")
  return (
    <nav className=" navbar-expand-sm navbar-dark bg-dark header_fixed">
      <NavLink className="navbar-brand header_text" to="/">
        <i style={{ color: '#06BBCC', fontSize: '50px' }} className="fas fa-book"></i>
      </NavLink>
      <div className="collapse navbar-collapse header_right" id="collapsibleNavId">
        <form className="d-flex my-2 my-lg-0">

          <input
            className="form-control me-sm-2 w-50"
            type="text"
            placeholder="Search"
          />

          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
          <NavLink className="nav-link text-light" to="/cart" aria-current="page">
            <i className="fa fa-cart-plus"></i>(0)
          </NavLink>
        </form>
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/login" aria-current="page">
              Đăng Nhập
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/register" aria-current="page">
              Đăng Ký
            </NavLink>
          </li>
          <div className="collapse navbar-collapse header_left" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Lựa chọn khóa học
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a className="dropdown-item header_text" href="#">Html cơ bản</a></li>
                  <li><a className="dropdown-item header_text" href="#">Css cơ bản</a></li>
                  <li><a className="dropdown-item header_text" href="#">JavaScript cơ bản</a></li>
                </ul>
              </li>
            </ul>
          </div>

        </ul>

      </div>
    </nav>

  );
}
