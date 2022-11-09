import React from "react";
import './../../assets/scss/pages/_about.scss'

type Props = {};


export default function Introduction({}: Props) {
  const about1 = require('./../../assets/img/about/about1.jpg')
  const about2 = require('./../../assets/img/about/about2.jpeg')
  const about3 = require('./../../assets/img/about/about3.jpg')
  const about4 = require('./../../assets/img/about/about4.jpeg')
  const about5 = require('./../../assets/img/about/about5.jpeg')


  return (
    <div className="container">
      <div className="main_about_img">
        <img src={about1} alt="..." />
      </div>

      <div className="row about_title_main">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
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

      <div className="row welcome">
        <div className="col-md-6 col-sm-12 pack_1">
          <div className="welcome_img">
            <img src={about3} alt="" />
          </div>
        </div>

        <div className="col-md-6 col-sm-12 pack_2">
          <div className="welcome_content">
            <h1>Welcome to Elearning</h1>
            <p className="welcome_text1">
            <i className="fas fa-hand-point-right"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, qui?
            </p>

            <p className="welcome_text2">
            <i className="fas fa-hand-point-right"></i>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
              expedita soluta. Ullam, rerum odio.
            </p>

            <div className="welcome_skill_list">
              <div className="row">
                <div className="col-6 skill_pack1">
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
                  <button className="btn btn-primary">Read more</button>
                </div>
                 

                <div className="col-6 skill_pack2">
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

      <div className="about_slogan">
        <div className="about_slogan_top">
        <i className="fas fa-code"></i>
            <h2>Lorem ipsum dolor sit amet.</h2>
        </div>

        <div className="about_slogan_bot">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <div className="row">
                <div className="col-md-6 col-sm-12 slogan_img_left">
                  <img src={about4} alt="" />
                </div>

                <div className="col-md-6 col-sm-12 slogan_img_right">
                  <img src={about5} alt="" />
                </div>
              </div>

                  <button className="btn btn-success button-slogan">Join us now</button>
        </div>
      </div>
    </div>
  );
}
