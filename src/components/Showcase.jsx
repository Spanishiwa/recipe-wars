import { Box, Card } from "@mui/material";
import React from "react";
import { RecipeCardSkeleton } from "./RecipeCardSkeleton";
import { RecipeCard } from "./RecipeCard";
import { VerticalStepper } from "./VerticalStepper";
import { ITALIAN_BEEF, KEY_LIME_PIE, CHEESY_CORN } from "../config";
import StockBeefImage from "../assets/Italian_Beef.jpeg";
import KeyLimePieImage from "../assets/Key_Lime_Pie.png";
import CheesyCornImage from "../assets/Cheesy_Corn.jpeg";

export const Showcase = (props) => {
  const {
    handleBlur,
    handleChange,
    handleDelete,
    handleEdit,
    handleKeySubmit,
    handleToggleDisable,
    handleServingsToggle,
    values
  } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* <VerticalStepper></VerticalStepper> */}
      <Card>
        <RecipeCard
          description={KEY_LIME_PIE.description}
          imgSrc={KeyLimePieImage}
          instructions={KEY_LIME_PIE.instructions}
          recipeName="KeyLimePie"
          servings={KEY_LIME_PIE.servings}
          title={KEY_LIME_PIE.title}
          values={values}
          {...props}
        />
      </Card>
      <Card>
        <RecipeCard
          description={CHEESY_CORN.description}
          imgSrc={CheesyCornImage}
          instructions={CHEESY_CORN.instructions}
          recipeName="CheesyCorn"
          servings={CHEESY_CORN.servings}
          title={CHEESY_CORN.title}
          values={values}
          {...props}
        />
      </Card>
      <Card>
        <RecipeCard
          description={ITALIAN_BEEF.description}
          imgSrc={StockBeefImage}
          instructions={ITALIAN_BEEF.instructions}
          recipeName="ItalianBeef"
          servings={ITALIAN_BEEF.servings}
          title={ITALIAN_BEEF.title}
          values={values}
          {...props}
        />
      </Card>
    </Box>
  );
};
