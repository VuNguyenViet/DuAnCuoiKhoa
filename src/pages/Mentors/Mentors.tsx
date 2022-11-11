import React from 'react'
import './../../assets/scss/pages/_mentors.scss'


type Props = {}





export default function Mentors({ }: Props) {


  const mentor1 = require("../../assets/img/mentor/mentor_1.jpg");
  const mentor2 = require("../../assets/img/mentor/mentor_2.jpg");
  const mentor3 = require("../../assets/img/mentor/mentor_3.jpg");
  const mentor4 = require("../../assets/img/mentor/mentor_4.jpg");
  const mentor5 = require("../../assets/img/mentor/mentor_5.jpg");

  return (
     
  
    <div className='mentor_main'>
      <div className="mentors_title">
        <p>Our Team</p>
      </div>

      <div className="container">
        <div className="intro_mentors1">
          <div className="row">
            <div className="col-4 animate__animated animate__bounceInLeft animate__delay-0.5s">
              <div className="mentor_profile">
                <img src= {mentor1} alt="" />
                <div className="contact_mentor animate__animated animate__fadeIn animate__delay-1s">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item animate__animated animate__fadeIn animate__delay-1s">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
               
              </div>
            </div>

            <div className="col-4 animate__animated animate__bounceIn animate__delay-0.5s">
              <div className="mentor_profile ">
                <img src= {mentor2} alt="..." />
                <div className="contact_mentor animate__animated animate__fadeIn animate__delay-1s">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item animate__animated animate__fadeIn animate__delay-1s">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="col-4 animate__animated animate__bounceInRight animate__delay-0.5s">
              <div className="mentor_profile">
                <img src={mentor3} alt="..." />
                <div className="contact_mentor animate__animated animate__fadeIn animate__delay-1s">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item animate__animated animate__fadeIn animate__delay-1s">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="intro_mentors2">
          <div className="row">
            <div className="col-4 mentor_profile animate__animated animate__fadeInLeft animate__delay-0.5s">
              <div className="mentor_profile ">
                <img src= {mentor4} alt="..." />
                <div className="contact_mentor animate__animated animate__fadeIn animate__delay-1s">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item animate__animated animate__fadeIn animate__delay-1s">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-4 mentor_profile animate__animated animate__fadeInUp animate__delay-0.5s">
              <div className="mentor_profile ">
                <img src= {mentor5} alt="..." />
                <div className="contact_mentor animate__animated animate__fadeIn animate__delay-1s">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item animate__animated animate__fadeIn animate__delay-1s">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-4 mentor_profile animate__animated animate__fadeInRight animate__delay-0.5s">
              <div className="mentor_profile">
                <img src={mentor5} alt="..." />
                <div className="contact_mentor animate__animated animate__fadeIn animate__delay-1s">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item animate__animated animate__fadeIn animate__delay-1s">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}