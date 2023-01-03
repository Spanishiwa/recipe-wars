export const questionsAndAnswers = [
  {
    question0: 'What is recipe wars and what does it do?',
    answer0: `Recipe wars allows users to create their own online recipe,
    determine its nutritional content, and then substitute ingredients
    to personalize a recipe to their needs. Recipe wars leverages the
    Edamam API to determine the nutritional content of ingredients.`,
  },
  {
    question1: 'How does recipe wars work?',
    answer1: `A controlled form built in ReactJS submits each of the ingredients
      that a user adds to his ingredients list. HTTP post requests send
      the ingredients list which is matched to entries in Edamam's
      database. Edamam sends back the nutritional content of each
      ingredient like calories, carbohydrates, proteins, and fats.
      Nutritional content is displayed alongside other personalizations
      gathered from user input like recipe image, title, description, and
      instructions.`,
  },
  {
    question2:
      'Posting multiple ingredients at a time to my ingredients list keeps failing',
    answer2: `Unfortunately, Edamam does not post which ingredients in a list are
      failing to parse so I am unable to provide more descriptive error
      messages without parsing each ingredient individually. Edamam's
      free API subscription is limited in the number of requests that I
      can make, so it is not feasible to display more descriptive errors.
      Fortunately, I don't clear the user input on failed posts, so
      try posting less ingredients at a time or submitting them one at a
      time.`,
  },
  {
    question3:
      'My ingredients keep changing after I post them to my ingredients list',
    answer3: `Edamam's API parses user input and returns the closest match in
      their database, but sometimes the match is different than the user
      input. The database doesn't have every food item and parsing
      user input is difficult, so keep double checking your list or try
      making a substition. The query searches for a quantity, unit of
      measurement, and ingredient, so keep your input as concise as
      possible to find the best ingredient match.`,
  },
  {
    question4: `I'm unable to upload my file`,
    answer4: `The file input is set to only accept file types relating to images
      with "image/*". Other media file types like video and audio files
      are unable to be uploaded.`,
  },
  {
    question5: 'Which technologies did you use to build recipe wars?',
    answer5: `Recipe wars is built with ReactJS v18 using controlled form inputs,
      React-Router-Dom v6 for routing, and leverages Material UI's v5
      styling library. All images, icons, and APIs are sourced from free
      to use services like Edamam's Open API. All of the code, except
      for the API keys, is available to be viewed on GitHub. Recipes are
      saved/state is persisted in the browsers local storage.`,
  },
  {
    question6:
      'I want to restart - clear all the recipes and restore the defaults!',
    answer6: `You can clear your local storage, open this site in an incognito
      browser, or press the "RESET ALL" button below`,
  },
  {
    question7: 'After refreshing my browser my saved recipe images are gone',
    answer7: `Unfortunately that is a limitation of how I am saving recipe images
      in local storage with createObjectURL. I would need to save the
      recipe images with a more robust method like FileSystem API, but
      that would require user permission.`,
  },
];
