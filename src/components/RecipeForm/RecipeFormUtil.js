const examplesDescriptionText = `Enter your recipe ingredients below "grocery list" style -
an ingredient and unit of measurement. Don't enter guesstimations
such as "roughly" one "heaping" cup or
descriptions like "finely minced" and "steamed".
Substitute rare ingredients for common names and double check after
each submission.`;

const headerSubtext = `Look up the nutritional content of your favorite dishes, compare
recipes, and substitute ingredients to fit your goals. Enter a
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
    'Good input - used exact measurements',
    'Poor input - nonstandard unit of measurement',
    'Good input - ingredient was concise without unnecessary descriptors',
    'Poor input - recipe ingredient preparation methods were included',
    'Good input - a niche ingredient was substituted for a common ingredient',
    "Poor input - too specific to be found in Edamam's database",
  ],
};

export {
  examplesDescriptionText,
  headerSubtext,
  ingredientsPlaceholder,
  inputExamples,
};
