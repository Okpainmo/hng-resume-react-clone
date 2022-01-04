import React from "react";
import image from "../images/a.j.jpg";

function SellerIntro() {
  return (
    <React.Fragment>
      <section className="applicant-intro">
        <div className="applicant-intro-text">
          <div className="intro-text-bold">
            Hello, my name is <br />
            Andrew James Okpainmo
          </div>
          <div className="intro-text-extra">
            I am a frontend web developer with an eye for design, and an
            interest in solving challenging tasks.
          </div>
          <div className="intro-buttons">
            <a
              href="/Images/Okpainmo-Resume (1).png"
              role="button"
              className="resume-btn"
              download
            >
              Download My Resume
            </a>
            <a
              href="mailto:okpainmoandrew@gmail.com"
              role="button"
              className="contact-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="applicant-photo-case">
          <div className="applicant-photo">
            <img className="applicant-photo" src={image} alt="applicant-pic" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SellerIntro;
