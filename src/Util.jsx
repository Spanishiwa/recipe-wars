const INIT_INGREDIENT_INPUT = {
  id: "ingredient-input",
  text: "",
  isDisabled: false,
  error: false,
  status: " ",
  isInput: true
};

const INIT_INGREDIENTS_TEXTAREA = {
  id: "ingredients-textarea",
  text: "",
  status: " ",
  error: false,
  isInput: true
};

const INIT_IMAGE_INPUT = {
  id: "image-input",
  imgSrc: "",
  imgName: "",
  isInput: true
};

const INIT_TITLE_INPUT = {
  id: "title-input",
  text: "Untitled",
  status: " ",
  error: false,
  isInput: true
};

const INIT_DESCRIPTION_TEXTAREA = {
  id: "description-textarea",
  text: "",
  status: " ",
  error: false,
  isInput: true
};

const INIT_RECIPE_TEXTAREA = {
  id: "recipe-textarea",
  text: "",
  status: " ",
  error: false,
  isInput: true
};

const INIT_SERVINGS_INPUT = {
  id: "servings-input",
  text: "1",
  isInput: true
};

const INIT_SERVINGS_TOGGLE = {
  id: "servings-toggle",
  isUntitledPerServing: true,
  isKeyLimePiePerServing: true,
  isCheesyCornPerServing: true,
  isItalianBeefPerServing: true,
  isInput: true
};

const INIT_PHOTOS_SELECT_INPUT = {
  id: "photos-select-input",
  text: "",
  isInput: true
};

