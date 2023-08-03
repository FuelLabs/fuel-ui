// Values in pixels for different spacing sizes
export const space = {
  0: '0px', // 0 pixels
  1: '0.25rem', // 4 pixels
  2: '0.5rem', // 8 pixels
  3: '0.75rem', // 12 pixels
  4: '1rem', // 16 pixels
  5: '1.25rem', // 20 pixels
  6: '1.5rem', // 24 pixels
  7: '1.75rem', // 28 pixels
  8: '2rem', // 32 pixels
  9: '2.25rem', // 36 pixels
  10: '2.5rem', // 40 pixels
  11: '2.75rem', // 44 pixels
  12: '3rem', // 48 pixels
  14: '3.5rem', // 56 pixels
  16: '4rem', // 64 pixels
  20: '5rem', // 80 pixels
  24: '6rem', // 96 pixels
  28: '7rem', // 112 pixels
  32: '8rem', // 128 pixels
  36: '9rem', // 144 pixels
  40: '10rem', // 160 pixels
  44: '11rem', // 176 pixels
  48: '12rem', // 192 pixels
  52: '13rem', // 208 pixels
  56: '14rem', // 224 pixels
  60: '15rem', // 240 pixels
  64: '16rem', // 256 pixels
  72: '18rem', // 288 pixels
  80: '20rem', // 320 pixels
  96: '24rem', // 384 pixels
};

export const sizes = {
  ...space,
  auto: 'auto',
  none: 'none',
  0: '0rem',
  xs: '18.75rem', // 300px
  sm: '27.5rem', // 420px
  md: '37.5rem', // 600px
  lg: '48rem', // 768px
  xl: '64rem', // 1024px
  '2xl': '80rem', // 1280px
  '3xl': '90rem', // 1440px
  '4xl': '120rem', // 1920px
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
  screenW: '100vw',
  screenH: '100vh',
};

export const fonts = {
  sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  display:
    '"PxGrotesk", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  heading:
    '"PxGrotesk", system-ui, -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",sans-serif',
  mono: '"PxGrotesk Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

// Font sizes in rems
export const fontSizes = {
  // heading font sizes
  xs: '0.694rem', // 11.104 pixels
  sm: '0.833rem', // 13.328 pixels
  md: '1.2rem', // 19.2 pixels
  lg: '1.2rem', // 19.2 pixels
  xl: '1.44rem', // 23.04 pixels
  '2xl': '1.728rem', // 27.648 pixels
  '3xl': '2.074rem', // 33.184 pixels
  '4xl': '2.488rem', // 39.808 pixels
  '5xl': '2.986rem', // 47.776 pixels
  '6xl': '3.583rem', // 57.328 pixels
  '7xl': '4.3rem', // 68.8 pixels
  // heading font sizes
  h1: '$5xl', // uses the value of '5xl'
  h2: '$4xl', // uses the value of '4xl'
  h3: '$3xl', // uses the value of '3xl'
  h4: '$2xl', // uses the value of '2xl'
  h5: '$xl', // uses the value of 'xl'
  h6: '$lg', // uses the value of 'lg'
};

export const fontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export const lineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
};

export const radii = {
  none: '0px',
  sm: '4px',
  md: '6px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  full: '9999px',
  default: '$md',
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.15)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.15)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.15), 0 4px 6px -4px rgb(0 0 0 / 0.15)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
};

export const zIndices = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
};
