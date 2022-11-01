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
  const frontend = require ("../../assets/img/frontend.jpeg");
  const frontend2 = require ("../../assets/img/frontend2.jpeg")
  return (
    <div  id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
    <div className="carousel-inner carousel_1">
      <div className="carousel-item active carousel_2">
        <img src= {frontend}  className="d-block w-100" alt="..."/>
        <div>
          <h1>Tổng quan về khóa học </h1>
        </div>
      </div>
      <div className="carousel-item carousel_2">
        <img src= {frontend2} className="d-block w-100" alt="..."/>
        <h1>Kiến thức về HTML</h1>
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