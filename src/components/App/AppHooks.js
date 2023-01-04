import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import { INIT_INPUTS } from '../../Util';

const useControlledLocalStorage = (state) => {
  // save ingredients, recipes, but not inputs to localstorage
  useEffect(() => {
    const stateWithInputsReset = [
      ...INIT_INPUTS,
      ...state.filter((v) => !v.isInput || v.id === 'servings-toggle'),
    ];

    localStorage.setItem('values', JSON.stringify(stateWithInputsReset));
  }, [state]);
};

const useRubberBandFix = () => {
  const mode = useTheme().palette.mode;
  const bgColor = mode === 'light' ? '#F5F7FA' : '#121212';

  // fix rubber banding scroll
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.backgroundRepeat = 'repeat';

    return () => {
      document.body.style.backgroundColor = null;
      document.body.style.backgroundRepeat = null;
    };
  }, [mode, bgColor]);
};

export { useControlledLocalStorage, useRubberBandFix };
