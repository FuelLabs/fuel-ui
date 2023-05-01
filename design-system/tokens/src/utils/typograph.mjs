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
            [size]: font.weights.reduce((obj, weight) => {
              return {
                ...obj,
                [weight]: font.cases.reduce((obj, textCase) => {
                  return {
                    ...obj,
                    [textCase]: createTypographValue({
                      fontFamily: key,
                      fontWeight: `${key}.${weight}`,
                      lineHeight: sizeItem.lineHeight,
                      fontSize: size,
                      letterSpacing: 'default',
                      textCase,
                      textDecoration: 'none',
                    }),
                  };
                }, {}),
              };
            }, {}),
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
        fontWeight: `headings.${size.fontWeight}`,
        lineHeight: size.lineHeight,
        fontSize: size.fontSize,
        letterSpacing: size.letterSpacing,
        textCase: size.textCase,
        textDecoration: 'none',
      }),
    };
  }, {});
}

export function createUtilities(utilities) {
  return Object.entries(utilities).reduce((obj, [key, utility]) => {
    return {
      ...obj,
      [key]: Object.keys(utility.sizes).reduce((obj, size) => {
        return {
          ...obj,
          [size]: createTypographValue({
            ...utility.sizes[size],
            fontFamily: utility.fontFamily,
            fontWeight: `${utility.fontFamily}.${utility.sizes[size].fontWeight}`,
          }),
        };
      }, {}),
    };
  }, {});
}
