import React from "react";
import image from "../images/a.j-logo.png";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <div className="applicant-logo">
          <a href="https://ajokpainmo.netlify.app">
            <img src={image} alt="applicant-logo" />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
