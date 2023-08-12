import { type ReactNode } from 'react';

import { GlobalStyles } from '../../styles/GlobalStyles';
import { ToastProvider } from '../Toast';

export type ThemeProps = {
  withFonts?: boolean;
  children: ReactNode;
};

export function ThemeProvider({ children, withFonts = true }: ThemeProps) {
  return (
    <>
      <ToastProvider />
      <GlobalStyles withFonts={withFonts} />
      {children}
    </>
  );
}
