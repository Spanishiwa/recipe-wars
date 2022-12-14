# RECIPE WARS

Fetch the nutritional content of your favorite ingredient or recipe (multiple ingredients) in real time and substitute ingredients to compare nutrition by serving size or by total.

## FEATURES

- MUI **Dark Mode** toggle using useContext and useMemo Hooks. Detects dark mode preference with CSS prefers-color-scheme
- **Form validation error handling & toasts** via MUI snackbars & useRef Hooks focus inputs
- Responsive single-page application with **React-Router-Dom** useNavigate & useLocation Hooks
- **RESTful API fetches** and edits ingredient list items in place
- Persisting state with **localStorage** custom hooks (images only persist per session). State managed with **useContext & useReducer** Hooks (actions, action creators, and dispatch)
- Accessible forms, inputs, and icon buttons handle keyboard controls and are correctly tab indexed
- Display nutritional content per serving or by total

## TODO

- Refactor rootReducer to use multiple reducers, extract hooks
- Complete call to action for /start page
- Migrate project to TypeScript

  \
  \
  Special thanks to [Edamam API](https://developer.edamam.com/attribution). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [Material UI](https://mui.com/) v5 and [Material Icons](https://mui.com/material-ui/material-icons/). Routes from React-Router-Dom and textures sourced from [transparent textures](https://www.transparenttextures.com/). Favicons, logos, and additional icons sourced from [freeiconspng](https://www.freeiconspng.com/) and [visualpharm](https://www.visualpharm.com/free-icons/). \
  \
  This repository does not include the free API keys which are needed to fetch from the Edamam API.
