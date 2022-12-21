import { Box } from "@mui/material";
import React from "react";
import { RecipeCardSkeleton } from "./RecipeCardSkeleton";
import { RecipeCard } from "./RecipeCard";
import { VerticalStepper } from "./VerticalStepper";
import { ITALIAN_BEEF } from "../config";
export const Start = () => {
  return (
    <Box>
      <VerticalStepper></VerticalStepper>
      {/* <RecipeCardSkeleton></RecipeCardSkeleton> */}
      <RecipeCard
        isPresentation={true}
        values={ITALIAN_BEEF.ingredients}
      ></RecipeCard>
      YOO
    </Box>
  );
};
