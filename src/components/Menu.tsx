import React from 'react'
// import '../assets/scss/styles.css'
import './../assets/scss/components/_menu.scss'
import { NavLink } from 'react-router-dom';
import ListItem from './ListItem';
import ListKhoaHoc from './ListKhoaHoc'

type Props = {}

export default function Menu({}: Props) {
  return (
    <>
    <section className="menu">
    <div className="container">
        <a href="./index.html" className="active">Trang chủ</a>
        <NavLink to="/about">Giới thiệu</NavLink>
        <NavLink to="/mentor">Đội ngũ giảng viên</NavLink>
        <NavLink to="/advise">Tư vấn</NavLink>
        <NavLink to="/contact">Liên hệ</NavLink>
        <ul className="nav-item dropdown Menu_danhmuc">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Danh mục khóa học
          </a>
          <li className="dropdown-menu" aria-labelledby="navbarDropdown">
            <ListKhoaHoc />
          </li>
        </ul>
    </div>
   
</section>
</>
  )
}