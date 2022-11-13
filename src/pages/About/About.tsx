import React from "react";
import './../../assets/scss/pages/_about.scss'

type Props = {};


export default function Introduction({}: Props) {
  const about1 = require('./../../assets/img/about/about1.jpg')
  const about2 = require('./../../assets/img/about/about2.jpeg')
  const about3 = require('./../../assets/img/about/about3.jpg')
  const about4 = require('./../../assets/img/about/about4.jpeg')
  const about5 = require('./../../assets/img/about/about5.jpeg')
  const backToTop = () =>{
    window.scrollTo(0,0);
}

  return (
    <div className="about_main">
      <div className="main_about_img">
        <img src={about1} alt="..." className="img-fluid" />
      </div>
        <div className="container">
      <div className="row about_card  animate__animated animate__fadeInDown animate__delay-0.5s">
        <div className="col-xl-3 col-md-6 col-sm-12 mt-5">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-12 mt-5 ">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-12 mt-5">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 col-sm-12 mt-5">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>
      </div>

      <div className="welcome">
      <div className="row ">
        <div className="col-md-6 col-sm-12 pack_1  animate__animated animate__fadeInLeft animate__delay-1s">
          <div className="welcome_img">
            <img src={about3} alt="" />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 pack_2">
          <div className="welcome_content">
            <h1 className=" animate__animated animate__shakeX animate__delay-1s ">Welcome to Elearning</h1>
            <p className="welcome_text1  animate__animated animate__fadeIn animate__delay-2s">
            <i className="fas fa-hand-point-right  "></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, qui?
            </p>

            <p className="welcome_text2 animate__animated animate__fadeIn animate__delay-3s">
            <i className="fas fa-hand-point-right"></i>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
              expedita soluta. Ullam, rerum odio.
            </p>

            <div className="welcome_skill_list">
              <div className="row">
                <div className="col-md-6 col-sm-12 skill_pack1 animate__animated animate__fadeInLeft animate__delay-4s">
                  <ul>
                    <li className=" ">
                      <i className="fa fa-arrow-right "></i>
                     Skilled Intructors
                    </li>
                    <li >
                      <i className="fa fa-arrow-right  "></i>
                     Skilled Intructors
                    </li>
                    <li >
                      <i className="fa fa-arrow-right "></i>
                     Skilled Intructors
                    </li>
                  </ul>
                </div>
               
               

                <div className="col-md-6 col-sm-12 skill_pack2 animate__animated animate__fadeInLeft animate__delay-4s">
                        <ul>
                        <li>
                    <i className="fa fa-arrow-right"></i>
                   Skilled Intructors
                  </li>
                  <li>
                    <i className="fa fa-arrow-right"></i>
                   Skilled Intructors
                  </li>
                  <li>
                    <i className="fa fa-arrow-right"></i>
                   Skilled Intructors
                  </li>
                        </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <button className="btn btn-success button_welcome animate__animated animate__bounceIn animate__delay-5s">Read More</button>

      </div>

      <div className="about_slogan">
        <div className="about_slogan_top animate__animated animate__bounceIn animate__delay-4s ">
        <i className="fas fa-code"></i>
            <h2>Lorem ipsum dolor sit amet.</h2>
        </div>

        <div className="about_slogan_bot">
              <h3 className=" animate__animated animate__bounceInUp animate__delay-5s  ">Lorem ipsum dolor sit amet consectetur.</h3>
              <div className="row">
                <div className="col-md-6 col-sm-12 mt-5 slogan_img_left animate__animated animate__backInLeft animate__delay-4s ">
                  <img src={about4} alt="" />
                </div>

                <div className="col-md-6 col-sm-12 mt-5 slogan_img_right animate__animated animate__backInRight animate__delay-4s">
                  <img src={about5} alt="" />
                </div>
              </div>

                  <button className="btn btn-success button-slogan  animate__animated animate__fadeInUpBig animate__delay-5s ">Join us now</button>
        </div>
      </div>
      </div>
      
      <div className='backToTop' onClick={()=>{
                        backToTop()
                  }}><i className="fas fa-arrow-up"></i></div>
      </div>
  );
}
