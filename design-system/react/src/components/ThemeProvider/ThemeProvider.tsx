import { useEffect, type FC, type ReactNode } from 'react';
import { useStore } from '~/hooks/useStore';
import type { FuelTheme } from '~/hooks/useTheme';
import { themeContext } from '~/hooks/useThemeContext';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { ToastProvider } from '../Toast';

export type ThemeProps = {
  withFonts?: boolean;
  children: ReactNode;
  themes?: Record<string, FuelTheme>;
  initialTheme?: string;
};

export const ThemeProvider: FC<ThemeProps> = ({
  children,
  withFonts = true,
  themes,
  initialTheme: current = useStore.getState().theme,
}) => {
  const store = useStore();

  useEffect(() => {
    store.setTheme(current);
  }, [current]);

  useEffect(() => {
    themes && store.setThemes(themes);
  }, [themes]);

  return (
    <themeContext.Provider
      value={{
        current: store.theme,
        themes: store.themes,
        setTheme: store.setTheme,
      }}
    >
      <ToastProvider />
      <GlobalStyles withFonts={withFonts} />
      {children}
    </themeContext.Provider>
  );
};
