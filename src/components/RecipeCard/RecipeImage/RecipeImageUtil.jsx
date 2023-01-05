import DefaultImg from '../../../assets/Default_Img.jpeg';
import ForkKnife from '../../../assets/Fork_Knife.jpeg';
import Grains from '../../../assets/Grains.jpeg';
import Vegetables from '../../../assets/Colorful_Vegetables.jpeg';
import Charcuterie from '../../../assets/Charcuterie_Board.webp';
import Cookies from '../../../assets/Cocoa_Cookies.jpeg';

const getNutrients = (ingrs) => {
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

const getSelectedImage = (selectText) => {
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

export { getNutrients, getSelectedImage };
