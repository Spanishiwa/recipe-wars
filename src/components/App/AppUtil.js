const flattenPayload = (data, name) => {
  return data.ingredients.map((ingredient) => {
    const recipeName = ingredient.recipeName || 'Untitled';
    const validId = (recipeName + ingredient.text)
      .replace(/[^a-zA-Z]+/g, '')
      .slice(-50);
    const { nutrients } = ingredient.parsed[0];

    return {
      id: name || validId,
      text: `${ingredient.parsed[0].quantity} ${ingredient.parsed[0].measure} ${ingredient.parsed[0].foodMatch}`,
      parsed: `${ingredient.parsed[0].quantity} ${ingredient.parsed[0].measure} ${ingredient.parsed[0].foodMatch}`,
      calories: nutrients.ENERC_KCAL.quantity,
      carbohydrate: `${nutrients.CHOCDF.quantity}${nutrients.CHOCDF.unit} carbs`,
      protein: `${nutrients.PROCNT.quantity}${nutrients.PROCNT.unit} protein`,
      fat: `${nutrients.FAT.quantity}${nutrients.FAT.unit} fat`,
      status: ' ',
      isDisabled: true,
      error: false,
      recipeName: recipeName,
    };
  });
};

export { flattenPayload };
