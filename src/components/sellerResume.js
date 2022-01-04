import React from "react";

function SellerResume() {
  return (
    <React.Fragment>
      <section class="applicant-resume">
        <div class="resume-header">My Resume</div>
        <div class="resume-array">
          <div class="resume-array-item">
            <div class="array-item-header">Personal Details</div>
            <div class="array-item-content">
              <ul>
                <li>Name : Andrew James Okpainmo</li>
                <li>Age : 25 Years</li>
                <li>Marital Status : Single</li>
              </ul>
            </div>
            <div class="array-item-header">Education</div>
            <div class="array-item-content">
              <ul>
                <li>Redehub Ng (web design)</li>
                <li>
                  HNG internship season 8 <span>2021 - date</span>
                </li>
                <li>
                  Google Africa Developer Scholarship <span>2021 - date</span>
                </li>
                <li>
                  Federal university of technology Minna(undergraduate degree)
                  <span>2020 - date</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="resume-array-item">
            <div class="array-item-header">Technical Skills</div>
            <div class="array-item-content">
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Vanilla Javascript</li>
                <li>Jquery</li>
                <li>Gulp.JS</li>
                <li>Git and Github</li>
              </ul>
            </div>
          </div>
          <div class="resume-array-item">
            <div class="array-item-header">Work Experience</div>
            <div class="array-item-content">
              <ul>
                <li>
                  Freelancer <span>2021 - date</span>
                </li>
                <li>
                  HNG internship season 8 (intern) <span>2021-date</span>
                </li>
              </ul>
            </div>
            <div class="array-item-header">Hobbies</div>
            <div class="array-item-content">
              <ul>
                <li>Coding/Programming</li>
                <li>Playing and Watching Soccer</li>
                <li>Solving Mathematics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SellerResume;
