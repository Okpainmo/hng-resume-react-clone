import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

function FirstComponent() {
  return (
    <div>
      <h4></h4>
      <Book job="Web Developer" salary="$12,000" />
      <Book job="Computer Engineer" salary="$15,000" />
      <Book job="Data Analist" salary="$12,000" />
    </div>
  );
}

function Book(props) {
  return (
    <section className="inline">
      <img
        src="https://ajokpainmo.netlify.app/Gulp/Images/a.j-2.jpg"
        alt="bookImageBanner"
        className="image"
      />
      <h3>This is the title of the book</h3>
      <h4 style={{ color: "blue", fontSize: "25px" }}>
        By Andrew James Okpainmo
      </h4>
      <h4>{props.job}</h4>
      <h4>{props.salary}</h4>
    </section>
  );
}

ReactDom.render(<FirstComponent />, document.getElementById("root"));
