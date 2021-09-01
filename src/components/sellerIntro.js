import React from "react";

function SellerIntro() {
  return (
    <React.Fragment>
      <section class="applicant-intro">
        <div class="applicant-intro-text">
          <div class="intro-text-bold">
            Hello, my name is <br />
            Andrew James Okpainmo
          </div>
          <div class="intro-text-extra">
            I am a frontend web developer with an eye for design, and an
            interest in solving challenging tasks.
          </div>
          <div class="intro-buttons">
            <a
              href="/Images/Okpainmo-Resume (1).png"
              role="button"
              class="resume-btn"
              download
            >
              Download My Resume
            </a>
            <a
              href="mailto:okpainmoandrew@gmail.com"
              role="button"
              class="contact-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div class="applicant-photo-case">
          <div class="applicant-photo">
            <img
              class="applicant-photo"
              src="./Images/a.j okpainmo.jpg"
              alt="applicant-photo"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SellerIntro;
