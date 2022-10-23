import React from 'react'
import '../../assets/scss/styles.css'



type Props = {
  title?:string
}


export default function Carousel({}: Props) {
  const logo =  require("../../assets/img/Logo.png");
  const html = require("../../assets/img/html2.png");
  const css = require ("../../assets/img/css.png")
  const js = require ("../../assets/img/js.webp")
  return (
    <div  id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner carousel_1">
    <div className="carousel-item active carousel_2">
      <img src= {logo}  className="d-block w-100" alt="..."/>
      <div>
        <h1>Tổng quan về khóa học </h1>
      </div>
    </div>
    <div className="carousel-item carousel_2">
      <img src= {html} className="d-block w-100" alt="..."/>
      <h1>Kiến thức về HTML</h1>
    </div>
    <div className="carousel-item carousel_2">
      <img src= {css} className="d-block w-100" alt="..."/>
      <h1>Kiến thức về CSS</h1>
    </div>
    <div className="carousel-item carousel_2">
      <img  src= {js} className="d-block w-100" alt="..."/>
      <h1>Kiến thức về JavaScript</h1>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



  )
}