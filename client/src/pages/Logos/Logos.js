import React from "react";
import "./Logos.css";
import Fade from "react-reveal/Fade";

const Logos = ({ logoName1, logoName2, logoName3 }) => {
  return (
    <div className="logos-container">
      <Fade left duration={1900}>
        <div className={`img ${logoName1}`}></div>
        <div className={`img ${logoName2}`}></div>
        <div className={`img ${logoName3}`}></div>
      </Fade>
    </div>
  );
};
export default Logos;
