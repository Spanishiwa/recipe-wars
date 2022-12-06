import React from "react";
import Edamam_Badge_Light from "../assets/Edamam_Badge_Light.svg";

function Footer() {
  return (
    <React.Fragment>
      <a href="https://developer.edamam.com/attribution" target="_blank">
        <img
          className="logo-edamam"
          src={Edamam_Badge_Light}
          alt="Powered by Edamam"
        />
      </a>
    </React.Fragment>
  );
}

export default Footer;
