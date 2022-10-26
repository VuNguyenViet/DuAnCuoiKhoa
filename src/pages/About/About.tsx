import React from "react";
import './../../assets/scss/pages/_about.scss'

type Props = {};

export default function Introduction({}: Props) {
  return (
    <div className="container">
      <div className="main_about_img">
        <img src="https://picsum.photos/200/200" alt="..." />
      </div>

      <div className="row about_title_main">
        <div className="col-3">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-3">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-3">
          <div className="about_title">
            <i className="fa fa-graduation-cap"></i>
            <h2>Skilled Instructor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              necessitatibus.
            </p>
          </div>
        </div>

        <div className="col-3">
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
        <div className="col-6 pack_1">
          <div className="welcome_img">
            <img src="https://picsum.photos/500/400" alt="" />
          </div>
        </div>

        <div className="col-6 pack_2">
          <div className="welcome_content">
            <h1>Welcome to Eleaning</h1>
            <p className="welcome_text1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, qui?
            </p>

            <p className="welcome_text2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_slogan">
        <div className="about_slogun_top">
          <i className="fa fa-graduation-cap"></i>
            <h2>Lorem ipsum dolor sit amet.</h2>
        </div>

        <div className="about_slogan_bot">
              <h3>Lorem ipsum dolor sit amet consectetur.</h3>
              <div className="row">
                <div className="col-6 slogan_img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>

                <div className="col-6 slogan_img">
                  <img src="https://picsum.photos/200/200" alt="" />
                </div>
              </div>

                  <button className="btn btn-success">Join us now</button>
        </div>
      </div>
    </div>
  );
}
