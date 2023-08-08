import { useEffect, type FC, type ReactNode, useState } from 'react';
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
  const [sprite, setSprite] = useState<string | null>(null);

  useEffect(() => {
    store.setTheme(current);
  }, [current]);

  useEffect(() => {
    themes && store.setThemes(themes);
  }, [themes]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('@fuel-ui/icons/icons.svg').then((svg) => {
      setSprite(svg.default);
    });
  });

  return (
    <themeContext.Provider
      value={{
        sprite,
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
