import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Introduce({ }: Props) {
    const logo = require("../assets/img/webdesign.jpg")
    return (
        <>
            <div className='Introduce'>
                <h1>Đào tạo lập trình chuyên sâu cho người trái nghành</h1>
                <div className='row Introduce_2 d-flex'> 
                  <div className='col-md-6 col-sm-12'>
                    <img style={{width:'100%'}} src= {logo}  alt="" />
                  </div>
                  <div className='col-md-6 col-sm-12'>
                    <p>CyberSoft khai thác nhu cầu tuyển dụng lập trình, kết nối việc làm tới doanh nghiệp và tích hợp các dự án với công nghệ mới nhất vào phương pháp đào tạo tích cực cho các học viên học xong có việc làm ngay. Chương trình giảng dạy được biên soạn may đo dành riêng cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo cường độ cao,
                         luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.
                     </p>
                    <NavLink to= "/AllProductCard" >
                    <button>Danh sách khóa học tại trung tâm</button>
                    </NavLink>
                       
                     
                  </div>
                  
                </div>
            </div>
        </>
    )
}