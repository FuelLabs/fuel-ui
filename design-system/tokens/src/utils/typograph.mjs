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
          return {
            ...obj,
            [size]: createTypographValue({
              fontFamily: key,
              fontWeight: `Regular`,
              lineHeight: sizeItem.lineHeight,
              fontSize: size,
              letterSpacing: 'default',
              textCase: 'normal',
              textDecoration: 'none',
            }),
          };
        }, {}),
      };
    }, {});
}

export function createHeadings(fonts) {
  const selected = Object.entries(fonts).filter(
    ([key]) => key === 'headings'
  )[0];
  return Object.entries(selected[1].sizes).reduce((obj, [key, size]) => {
    return {
      ...obj,
      [key]: createTypographValue({
        fontFamily: 'headings',
        fontWeight: `Regular`,
        lineHeight: size.lineHeight,
        fontSize: size.fontSize,
        letterSpacing: size.letterSpacing,
        textCase: 'normal',
        textDecoration: 'none',
      }),
    };
  }, {});
}
