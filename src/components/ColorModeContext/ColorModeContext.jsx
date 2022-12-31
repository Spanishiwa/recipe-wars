import { createContext } from 'react';

const ColorModeContext = createContext({
  toggleColorMode: () => {
    // This is intentional
  },
});

export default ColorModeContext;
