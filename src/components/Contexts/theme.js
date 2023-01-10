import React, { useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ColorModeContext from './ColorModeContext';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';

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

const Theme = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  const { children } = props;

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const currTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={currTheme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
export default Theme;

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};
