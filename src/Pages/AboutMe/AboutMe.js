import React from "react";
import { ReactComponent as JsSvg } from "../../Structure/Images/logo-javascript.svg";
import { ReactComponent as ReactSvg } from "../../Structure/Images/react-2.svg";
import { ReactComponent as HtmlSvg } from "../../Structure/Images/html-1.svg";
import { ReactComponent as CssSvg } from "../../Structure/Images/css-3.svg";
import "./AboutMe.css";
import PropTypes from "prop-types";

const AboutMe = () => (
  <main className="containerDoc">
    <div className="entireDoc">
      <header className="title">SANTIAGO GIMENEZ</header>
      <div className="firstPart">
        <aside className="sidePic">
          <img
            src={require("../../Structure/Images/santi-2.jpg")}
            alt="profilePic"
          />
        </aside>
        <ol id="data">
          <li>Outgoing</li>
          <li>Competitive</li>
          <li>Strong</li>
          <li>Perfectionist</li>
          <li>Gamer</li>
        </ol>
      </div>
      <div className="learningTo">
        <div className="learningList">
          <JsSvg />
          <ReactSvg />
          <HtmlSvg />
          <CssSvg />
        </div>
      </div>
      <div className="firstdiv">
        <div className="titleArt">TRAINEE FRONT END DEVELOPER</div>
      </div>
    </div>
  </main>
);


export default AboutMe;