const INIT_KEY_LIME_PIE = [
  {
    description:
      "Key Lime pie is the quintessential Florida pie, and no one does it better than the famous Kermit's Key West Key Lime Shoppe. Enjoy the classic version of this tart-sweet or try their delectable version dipped in chocolate.",
    id: "KeyLimePie",
    imgSrc: `${process.env.PUBLIC_URL}/Key_Lime_Pie.png`,
    instructions:
      "FOR THE CRUST\nPreheat oven to 375 °F and set an oven rack in the middle position.\nIn a medium bowl, combine the graham cracker crumbs, brown sugar, and melted butter; stir with a fork first, and then your hands until the mixture is well combined. Using your fingers and the bottom of a glass or dry measuring cup, press the crumbs firmly into the bottom and up the sides of a 9 x 1.5-inch (deep-dish) pie pan. The crust should be about ¼-inch thick. (Tip: do the sides first.) Bake for 10 minutes, until just slightly browned. Let the crust cool on a wire rack.\n\nFOR THE FILLING\nLower the oven temperature to 350°F. In a large bowl, whisk together the sweetened condensed milk, yogurt, lime zest, and lime juice. Pour the thick mixture into the warm graham cracker crust. Bake for 15 minutes, until the filling is almost set; it should wobble a bit. Let cool at room temperature for 30 minutes, then place in the refrigerator to chill thoroughly, about 3 hours.\n\nFOR THE TOPPING\nIn the bowl of an electric mixer, beat the heavy cream until soft peaks form. Add the confectioners’ sugar and beat until medium peaks form. Top the pie with the whipped cream. Decorate with the lime zest and lime slices. Store the pie in the refrigerator until ready to serve. Slice the pie into wedges, wiping your knife clean between slices, and serve cold. Make-Ahead Instructions: You can make the crust a day ahead of time, but the filling should be added on the day of serving, otherwise the crust will get soggy",
    recipeName: "KeyLimePie",
    servings: 6,
    title: "Famous Florida Keys Lime Pie"
  },
  {
    text: "4 large egg yolks",
    parsed: "4 whole egg yolks",
    id: "KeyLimePielargeeggyolks",
    calories: "219",
    protein: "11g protein",
    carbohydrate: "2g carbs",
    fat: "18.1g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  },
  {
    text: "1/4 cup granulated sugar",
    parsed: "0.25 Cup sugar",
    id: "KeyLimePiecupgranulatedsugar",
    calories: "194",
    protein: "0g protein",
    carbohydrate: "50g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  },
  {
    text: "28 oz sweetened condensed milk",
    parsed: "28 Ounce sweetened condensed milk",
    id: "KeyLimePieozsweetenedcondensedmilk",
    calories: "2548",
    protein: "63g protein",
    carbohydrate: "432g carbs",
    fat: "69g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  },
  {
    text: "1 cup key lime juice",
    parsed: "1 Cup lime juice",
    id: "KeyLimePiecupkeylimejuice",
    calories: "3",
    protein: "1g protein",
    carbohydrate: "20g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  },
  {
    text: "1 tbsp key lime zest",
    parsed: "1 Tablespoon lemon zest",
    id: "KeyLimePietbspkeylimezest",
    calories: "2",
    protein: "0g protein",
    carbohydrate: "1g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  },
  {
    text: "3 oz butter",
    parsed: "3 Ounce butter",
    id: "KeyLimePieozbutter",
    calories: "610",
    protein: "1g protein",
    carbohydrate: "0g carbs",
    fat: "69g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  },
  {
    text: "7 oz graham cracker",
    parsed: "7 Ounce cinnamon honey graham cracker",
    id: "KeyLimePieozgrahamcracker",
    calories: "853",
    protein: "13g protein",
    carbohydrate: "154g carbs",
    fat: "21g fat",
    isDisabled: true,
    recipeName: "KeyLimePie",
    error: false,
    status: " "
  }
];

const INIT_CHEESY_CORN = [
  {
    description:
      "A simple and delicious recipe for creamy, gooey Korean Corn Cheese. Minimal ingredients and made in under 20 minutes. Serve with chips or bread for dipping as a yummy appetizer, or keep it simple and serve as a side dish. We love it with freshly grilled meat.",
    id: "CheesyCorn",
    imgSrc: `${process.env.PUBLIC_URL}/Cheesy_Corn.jpeg`,
    instructions:
      "1. Preheat oven to 400˚F.\n\n2. Combine all ingredients into a mixing bowl and stir together.\n\n3. Pour mixture into a lightly greased baking dish.\n\n4. Bake for 10 minutes or until mixture melts and bubbles.\n\n5. Transfer dish to broiler and broil for 2 minutes or until top is browned.\n\n6. Serve immediately.\n\n\nTips and Tricks for Delicious Korean Corn Cheese Success!\n\nAlthough fresh corn is our preference, you can definitely use canned corn or frozen corn. If using canned corn, thoroughly drain kernels from 1 (15 ounce) can and make sure to omit the 1 1/2 teaspoon of sugar as canned corn sits in a naturally sweet brine. If using frozen corn (about 1 1/3 cups), thaw completely and drain any excess water before continuing to make the recipe as instructed.\n\nWe’re often asked if the sugar is important. Yes! A small amount of sugar is added to further bring out the corns natural sweetness and add a nice balance to the creamy mayonnaise and salty cheese.\n\nSource: https://www.spoonforkbacon.com/korean-cheesy-corn/",
    title: "Korean Cheesy Corn",
    recipeName: "CheesyCorn",
    servings: 2
  },
  {
    text: "2 ears sweet corn",
    parsed: "2 ear corn",
    id: "CheesyCornearssweetcorn",
    calories: "175",
    protein: "7g protein",
    carbohydrate: "38g carbs",
    fat: "3g fat",
    isDisabled: true,
    recipeName: "CheesyCorn",
    error: false,
    status: " "
  },
  {
    text: "1/2 cup mayonnaise",
    parsed: "0.5 Cup mayonnaise",
    id: "CheesyCorncupmayonnaise",
    calories: "799",
    protein: "0g protein",
    carbohydrate: "0g carbs",
    fat: "89g fat",
    isDisabled: true,
    recipeName: "CheesyCorn",
    error: false,
    status: " "
  },
  {
    text: "4 ounces mozzarella",
    parsed: "4 ounce mozzarella",
    id: "CheesyCornouncesmozzarella",
    calories: "340",
    protein: "25g protein",
    carbohydrate: "2g carbs",
    fat: "25g fat",
    isDisabled: true,
    recipeName: "CheesyCorn",
    error: false,
    status: " "
  },
  {
    text: "1 1/2 teaspoons sugar",
    parsed: "1.5 teaspoon sugar",
    id: "CheesyCornteaspoonssugar",
    calories: "24",
    protein: "0g protein",
    carbohydrate: "6g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "CheesyCorn",
    error: false,
    status: " "
  },
  {
    text: "2 green onions",
    parsed: "2 Whole green onions",
    id: "CheesyCorngreenonions",
    calories: "9",
    protein: "1g protein",
    carbohydrate: "2g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "CheesyCorn",
    error: false,
    status: " "
  }
];

const INIT_ITALIAN_BEEF = [
  {
    description:
      "Italian beef is made using cuts of beef from the sirloin rear or the top/bottom round wet-roasted in broth with garlic, oregano and spices until cooked throughout.",
    id: "ItalianBeef",
    imgSrc: `${process.env.PUBLIC_URL}/Italian_Beef.jpeg`,
    instructions:
      "1. Preheat the oven to 400 degrees F.\n\n2. Render the beef fat by chopping it into small bits (about the size of peas) with a food processor. Be sure the fat is very cold--it will chop better. If you don't have a food processor, you can chop the fat by hand. Use a sharp knife and cut it as small as you can. Heat up the fat in a sauté pan over medium heat until the bits are browned. Strain the solids from the fat and measure 1/4 cup of fat for the gravy.\n\n3. Make the beef gravy by combining all of the ingredients, including the beef fat, in a medium saucepan over medium heat. When the mixture begins to boil reduce the heat and simmer for 5 minutes, then turn the heat to low.\n\n4. Make the sandwiches by heating up the rolls in the hot oven for 3 minutes.\n\n5. For each sandwich, drop 1/4 pound of sliced beef (separate the slices) into the gravy for 2 minutes. Make sure the gravy isn't boiling. It should be around 180 degrees F. After the beef has soaked in the gravy, use tongs to arrange the beef on a warmed sandwich roll and top with your choice of hot giardiniera or sweet peppers. Or both. Spoon on some extra gravy just before serving.",
    recipeName: "ItalianBeef",
    recipeSettings: "ItalianBeef",
    servings: 8,
    title: "Portillo's Italian beef sandwich"
  },
  {
    text: "3 pound chuck roast",
    parsed: "3 pound chuck roast",
    id: "ItalianBeefpoundchuckroast",
    calories: "1809.8",
    protein: "288.1g protein",
    carbohydrate: "1g carbs",
    fat: "72.5g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "14.5 ounce beef broth",
    parsed: "14.5 ounce beef broth",
    id: "ItalianBeefouncebeefbroth",
    calories: "53.4",
    protein: "8.1g protein",
    carbohydrate: "4.9g carbs",
    fat: "0.4g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "8 ounces pepperoncini",
    parsed: "8 ounces pepperoncini",
    id: "ItalianBeefouncespepperoncini",
    calories: "41",
    protein: "1.8g protein",
    carbohydrate: "8.8g carbs",
    fat: "0.7g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "20 Provolone cheese slices",
    parsed: "onecheeseslices",
    id: "ItalianBeefProvolonecheeseslices",
    calories: "1965",
    protein: "143.2g protein",
    carbohydrate: "12g carbs",
    fat: "149.1g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "1 tablespoon Italian seasoning",
    parsed: "1 tablespoon Italian seasoning",
    id: "ItalianBeeftablespoonItalianseasoning",
    calories: "7",
    protein: "0.2g protein",
    carbohydrate: "1.7g carbs",
    fat: "0.2g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "2 teaspoons granulated sugar",
    parsed: "2 teaspoon granulated sugar",
    id: "ItalianBeefteaspoonsgranulatedsugar",
    calories: "33",
    protein: "0g protein",
    carbohydrate: "8.4g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "1 teaspoon garlic powder",
    parsed: "1 teaspoon garlic powder",
    id: "ItalianBeefteaspoongarlicpowder",
    calories: "10.3",
    protein: "0.5g protein",
    carbohydrate: "2.3g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  },
  {
    text: "1 teaspoon onion powder",
    parsed: "1 teaspoon onion powder",
    id: "ItalianBeefteaspoononionpowder",
    calories: "8",
    protein: "0.2g protein",
    carbohydrate: "1.9g carbs",
    fat: "0g fat",
    isDisabled: true,
    recipeName: "ItalianBeef",
    error: false,
    status: " "
  }
];

export {
  INIT_INGREDIENT_INPUT,
  INIT_INGREDIENTS_TEXTAREA,
  INIT_IMAGE_INPUT,
  INIT_TITLE_INPUT,
  INIT_DESCRIPTION_TEXTAREA,
  INIT_RECIPE_TEXTAREA,
  INIT_SERVINGS_INPUT,
  INIT_SERVINGS_TOGGLE,
  INIT_PHOTOS_SELECT_INPUT,
  INIT_KEY_LIME_PIE,
  INIT_CHEESY_CORN,
  INIT_ITALIAN_BEEF
};