import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ColorModeContext from './components/ColorModeContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const palette = {
  light: {
    primary: { main: '#66bb6a', light: '#F5F7FA' },
    secondary: { main: '#323F4B' },
    text: { primary: '#616E7C', dark: '#323F4B' },
  },
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          ...darkTheme.palette,
          // common: { white: "#66bb6a" },
          primary: { main: '#66bb6a' },
          text: {
            primary: 'rgba(255,255,255,0.7)',
            secondary: 'rgba(255,255,255,0.7)',
          },
          action: { active: '#66bb6a' },
        }
      : {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
          },
          secondary: {
            main: palette.light.secondary.main,
          },
          text: {
            primary: palette.light.text.primary,
            dark: palette.light.text.dark,
          },
          background: {
            default: '#F5F7FA',
          },
        }),
  },
});
//             // footer: "#F5F7FA"
//           }
//         : {})
//       // }
//       // text: {
//       //   ...(mode === "light"
//       //     ? {
//       //         primary: "#616E7C"
//       //         // dark: "#323F4B"
//       //       }
//       //     : {})
//     // },
//     // secondary: { ...(mode === "light" ? { main: "#f2f4f8" } : {}) }
//   }
// })

const Theme = (props) => {
  const [mode, setMode] = React.useState();
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const currTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currTheme}>{props.childComponent}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#77c800",
//       footer: "#F5F7FA"
//       // dark: "#3949AB",
//       // light: "#7986CB"
//     },
//     text: {
//       primary: "#616E7C",
//       dark: "#323F4B"
//     },
//     secondary: {
//       main: "#f2f4f8"
//       // dark: "#FF7100",
//       // light: "#FFB402"
//     }
//   }
// });

export default Theme;
