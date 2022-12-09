import { Box } from "@mui/system";
import React from "react";
import Edamam_Badge_Transparent from "../assets/Edamam_Badge_Transparent.svg";
import Bg_Pattern_Dark from "../assets/Binding_Dark.png";
import Bg_Pattern_Light from "../assets/Beige_Paper.png";
import { Link, useTheme } from "@mui/material";

function Footer() {
  const mode = useTheme().palette.mode;
  const footerSx =
    mode === "light"
      ? {
          backgroundColor: "primary.light",
          backgroundImage: `url(${Bg_Pattern_Light})`,
          borderTop: "1px solid rgba(0, 0, 0, 0.23)"
        }
      : {
          backgroundColor: "background.default",
          backgroundImage: `url(${Bg_Pattern_Dark})`
        };
  const footerAttributes = {
    component: "footer",
    sx: {
      display: "flex",
      ...footerSx,
      padding: 2
    }
  };

  return (
    <Box {...footerAttributes}>
      <Link
        component="a"
        href="https://developer.edamam.com/attribution"
        rel="noopener"
        target="_blank"
        title="Edamam API logo and attribution"
      >
        <Box
          alt="Powered by Edamam"
          component="img"
          className="logo-edamam"
          src={Edamam_Badge_Transparent}
          sx={{ display: "block", height: "50px" }}
        />
      </Link>
    </Box>
  );
}

export default Footer;
