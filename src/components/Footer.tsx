import React from 'react'

type Props = {
    title?:string
}

export default function Footer({}: Props) {
  return (
    <footer className='footer'>
    <div className='footer__part --part-1'>
      <div className='container'>
        <div className='footer__item'>
          <h2>Hãy liên hệ ngay với chúng tôi</h2>
          <ul>
            <li><a href="#">Địa chỉ:</a></li>
            <li><a href="#">Số điện thoại:</a></li>
            <li><a href="#">Facebook:</a></li>
            <li><a href="#">Zalo:</a></li>
          </ul>
        </div>
        <div className='footer__item ps-3 me-3 --border'>
          <h2>Bạn cần hỗ trợ</h2>
          <ul>
            
            <li><a href="#">Tư vấn khóa học</a></li>
            <li><a href="#">Lựa chọn khóa học</a></li>
            <li><a href="#">Bạn là dân trái ngành?</a></li>
            <li><a href="#">Bạn là sinh viên nghành CNTT?</a></li>
          </ul>
        </div>
        <div className='footer__item'>
          <h2>Đăng ký</h2>
          <ul>
            <li><a href="#">Khóa học riêng lẻ</a></li>
            <li><a href="#">Khóa học Full</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}