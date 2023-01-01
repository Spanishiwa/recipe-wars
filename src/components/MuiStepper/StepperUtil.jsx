const getHandlersRecipeCard = (handlers) => {
  return {
    handleBlur: handlers.handleBlur,
    handleChange: handlers.handleChange,
    handleDelete: handlers.handleDelete,
    handleEdit: handlers.handleEdit,
    handleKeyDelete: handlers.handleKeyDelete,
    handleKeySubmit: handlers.handleKeySubmit,
    handleToggleDisable: handlers.handleToggleDisable,
    handleServingsToggle: handlers.handleServingsToggle,
  };
};

const getHandlersRecipeForm = (handlers) => {
  return {
    handleBlur: handlers.handleBlur,
    handleChange: handlers.handleChange,
    handleDelete: handlers.handleDelete,
    handleEdit: handlers.handleEdit,
    handleKeySubmit: handlers.handleKeySubmit,
    handleSubmit: handlers.handleSubmit,
    handleToggleDisable: handlers.handleToggleDisable,
  };
};

const getHandlersRecipeFormOptional = (handlers) => {
  return {
    handleBlur: handlers.handleBlur,
    handleChange: handlers.handleChange,
    handleDelete: handlers.handleDelete,
    handleEdit: handlers.handleEdit,
    handleImage: handlers.handleImage,
    handleKeyDelete: handlers.handleKeyDelete,
    handleKeySubmit: handlers.handleKeySubmit,
    handleSelect: handlers.handleSelect,
    handleToggleDisable: handlers.handleToggleDisable,
  };
};

const getRecipeInputValues = (inputs) => {
  return inputs.reduce(
    (accum, input) => {
      switch (input.id) {
        case 'image-input':
          accum.imgSrc = input.imgSrc;
          return accum;
        case 'title-input':
          accum.title = input.text;
          return accum;
        case 'description-textarea':
          accum.description = input.text;
          return accum;
        case 'recipe-textarea':
          accum.instructions = input.text;
          return accum;
        case 'servings-input':
          accum.servings = input.text;
          return accum;
        case 'servings-toggle':
          accum.isUntitledPerServing = input.isUntitledPerServing;
          return accum;
        case 'photos-select-input':
          accum.selectText = input.text;
          return accum;
        default:
          return accum;
      }
    },
    {
      imgSrc: '',
      title: '',
      description: '',
      instructions: '',
      servings: 1,
      isUntitledPerServing: true,
      selectText: '',
    }
  );
};

export {
  getHandlersRecipeForm,
  getHandlersRecipeCard,
  getHandlersRecipeFormOptional,
  getRecipeInputValues,
};
