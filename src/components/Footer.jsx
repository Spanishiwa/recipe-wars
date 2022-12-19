import { Box } from "@mui/system";
import React from "react";
import Edamam_Badge_Transparent from "../assets/Edamam_Badge_Transparent.svg";
import Bg_Pattern_Dark from "../assets/Debut_Dark.png";
// import Bg_Pattern_Light from "../assets/Beige_Paper.png";
import Bg_Pattern_Light from "../assets/Back_Pattern.png";
import { Link, Typography, useTheme } from "@mui/material";
import { GitHub, Help, LocalDining } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

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

      justifyContent: { xs: "center", sm: "left" },
      padding: {
        xs: "16px",
        sm: "16px 16px 16px 12px",
        lg: "16px"
      }
    }
  };

  return (
    <Box {...footerAttributes}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flex: "1 1 auto",
          justifyContent: "space-between",
          margin: { lg: "auto" },
          maxWidth: "lg",
          width: { xs: "auto", lg: "100%" }
        }}
      >
        <Link
          component="a"
          href="https://developer.edamam.com/attribution"
          rel="noopener"
          sx={{ display: "inline-block" }}
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
        <Box sx={{ display: { xs: "none", sm: "flex" } }} gap={4}>
          {/* <Link
            component="a"
            href="/recipe-wars"
            rel="noopener"
            target="_blank"
            title="Homepage"
          >
            HOME
          </Link> */}
          <Link
            component={RouterLink}
            to="/"
            rel="noopener"
            title="Recipe showcase page"
            variant="b1"
          >
            <LocalDining sx={{ verticalAlign: "middle" }} />
            <Typography component="span" sx={{ ml: 1 }} variant="b1">
              START
            </Typography>
          </Link>
          <Link
            component={RouterLink}
            href="/faq"
            rel="noopener"
            target="_blank"
            title="Frequently Asked Questions page"
            variant="b1"
          >
            <Help sx={{ verticalAlign: "middle" }} />
            <Typography component="span" sx={{ ml: 1 }} variant="b1">
              FAQ
            </Typography>
          </Link>
          <Link
            component="a"
            href="https://github.com/Spanishiwa/recipe-wars"
            rel="noopener"
            target="_blank"
            title="GitHub source code"
            variant="b1"
          >
            <GitHub sx={{ verticalAlign: "middle" }} />
            <Typography component="span" sx={{ ml: 1 }} variant="b1">
              GITHUB
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
