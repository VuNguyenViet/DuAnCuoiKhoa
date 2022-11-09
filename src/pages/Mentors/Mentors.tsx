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
     
  
    <div>
      <div className="mentors_title">
        <p>Our Team</p>
      </div>

      <div className="container">
        <div className="intro_mentors1">
          <div className="row">
            <div className="col-4">
              <div className="mentor_profile">
                <img src= {mentor1} alt="" />
                <div className="contact_mentor">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
               
              </div>
            </div>

            <div className="col-4">
              <div className="mentor_profile">
                <img src= {mentor2} alt="..." />
                <div className="contact_mentor">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mentor_profile">
                <img src={mentor3} alt="..." />
                <div className="contact_mentor">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="intro_mentors2">
          <div className="row">
            <div className="col-4">
              <div className="mentor_profile">
                <img src= {mentor4} alt="..." />
                <div className="contact_mentor">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="mentor_profile">
                <img src= {mentor5} alt="..." />
                <div className="contact_mentor">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item">
                  <h2>Mentor name</h2>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="mentor_profile">
                <img src={mentor5} alt="..." />
                <div className="contact_mentor">
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="mentor_item">
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