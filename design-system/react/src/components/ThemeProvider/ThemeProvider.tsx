import { useMachine } from '@xstate/react';
import type { FC, ReactNode } from 'react';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { ToastProvider } from '../Toast';

import { themeProviderMachine } from './machine';

import type { FuelTheme } from '~/hooks/useTheme';
import {
  themeContext,
  DEFAULT_THEMES,
  getInitialTheme,
} from '~/hooks/useTheme';

export type ThemeProps = {
  withFonts?: boolean;
  children: ReactNode;
  themes?: Record<string, FuelTheme>;
  initialTheme?: string;
};

export const ThemeProvider: FC<ThemeProps> = ({
  children,
  withFonts = true,
  themes = DEFAULT_THEMES,
  initialTheme: current = getInitialTheme(),
}) => {
  const curr = themes[current] ? current : Object.keys(themes)[0];
  const [state, send] = useMachine(() =>
    themeProviderMachine.withContext({
      themes: themes as Record<string, FuelTheme>,
      current: curr,
    })
  );

  function setTheme(value: FuelTheme) {
    send('SET_THEME', { value });
  }

  return (
    <themeContext.Provider value={{ ...state.context, setTheme }}>
      <ToastProvider />
      <GlobalStyles withFonts={withFonts} />
      {children}
    </themeContext.Provider>
  );
};
