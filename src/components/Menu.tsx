import React from 'react'
import '../assets/scss/styles.css'
import { NavLink } from 'react-router-dom';

type Props = {}

export default function Menu({}: Props) {
  return (
    <section className="menu">
    <div className="container">
        <a href="./index.html" className="active">Trang chủ</a>
        <NavLink to="/about">Giới thiệu</NavLink>
        <NavLink to="/mentor">Đội ngũ giảng viên</NavLink>
        <NavLink to="/advise">Tư vấn</NavLink>
        <NavLink to="/support">Liên hệ</NavLink>
    </div>
   
</section>
  )
}