import { lightColors } from '@fuel-ui/css';
import { createTheme, ThemeProvider } from '@fuel-ui/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const customTheme = createTheme('my-theme', {
  tokens: {
    colors: {
      ...lightColors,
      accent1: lightColors.indigo1,
      accent2: lightColors.indigo2,
      accent3: lightColors.indigo3,
      accent4: lightColors.indigo4,
      accent5: lightColors.indigo5,
      accent6: lightColors.indigo6,
      accent7: lightColors.indigo7,
      accent8: lightColors.indigo8,
      accent9: lightColors.indigo9,
      accent10: lightColors.indigo10,
      accent11: lightColors.indigo11,
      accent12: lightColors.indigo12,
    },
  },
  components: {
    Button: {
      defaultProps: {
        size: 'lg',
      },
      styles: {
        root: {
          variants: {
            color: {
              accent: {
                color: '$intentsPrimary11',
                backgroundColor: '$intentsPrimary9',
              },
            },
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider themes={{ custom: customTheme }}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
