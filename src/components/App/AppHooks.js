import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import { DEFAULT_INPUTS } from '../../Util';

const useControlledLocalStorage = (state) => {
  // save ingredients, recipes, but not inputs to localstorage
  useEffect(() => {
    const stateWithFormInputsReset = state.map((prevState) => {
      const defaultInput = DEFAULT_INPUTS[prevState.id];
      if (defaultInput) return defaultInput;
      return prevState;
    });

    localStorage.setItem(
      'recipeStates',
      JSON.stringify(stateWithFormInputsReset)
    );
  }, [state]);
};

const useRubberBandFix = () => {
  const mode = useTheme().palette.mode;
  const themedBgColor = mode === 'light' ? '#F5F7FA' : '#121212';

  // fix rubber banding scroll
  useEffect(() => {
    document.body.style.backgroundColor = themedBgColor;
    document.body.style.backgroundRepeat = 'repeat';

    return () => {
      document.body.style.backgroundColor = null;
      document.body.style.backgroundRepeat = null;
    };
  }, [mode, themedBgColor]);
};

export { useControlledLocalStorage, useRubberBandFix };
