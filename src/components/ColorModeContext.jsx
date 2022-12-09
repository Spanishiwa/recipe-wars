import React from "react";

const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    // This is intentional
  }
});

export default ColorModeContext;
