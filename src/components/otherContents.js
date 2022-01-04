import React from "react";
import hnglogo from "../images/hng.png";
import zurilogo from "../images/zuri.png";
import I4Glogo from "../images/I4G.png";

function OtherContents() {
  return (
    <React.Fragment>
      <section className="more-content">
        <div className="contact-case">
          <div className="contact-case-item">
            <span className="fas fa-map-marked-alt"></span>
            <span>
              Ungwan Doma, Gonin-Gora <br />
              Kaduna, Nigeria
            </span>
          </div>
          <div className="contact-case-item">
            <span className="fas fa-envelope"></span>
            <span>
              okpainmoandrews@gmail.com, <br />
              mawiyoandrews@gmail.com
            </span>
          </div>
          <div className="contact-case-item">
            <span className="fas fa-mobile-alt"></span>
            <span>
              +234 81 8976 4364, <br />
              +234 70 8721 2060
            </span>
          </div>
        </div>
        <div className="socials-case">
          <a href="https://web.facebook.com/MawiyoAndrews/">
            <span className="fab fa-facebook-square"></span>
          </a>
          <a href="https://mobile.twitter.com/AJ_Okpainmo/">
            <span className="fab fa-twitter-square"></span>
          </a>
          <a href="https://www.instagram.com/a.j_okpainmo/">
            <span className="fab fa-instagram-square"></span>
          </a>
          <a href="https://www.linkedin.com/mwlite/in/okpainmo-andrew-ba259617a/">
            <span className="fab fab fa-linkedin"></span>
          </a>
          <a href="https://github.com/Okpainmo">
            <span className="fab fa-github-square"></span>
          </a>
        </div>
        <div className="internship-info more-text">
          I built this resume' app for the second stage task (front end track)
          of the HNG internship season 8 - powered by:
          <div className="internship-sponsors">
            <div className="internship-item">
              <a href="https://hng.tech/">
                <img src={hnglogo} alt="HNG logo" />
              </a>
            </div>
            <div className="internship-item">
              <a href="https://internship.zuri.team/">
                <img src={zurilogo} alt="zuri logo" />
              </a>
            </div>
            <div className="internship-item">
              <a href="https://ingressive.org/">
                <img src={I4Glogo} alt="Ingressive for good logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="more-text">
          I am interested in working on any front end web development project
          with you or with your team. Feel free to contact me - so we can bring
          that dream project to life.
        </div>
        <div className="more-text">
          Click
          <a href="./print-name-app.html" target="_blank">
            here
          </a>
          to see the name printing app that i built along with this resume app
          as my stage two task(front end track) of HNGi8.
        </div>
        <div className="last-mail-button">
          <a href="mailto:okpainmoandrew@gmail.com" role="button">
            Send me an email
          </a>
        </div>

        <div className="end-text">
          <div>
            Built with so much <span className="fas fa-heart"></span> by me
          </div>
          <span>&copy; 2021, All rights reserved, A.J Okpainmo</span>
        </div>
      </section>
    </React.Fragment>
  );
}

export default OtherContents;
