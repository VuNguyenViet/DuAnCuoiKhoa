import React from "react";
import '../../assets/scss/pages/advise.scss'

type Props = {};

export default function Advise({}: Props) {
  const advise1 = require('../../assets/img/advise/advise1.jpg');
  const advise2 = require('../../assets/img/advise/advise2.jpg');
  const advise3 = require('../../assets/img/advise/advise3.jpg');
  const advise4 = require('../../assets/img/advise/advise4.jpg');
  const adivse5 = require('../../assets/img/advise/advise5.jpg');
  const backToTop = () =>{
    window.scrollTo(0,0);
}

 
  return (
    <div className="advise">
      <div className="advise_title">
          {/* <img src={adivse5} alt="" /> */}
      </div>

      <div className="container">
        <div className="advise_content">
          <div className="about_course_main animate__animated animate__lightSpeedInRight animate__delay-0.5s">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="about_course_left">
                  <img src={advise1} alt="..." />
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="about_course_right">
                  <div className="title_about_course">
                    <h2>Tư vấn khóa học </h2>
                  </div>

                  <div className="content_about_course">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deserunt, eligendi eius asperiores deleniti quod
                      voluptatem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="choose_course animate__animated animate__lightSpeedInLeft animate__delay-1s">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="choose_course_left">
                  <div className="choose_course_title">
                    <h1>Lựa chọn khóa học</h1>
                  </div>
                  <div className="choose_course_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deserunt, eligendi eius asperiores deleniti quod
                      voluptatem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                    <div className="choose_course_right">
                      <img src={advise2} alt="..." />
                    </div>       
              </div>
            </div>
          </div>

          <div className="not_IT_main animate__animated animate__lightSpeedInRight animate__delay-2s">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="not_IT_left">
                  <img src={advise3} alt="..." />
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="not_IT_right">
                  <div className="not_IT_title">
                    <h1> Bạn là dân trái ngành ?</h1>
                  </div>
                  <div className="not_IT_content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Deserunt, eligendi eius asperiores deleniti quod
                      voluptatem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="IT_student animate__animated animate__lightSpeedInLeft animate__delay-3s">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                    <div className="IT_student_left">
                    <div className="IT_student_title">
                  <h1>Bạn là sinh viên ngành CNTT ?</h1>
                </div>
                <div className="IT_student_content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Deserunt, eligendi eius asperiores deleniti quod voluptatem.
                  </p>
                </div>
                    </div>
              </div>

              <div className="col-md-6 col-sm-12">
                  <div className="IT_student_right">
                  <img src={advise4} alt="" />
                  </div>
              </div>
            </div>
          </div>
            <div className="btn-contact animate__animated animate__bounceIn animate__delay-4s">
            <button className="btn btn-success ">Liên hệ ngay</button>
            </div>
             
        </div>

      </div>

      <div className='backToTop' onClick={()=>{
                        backToTop()
                  }}><i className="fas fa-arrow-up"></i></div>
    </div>
  );
}
