export function createTypographValue({
  fontFamily,
  fontWeight,
  lineHeight,
  fontSize,
  letterSpacing,
  textCase,
  textDecoration,
}) {
  return {
    value: {
      fontFamily: `{fontFamilies.${fontFamily}}`,
      fontWeight: `{fontWeights.${fontWeight}}`,
      lineHeight: `{lineHeights.${lineHeight}}`,
      fontSize: `{fontSizes.${fontSize}}`,
      letterSpacing: `{letterSpacings.${letterSpacing}}`,
      textCase: `{textCases.${textCase}}`,
      textDecoration: `{textDecorations.${textDecoration}}`,
    },
    type: `typography`,
  };
}

export function createBody(fonts) {
  return Object.entries(fonts)
    .filter(([key]) => key === 'body')
    .reduce((obj, [key, font]) => {
      return {
        ...obj,
        [key]: Object.entries(font.sizes).reduce((obj, [size, sizeItem]) => {
          const weights = font.weights.filter((w) => w !== 'regular');
          return {
            ...obj,
            [size]: createTypographValue({
              fontFamily: key,
              fontWeight: `normal`,
              lineHeight: sizeItem.lineHeight,
              fontSize: size,
              letterSpacing: 'default',
              textCase: 'normal',
              textDecoration: 'none',
            }),
            ...(weights &&
              weights.reduce((obj, weight) => {
                return {
                  ...obj,
                  [`${size}.${weight}`]: createTypographValue({
                    fontFamily: key,
                    fontWeight: weight,
                    lineHeight: sizeItem.lineHeight,
                    fontSize: size,
                    letterSpacing: 'default',
                    textCase: 'normal',
                    textDecoration: 'none',
                  }),
                };
              }, {})),
          };
        }, {}),
      };
    }, {});
}

export function createHeadings(fonts) {
  const selected = Object.entries(fonts).filter(
    ([key]) => key === 'headings'
  )[0];

  const sizes = selected[1].sizes;
  const weights = selected[1].weights.filter((w) => w !== 'regular');

  return Object.entries(sizes).reduce((obj, [key, size]) => {
    return {
      ...obj,
      [key]: createTypographValue({
        fontFamily: 'headings',
        fontWeight: `normal`,
        lineHeight: size.lineHeight,
        fontSize: size.fontSize,
        letterSpacing: size.letterSpacing,
        textCase: 'normal',
        textDecoration: 'none',
      }),
      ...(weights &&
        weights.reduce((obj, weight) => {
          return {
            ...obj,
            [`${key}.${weight}`]: createTypographValue({
              fontFamily: 'headings',
              fontWeight: `${weight}`,
              lineHeight: size.lineHeight,
              fontSize: size.fontSize,
              letterSpacing: size.letterSpacing,
              textCase: 'normal',
              textDecoration: 'none',
            }),
          };
        }, {})),
    };
  }, {});
}
