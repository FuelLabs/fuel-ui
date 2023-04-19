// core types.tests.ts
import * as Stitches from '../types/index';
import { createStitches, FontFace } from '../types/index';

const { css, globalCss, keyframes, styled, theme } = createStitches({
  utils: {
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
  theme: {
    colors: {
      hiContrast: 'hsl(200, 12%, 5%)',
      loContrast: 'white',
      gray100: 'hsl(206, 20%, 98.8%)',
      gray200: 'hsl(206, 14%, 96.0%)',
      gray300: 'hsl(206, 13%, 93.7%)',
      gray400: 'hsl(206, 12%, 92.0%)',
      gray500: 'hsl(206, 12%, 89.5%)',
      gray600: 'hsl(206, 11%, 85.2%)',
      gray700: 'hsl(206, 10%, 80.0%)',
      gray800: 'hsl(206, 6%, 56.1%)',
      gray900: 'hsl(206, 6%, 43.9%)',
      pedro: '$intentsBase100',
    },
    space: {
      1: '10px',
      2: '20px',
    },
    fontSizes: {
      '1': '11px',
      '2': '13px',
      '3': '15px',
      '4': '17px',
      '5': '19px',
      '6': '21px',
      '7': '27px',
      '8': '35px',
      '9': '59px',
    },
  },
  media: {
    bp1: '(min-width: 620px)',
  },
});

keyframes({
  from: {
    color: '$intentsBase100',
  },
  to: {
    color: '$intentsBase900',
  },
});

globalCss({
  body: {
    backgroundColor: '$intentsBase300',
    '@bp1': {
      backgroundColor: '$intentsBase100',
    },
  },
});

// const externalStyles: Arg<typeof css> = {
// 	'@bp1': {
// 		backgroundColor: '$intentsBase100',
// 	},
// 	'backgroundColor': '$intentsBase300',
// }

// void externalStyles

const PotatoButton = styled('button', {
  variants: {
    peace: {
      mercy: {
        color: 'MediumOrchid',
      },
      trust: {
        color: 'Turquoise',
      },
    },
    hue: {
      blue: {
        backgroundColor: '$intentsBase100',
      },
      red: {
        backgroundColor: '$intentsBase100',
      },
    },
  },
  compoundVariants: [
    {
      hue: 'blue',
      css: {
        backgroundColor: '$intentsBase200',
      },
    },
  ],
});

void function Test() {
  return <PotatoButton peace="mercy" hue="blue" />;
};

const ExtendedButton = styled(PotatoButton, {
  width: '$$max',
  variants: {
    hue: {
      green: {
        width: '$$max',
        backgroundColor: '$intentsBase100',
      },
      red: {
        backgroundColor: '$intentsBase100',
      },
    },
    love: {
      free: {
        color: 'ForestGreen',
      },
      good: {
        color: 'GoldenRod',
      },
    },
  },
  defaultVariants: {
    hue: 'red',
  },
  compoundVariants: [
    {
      hue: 'green',
      css: {
        backgroundColor: '$intentsBase200',
      },
    },
  ],
});

void function Test() {
  return <ExtendedButton peace="mercy" love="free" hue="red" />;
};

void function Test() {
  return (
    <PotatoButton
      css={{
        backgroundColor: '$intentsBase300',

        '@all': {
          backgroundColor: 'initial',
        },

        '@bp1': {
          backgroundColor: 'initial',
        },
      }}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Issue #821
 * -----------------------------------------------------------------------------------------------*/

type UnionProps =
  | { type: 'single'; collapsible: boolean }
  | { type: 'multiple' };
const UnionComponent: React.FC<UnionProps> = () => null;
const StyledUnionComponent = styled(UnionComponent, {});

void function Test() {
  <>
    <StyledUnionComponent type="single" collapsible />
    {/* @ts-expect-error */}
    <StyledUnionComponent type="multiple" collapsible />
  </>;
};

/* -------------------------------------------------------------------------------------------------
 * Issue #1010
 * -----------------------------------------------------------------------------------------------*/
const fontFaceArray: FontFace[] = [
  {
    fontFamily: 'Inter',
    src: `url(file.woff2) format("woff2")`,
    fontDisplay: 'swap',
  },
];
const styles = {
  '@font-face': fontFaceArray,
  body: {
    // Falbacking to a serif font so it's easier to see that the swap is hapenning
    fontFamily: 'Inter, serif',
  },
};
void function Test() {
  globalCss(styles);
};
