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
        //falls through
        case 'title-input':
          accum.title = input.text;
        //falls through
        case 'description-textarea':
          accum.description = input.text;
        //falls through
        case 'recipe-textarea':
          accum.instructions = input.text;
        //falls through
        case 'servings-input':
          accum.servings = input.text;
        //falls through
        case 'servings-toggle':
          accum.isUntitledPerServing = input.isUntitledPerServing;
        //falls through
        case 'photos-select-input':
          accum.selectText = input.text;
        //falls through
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
