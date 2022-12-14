const examplesDescriptionText = `Enter your recipe ingredients below "grocery list" style -
an ingredient and unit of measurement. Don't enter guesstimations
such as "roughly" one "heaping" cup or
descriptions like "finely minced" and "steamed".
Substitute rare ingredients for common names and only enter ingredients with macronutrients (don't enter water).`;

const headerSubtext = `Look up the nutritional content of your favorite dishes, enter a
recipe title and at least one ingredient to get started!`;

const ingredientsPlaceholder = `Ingredients list with one ingredient & quantity per line e.g.
1/2 cup heavy cream
3 tablespoons butter
1 pound chicken breast`;

const inputExamples = {
  examples: [
    '12 ounces flour',
    'About 1 scoop of flour',
    '3 cups carrots',
    '3 cups peeled and chopped carrots',
    '8.5 oz red chili pepper',
    '8.5 oz Italian giardiniera',
  ],
  titles: [
    'Good input - standard unit of measurement',
    'Poor input - nonstandard unit of measurement',
    'Good input - concise input without descriptors',
    'Poor input - preparation methods were included',
    'Good input - specific ingredient was substituted for a common ingredient',
    "Poor input - too specific to be found in Edamam's database",
  ],
};

export {
  examplesDescriptionText,
  headerSubtext,
  ingredientsPlaceholder,
  inputExamples,
};
