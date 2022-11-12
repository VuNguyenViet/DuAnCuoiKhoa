import React from 'react'
import { useDispatch } from "react-redux";
// import '../../assets/scss/styles.scss'
import { NavLink, useNavigate } from "react-router-dom";
import { productDetail } from '../../redux/reducers/productReducer'
import '../../assets/scss/styles.css'

type Props = {
  prod: productDetail
}

export default function ProductDetail({ prod }: Props) {
  const navigate = useNavigate();
  return (
    <div className='d-flex'>
      <div className='w-50'>
        <img src={prod.hinhAnh} alt="" />
        <h1>Giới thiệu</h1>
        <p>{prod.moTa}</p>
      </div>
      <div className='w-50'>
        <div className='card card_detail'>
           <p>Ngày tạo:{prod.ngayTao}</p>
           <p>Người tạo:{prod.maNhom}</p>
           <p>Lượt xem: {prod.luotXem}</p>
           <p>Số lượng học viên: {prod.soLuongHocVien}</p>
          
          <button>Ghi danh khóa học</button>
        </div>
      </div>
    </div>
  );
}