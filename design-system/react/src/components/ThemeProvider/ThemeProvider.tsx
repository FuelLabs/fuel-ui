import { lightTheme, darkTheme } from '@fuel-ui/css';
import { useMachine } from '@xstate/react';
import { IconContext } from 'phosphor-react';
import type { FC, ReactNode } from 'react';
import { useContext, createContext } from 'react';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { ToastProvider } from '../Toast';

import type { FuelTheme } from './machine';
import { getInitialTheme, themeProviderMachine } from './machine';

type Context = {
  setTheme: (theme: FuelTheme) => void;
  themes: Record<string, FuelTheme>;
  current: string;
};

const DEFAULT_THEMES = {
  dark: darkTheme,
  light: lightTheme,
};

const context = createContext<Context>({
  setTheme: () => null,
  themes: DEFAULT_THEMES,
  current: getInitialTheme(),
} as Context);

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
    themeProviderMachine.withContext({ themes, current: curr })
  );

  function setTheme(value: string) {
    send('SET_THEME', { value });
  }

  return (
    <IconContext.Provider value={{ size: 16 }}>
      <context.Provider value={{ ...state.context, setTheme }}>
        <ToastProvider />
        <GlobalStyles withFonts={withFonts} />
        {children}
      </context.Provider>
    </IconContext.Provider>
  );
};

export function useFuelTheme() {
  return useContext(context);
}
