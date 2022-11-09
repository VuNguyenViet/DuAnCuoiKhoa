import React from "react";
import '../../assets/scss/pages/advise.scss'

type Props = {};

export default function Advise({}: Props) {
  const advise1 = require('../../assets/img/advise/advise1.jpg');
  const advise2 = require('../../assets/img/advise/advise2.jpg');
  const advise3 = require('../../assets/img/advise/advise3.jpg');
  const advise4 = require('../../assets/img/advise/advise4.jpg');

  return (
    <div className="advise">
      <div className="advise_title">
        <h1>Hãy để chúng tôi tư vấn cho bạn</h1>
      </div>

      <div className="container">
        <div className="advise_content">
          <div className="about_course">
            <div className="row">
              <div className="col-6">
                <div className="about_course_left">
                  <img src={advise1} alt="..." />
                </div>
              </div>

              <div className="col-6">
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

          <div className="choose_course">
            <div className="row">
              <div className="col-6">
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
              <div className="col-6">
                    <div className="choose_course_right">
                      <img src={advise2} alt="..." />
                    </div>       
              </div>
            </div>
          </div>

          <div className="not_IT">
            <div className="row">
              <div className="col-6">
                <div className="not_IT_left">
                  <img src={advise3} alt="..." />
                </div>
              </div>

              <div className="col-6">
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

          <div className="IT_student">
            <div className="row">
              <div className="col-6">
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

              <div className="col-6">
                  <div className="IT_student_right">
                  <img src={advise4} alt="" />
                  </div>
              </div>
            </div>
          </div>
            <div className="btn-contact">
            <button className="btn btn-success ">Liên hệ ngay</button>
            </div>
             
        </div>

      </div>
    </div>
  );
}
