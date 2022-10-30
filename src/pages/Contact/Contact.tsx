import React from 'react'
import './../../assets/scss/pages/_contact.scss'
type Props = {}

export default function Support({}: Props) {
  return (
    <div>
          <div className='contact_title'>
                <h2>Liên hệ với chúng tôi</h2>
          </div>

            <div className="container">
              <div className="contact">
                <div className="row">
                  <div className="col-6">
                    <div className="contact_content">
                        <h3>Thông tin liên hệ</h3>
                          <ul>
                            <li>Địa chỉ:336/12 Phường 12, Quận 10,TPHCM</li>
                            <li>Số điện thoại:0934.923.643</li>
                            <li><a  target={'_blank'} href='https://www.facebook.com/vietvu.22.06'><span>Facebook:https://www.facebook.com/vietvu.22.06</span></a></li>
                            <li>Zalo:0934.923.643</li>
                          </ul>
                    </div>
                  
                  </div>
                  <div className="col-6">
                    <div className="contact_img">
                          <img src="https://picsum.photos/300/300" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
              

    </div>

     


  )
}