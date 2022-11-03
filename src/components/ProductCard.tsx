import React from 'react'
import { Product } from '../redux/reducers/productReducer'
import '../assets/scss/styles.css'

type Props = {
    prod:Product
}

export default function ProductCard({prod}: Props) {

  return (
    
    <div className='card card_home'>
      <img style={{height:'150px'}} src={prod.hinhAnh} alt={prod.tenKhoaHoc} />
      <div style={{height:250, backgroundColor:'gray'}} className='card-body bg-dark text-white card_mota'>
        <p>{prod.tenKhoaHoc.length>30 ? prod.tenKhoaHoc.slice(0,30) + '...':prod.tenKhoaHoc}</p>
        <p>Lượt xem:{prod.luotXem}</p>
        <p>{prod.moTa.length>100 ? prod.moTa.slice(0,100) + '...' :prod.moTa}</p>
        <div>
          <button style={{marginRight : '10px'}} className='btn btn-success btn-secondary'>Đọc thêm </button>
           <button className='btn btn-success btn-primary'>Tham gia ngay </button>
        </div>
        
      </div>
    </div>
  )
}