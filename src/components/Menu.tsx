import React from 'react'
import '../assets/scss/styles.css'

type Props = {}

export default function Menu({}: Props) {
  return (
    <section className="menu">
    <div className="container">
        <a href="./index.html" className="active">Trang chủ</a>
        <a href="#">Giới thiệu</a>
        <a href="#">Đội ngũ giảng viên</a>
        <a href="#">Tư vấn</a>
        <a href="#">Hỗ trợ</a>
    </div>
</section>
  )
}