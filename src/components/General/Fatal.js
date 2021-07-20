import React from "react";
import "../../css/fatal.css";
const Fatal = (props) => {
  return (
    <React.Fragment>
      <h1>500 Error Page #3</h1>
      <p className="zoom-area">
        <b>CSS</b> animations to make a cool 500 page.{" "}
      </p>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <a
          target="_blank"
          href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
          className="more-link"
        >
          Visit the original article
        </a>
      </div>
    </React.Fragment>
  );
  // return <h2 classNameName="center rojo">{props.mensaje}</h2>;
};

export default Fatal;
