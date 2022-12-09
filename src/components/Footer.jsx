import { Box } from "@mui/system";
import React from "react";
import Edamam_Badge_Transparent from "../assets/Edamam_Badge_Transparent.svg";
import Bg_Pattern from "../assets/Beige_Paper.png";
function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#F5F7FA",
        backgroundImage: `url(${Bg_Pattern})`,
        borderTop: "1px solid rgba(0, 0, 0, 0.23)",
        padding: 2
      }}
    >
      <a
        href="https://developer.edamam.com/attribution"
        rel="noopener"
        target="_blank"
        title="Edamam API logo and attribution"
      >
        <img
          alt="Powered by Edamam"
          className="logo-edamam"
          src={Edamam_Badge_Transparent}
        />
      </a>
    </Box>
  );
}

export default Footer;
