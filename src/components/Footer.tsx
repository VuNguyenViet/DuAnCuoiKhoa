import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  title?: string
}

export default function Footer({ }: Props) {
  return (
    <footer className='footer'>
      <div className='footer__part'>
        <div className='container py-3 bg-light'>
          <div className='footer__item'>
            <h2>Hãy liên hệ ngay với chúng tôi</h2>
            <ul>
              <li><a href="#"> <span>Địa chỉ:</span>   336/12 Phường 12 , Quận 10,TP HCM</a></li>
              <li><a href="#"><span>Số điện thoại</span> :0934.923.643</a></li>
              <li><a href="https://www.facebook.com/vietvu.22.06"><span> Facebook:</span>https://www.facebook.com/vietvu.22.06</a></li>
              <li><a href="#"><span>Zalo:</span> 0934.923.643</a></li>
            </ul>
          </div>
          <div className='footer__item ps-3 me-3 --border'>
            <h2>Bạn cần hỗ trợ</h2>
            <ul>

              <li>
                <NavLink className="active" to="/tuvankhoahoc" aria-current="page">
                  Tư vấn khóa học
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/tuvankhoahoc">
                  Lựa chọn khóa học
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/tuvankhoahoc">
                  Bạn là dân trái ngành?
                </NavLink>
              </li>
              <li>
                <NavLink className="active" to="/tuvankhoahoc">
                  Bạn là sinh viên nghành CNTT?
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h2>Đăng ký tư vấn</h2>
            <div className="mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control w-100 ps-4" type="text" placeholder="Tên" />
              <input className="form-control w-100 ps-4" type="text" placeholder="Email" />
              <input className="form-control w-100 ps-4" type="text" placeholder="Số điện thoại" />
              <button type="button" className="btn btn-primary top-0 end-0 mt-2 me-2">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}