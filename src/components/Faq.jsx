import React from "react";
import { LocalDining } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Bg_Pattern_Dark from "../assets/Debut_Dark.png";
// import Bg_Pattern_Light from "../assets/Beige_Paper.png";
import Bg_Pattern_Light from "../assets/Back_Pattern.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Typography,
  useTheme
} from "@mui/material";
import { Container } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";

export const Faq = () => {
  const mode = useTheme().palette.mode;
  const bgPattern = mode === "light" ? Bg_Pattern_Light : Bg_Pattern_Dark;
  const bgColor = mode === "light" ? "#F5F7FA" : "#121212";
  const hoverSx = {
    "&:hover": {
      backgroundImage: `url(${bgPattern})`,
      backgroundColor: bgColor,
      backgroundRepeat: "repeat"
    }
  };

  const expandedSx = {
    "& .MuiAccordionDetails-root": {
      backgroundImage: `url(${bgPattern})`,
      backgroundColor: bgColor,
      backgroundRepeat: "repeat"
    }
  };

  return (
    <Container
      className="faq"
      maxWidth="lg"
      sx={{ "&.MuiContainer-root.faq": { padding: "0px" } }}
    >
      <Card sx={{ padding: 2, mb: 2 }}>
        <Typography component="h4" color="text.primary" variant="h6">
          Frequently Asked Questions
        </Typography>
      </Card>
      <Accordion sx={expandedSx}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "primary.main"
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={hoverSx}
        >
          <Typography>What is recipe wars and what does it do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recipe wars allows users to create their own online recipe,
            determine its nutritional content, and then substitute ingredients
            to personalize a recipe to their needs. Recipe wars leverages the
            Edamam API to determine the nutritional content of ingredients.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={expandedSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={hoverSx}
        >
          <Typography>How does recipe wars work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A controlled form built in ReactJS submits each of the ingredients
            that a user adds to his ingredients list. HTTP post requests send
            the ingredients list which is matched to entries in Edamam's
            database. Edamam sends back the nutritional content of each
            ingredient like calories, carbohydrates, proteins, and fats.
            Nutritional content is displayed alongside other personalizations
            gathered from user input like recipe image, title, description, and
            instructions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={expandedSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={hoverSx}
        >
          <Typography>
            Posting multiple ingredients at a time to my ingredients list keeps
            failing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Unfortunately, Edamam does not post which ingredients in a list are
            failing to parse so I am unable to provide more descriptive error
            messages without parsing each ingredient individually. Edamam's free
            API subscription is limited in the number of requests that I can
            make, so it is not feasible to display more descriptive errors.
            Fortunately, I don't clear the user input on failed posts, so try
            posting less ingredients at a time or submitting them one at a time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={expandedSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={hoverSx}
        >
          <Typography>
            My ingredients keep changing after I post them to my ingredients
            list
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Edamam's API parses user input and returns the closest match in
            their database, but sometimes the match is different than the user
            input. The database doesn't have every food item and parsing user
            input is difficult, so keep double checking your list or try making
            a substition. The query searches for a quantity, unit of
            measurement, and ingredient, so keep your input as concise as
            possible to find the best ingredient match.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={expandedSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          sx={hoverSx}
        >
          <Typography>I'm unable to upload my file</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The file input is set to only accept file types relating to images
            with `image/*`. Other media file types like video and audio files
            are unable to be uploaded.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={expandedSx}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={hoverSx}
        >
          <Typography>
            Which technologies did you use to build recipe wars?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Recipe wars is built with ReactJS v18 using controlled form inputs,
            React-Router-Dom v6 for routing, and leverages Material UI's v5
            styling library. All images, icons, and APIs are sourced from free
            to use services like Edamam's Open API. All of the code, except for
            the API keys, is available to be viewed on GitHub.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Card sx={{ p: 2, mt: 2 }}>
        <Button
          aria-label="START PAGE"
          color="primary"
          component={RouterLink}
          disableElevation
          size="large"
          title="Start Page"
          to="/start"
          variant="contained"
        >
          <LocalDining sx={{ mr: 1 }} />
          GET STARTED
        </Button>
      </Card>
    </Container>
  );
};
