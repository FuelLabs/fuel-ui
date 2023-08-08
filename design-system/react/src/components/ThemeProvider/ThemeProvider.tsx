import { type FC, type ReactNode } from 'react';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { ToastProvider } from '../Toast';

export type ThemeProps = {
  withFonts?: boolean;
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProps> = ({
  children,
  withFonts = true,
}) => {
  return (
    <>
      <ToastProvider />
      <GlobalStyles withFonts={withFonts} />
      {children}
    </>
  );
};
