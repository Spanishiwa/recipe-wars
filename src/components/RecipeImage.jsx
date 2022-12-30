import { Box, CardMedia, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import ImageModal from './ImageModal';
import { CalorieSvg } from './CalorieSvg';
import { CarbohydrateSvg } from './CarbohydrateSvg';
import { ProteinSvg } from './ProteinSvg';
import { FatSvg } from './FatSvg';
import { ServingsSwitch } from './ServingsSwitch';
import DefaultImg from '../assets/Default_Img.jpeg';
import ForkKnife from '../assets/Fork_Knife.jpeg';
import Grains from '../assets/Grains.jpeg';
import Vegetables from '../assets/Colorful_Vegetables.jpeg';
import Charcuterie from '../assets/Charcuterie_Board.webp';
import Cookies from '../assets/Cocoa_Cookies.jpeg';
import PropTypes from 'prop-types';

export const RecipeImage = (props) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const handleClickOpen = () => {
    setState((prevState) => ({ ...prevState, isOpen: true }));
  };
  const handleClose = () => {
    setState((prevState) => ({ ...prevState, isOpen: false }));
  };

  const svgContainerSx = {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: { xs: '6px', md: '8px' },
    justifyContent: 'space-between',
    pb: '16px',
    rowGap: '16px',
  };

  const {
    description,
    handleServingsToggle,
    imgSrc,
    ingredients,
    recipeName,
    selectText,
    servings,
    isPerServing,
    title,
  } = props;
  const recipe = recipeName || 'Untitled';

  const sumNutrients = (ingrs) => {
    return ingrs.reduce(
      (accum, ingr) => {
        accum.calories = parseFloat(accum.calories) + parseFloat(ingr.calories);
        accum.carbohydrate =
          parseFloat(accum.carbohydrate) + parseFloat(ingr.carbohydrate);
        accum.protein = parseFloat(accum.protein) + parseFloat(ingr.protein);
        accum.fat = parseFloat(accum.fat) + parseFloat(ingr.fat);

        return accum;
      },
      { calories: 0, carbohydrate: 0, protein: 0, fat: 0 }
    );
  };

  const { calories, carbohydrate, protein, fat } = sumNutrients(ingredients);

  const { isOpen } = state;

  const selectedImage = (selectText) => {
    switch (selectText) {
      case 'forkKnife':
        return ForkKnife;
      case 'grains':
        return Grains;
      case 'colorfulVegetables':
        return Vegetables;
      case 'charcuterie':
        return Charcuterie;
      case 'cookies':
        return Cookies;
      case ' ':
        return ForkKnife;
      default:
        return DefaultImg;
    }
  };

  return (
    <Fragment>
      <Box component="figure" m={0}>
        <CardMedia
          alt={title}
          component="img"
          height="194"
          image={imgSrc || selectedImage(selectText)}
          onClick={handleClickOpen}
          sx={{
            cursor: 'pointer',
          }}
          title={title}
        />
        <Typography
          component="figcaption"
          sx={{ padding: '24px 16px', whiteSpace: 'pre-wrap' }}
          variant="b2"
        >
          <Box sx={{ ...svgContainerSx }}>
            <CalorieSvg
              calories={(isPerServing ? calories / servings : calories).toFixed(
                0
              )}
            />
            <CarbohydrateSvg
              carbohydrate={(isPerServing
                ? carbohydrate / servings
                : carbohydrate
              ).toFixed(0)}
            />
            <ProteinSvg
              protein={(isPerServing ? protein / servings : protein).toFixed(0)}
            />
            <FatSvg fat={(isPerServing ? fat / servings : fat).toFixed(0)} />
          </Box>
          <Box
            display="flex"
            sx={{
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 2,
            }}
          >
            <ServingsSwitch
              handleServingsToggle={handleServingsToggle}
              isPerServing={isPerServing}
              recipeName={recipe}
            />
            <Typography
              component="span"
              sx={{ verticalAlign: 'middle' }}
              variant="b2"
            >
              Serves {servings}
            </Typography>
          </Box>
          {description}
        </Typography>
      </Box>
      <ImageModal
        handleClose={handleClose}
        imgSrc={imgSrc || selectedImage(selectText)}
        open={isOpen}
        title={title}
      />
    </Fragment>
  );
};

RecipeImage.propTypes = {
  description: PropTypes.string,
  handleServingsToggle: PropTypes.func.isRequired,
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      parsed: PropTypes.string.isRequired,
      calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      carbohydrate: PropTypes.string.isRequired,
      protein: PropTypes.string.isRequired,
      fat: PropTypes.string.isRequired,
      status: PropTypes.string,
      isDisabled: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired,
      recipeName: PropTypes.string.isRequired,
    })
  ),
  recipeName: PropTypes.string,
  selectText: PropTypes.string,
  servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isPerServing: PropTypes.bool,
  title: PropTypes.string,
};
