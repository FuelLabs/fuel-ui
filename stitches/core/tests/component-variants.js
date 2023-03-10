import { createStitches } from '../src/index.js';

describe('Variants', () => {
  const componentConfig = {
    variants: {
      color: {
        blue: {
          backgroundColor: 'dodgerblue',
          color: 'white',
        },
        red: {
          backgroundColor: 'tomato',
          color: 'white',
        },
      },
      size: {
        small: {
          fontSize: '16px',
        },
        large: {
          fontSize: '24px',
        },
      },
      level: {
        1: {
          padding: '0.5em',
        },
        2: {
          padding: '1em',
        },
      },
    },
    compoundVariants: [
      {
        size: 'small',
        color: 'blue',
        css: {
          transform: 'scale(1.2)',
        },
      },
    ],
  };

  test('Renders a component without any initial styles', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component();

    expect(expression.className).toBe('fuel_PJLV');
    expect(getCssText()).toBe('');
  });

  test('Renders a component with 1 matching variant', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression1 = component({ size: 'small' });

    const expression1CssText = '.fuel_PJLV-Gaggi-size-small{font-size:16px}';

    expect(expression1.className).toBe('fuel_PJLV fuel_PJLV-Gaggi-size-small');
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{${expression1CssText}}`
    );

    const expression2 = component({ color: 'blue' });

    const expression2CssText =
      '.fuel_PJLV-kaCQqN-color-blue{background-color:dodgerblue;color:white}';

    expect(expression2.className).toBe('fuel_PJLV fuel_PJLV-kaCQqN-color-blue');
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small fuel_PJLV-kaCQqN-color-blue}@media{${
        expression1CssText + expression2CssText
      }}`
    );
  });

  test('Renders a component with 2 matching variants', () => {
    const { css, getCssText } = createStitches();
    const component = css({
      variants: {
        size: {
          small: {
            fontSize: '16px',
          },
          large: {
            fontSize: '24px',
          },
        },
        level: {
          1: {
            padding: '0.5em',
          },
          2: {
            padding: '1em',
          },
        },
      },
    });
    const expression = component({ size: 'small', level: 1 });

    expect(expression.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1'
    );

    const expressionSizeSmallCssText =
      '.fuel_PJLV-Gaggi-size-small{font-size:16px}';
    const expressionLevel1CssText = '.fuel_PJLV-iRwLiB-level-1{padding:0.5em}';

    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1}@media{${
        expressionSizeSmallCssText + expressionLevel1CssText
      }}`
    );
  });

  test('Renders a component with a 2 matching variants and 1 matching compound', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component({ size: 'small', color: 'blue' });

    const expressionColorBlueCssText =
      '.fuel_PJLV-kaCQqN-color-blue{background-color:dodgerblue;color:white}';
    const expressionSizeSmallCssText =
      '.fuel_PJLV-Gaggi-size-small{font-size:16px}';
    const expressionCompoundCssText =
      '.fuel_PJLV-cChFtv-cv{transform:scale(1.2)}';

    expect(expression.className).toBe(
      `fuel_PJLV fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small fuel_PJLV-cChFtv-cv`
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small}@media{${
        expressionColorBlueCssText + expressionSizeSmallCssText
      }}--sxs{--sxs:5 fuel_PJLV-cChFtv-cv}@media{${expressionCompoundCssText}}`
    );
  });
});

describe('Variants with defaults', () => {
  const componentConfig = {
    variants: {
      color: {
        blue: {
          backgroundColor: 'dodgerblue',
          color: 'white',
        },
        red: {
          backgroundColor: 'tomato',
          color: 'white',
        },
      },
      size: {
        small: {
          fontSize: '16px',
        },
        large: {
          fontSize: '24px',
        },
      },
      level: {
        1: {
          padding: '0.5em',
        },
        2: {
          padding: '1em',
        },
      },
    },
    compoundVariants: [
      {
        size: 'small',
        color: 'blue',
        css: {
          transform: 'scale(1.2)',
        },
      },
    ],
    defaultVariants: {
      size: 'small',
    },
  };

  test('Renders a component with the default variant applied', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component();

    expect(expression.className).toBe('fuel_PJLV fuel_PJLV-Gaggi-size-small');
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{.fuel_PJLV-Gaggi-size-small{font-size:16px}}`
    );
  });

  test('Renders a component with the default variant explicitly applied', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component({ size: 'small' });

    expect(expression.className).toBe('fuel_PJLV fuel_PJLV-Gaggi-size-small');
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{.fuel_PJLV-Gaggi-size-small{font-size:16px}}`
    );
  });

  test('Renders a component with the non-default variant explicitly applied', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component({ size: 'large' });

    expect(expression.className).toBe('fuel_PJLV fuel_PJLV-hsYHIj-size-large');
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-hsYHIj-size-large}@media{.fuel_PJLV-hsYHIj-size-large{font-size:24px}}`
    );
  });

  test('Renders a component with the default variant applied and a different variant explicitly applied', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component({ level: 1 });

    expect(expression.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1'
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1}@media{` +
        // implicit size:small
        `.fuel_PJLV-Gaggi-size-small{font-size:16px}` +
        // explicit level:1
        `.fuel_PJLV-iRwLiB-level-1{padding:0.5em}` +
        `}`
    );
  });

  test('Renders a component with the default variant applied, a different variant explicitly applied, and a compound applied', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const expression = component({ color: 'blue' });

    expect(expression.className).toBe(
      'fuel_PJLV fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small fuel_PJLV-cChFtv-cv'
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small}@media{` +
        // explicit color:blue
        `.fuel_PJLV-kaCQqN-color-blue{background-color:dodgerblue;color:white}` +
        // implicit size:small
        `.fuel_PJLV-Gaggi-size-small{font-size:16px}` +
        `}--sxs{--sxs:5 fuel_PJLV-cChFtv-cv}@media{` +
        // compound color:blue + size:small
        `.fuel_PJLV-cChFtv-cv{transform:scale(1.2)}` +
        `}`
    );
  });

  test('Returns a component class without the default variant applied when stringified', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfig);
    const className = `${component}`;

    expect(className).toBe('fuel_PJLV');
    expect(getCssText()).toBe(
      '--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{.fuel_PJLV-Gaggi-size-small{font-size:16px}}'
    );
  });
});

describe('Conditional variants', () => {
  const config = {
    media: {
      bp1: '(max-width: 767px)',
      bp2: '(min-width: 768px)',
    },
  };

  /** Component with variants and compound variants */
  const componentConfig = {
    variants: {
      color: {
        blue: {
          backgroundColor: 'dodgerblue',
          color: 'white',
        },
        red: {
          backgroundColor: 'tomato',
          color: 'white',
        },
      },
      size: {
        small: {
          fontSize: '16px',
        },
        large: {
          fontSize: '24px',
        },
      },
      level: {
        1: {
          padding: '0.5em',
        },
        2: {
          padding: '1em',
        },
      },
    },
    compoundVariants: [
      {
        size: 'small',
        color: 'blue',
        css: {
          transform: 'scale(1.2)',
        },
      },
    ],
  };

  test('Renders a component with no variant applied', () => {
    const { css, getCssText } = createStitches(config);
    const component = css(componentConfig);
    const componentClassName = 'fuel_PJLV';

    expect(component().className).toBe(componentClassName);
    expect(getCssText()).toBe('');
  });

  test('Renders a component with one variant applied', () => {
    const { css, getCssText } = createStitches(config);
    const component = css(componentConfig);
    const componentClassName = `fuel_PJLV`;
    const componentSmallClassName = `${componentClassName}-Gaggi-size-small`;
    const componentSmallCssText = `.${componentSmallClassName}{font-size:16px}`;

    expect(component({ size: 'small' }).className).toBe(
      [componentClassName, componentSmallClassName].join(' ')
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{${componentSmallCssText}}`
    );
  });

  test('Renders a component with one conditional variant on one breakpoint applied', () => {
    const { css, getCssText } = createStitches(config);
    const component = css(componentConfig);

    expect(component({ size: { '@bp1': 'small' } }).className).toBe(
      `fuel_PJLV fuel_PJLV-fHtTAQ-size-small`
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small}@media{` +
        `@media (max-width: 767px){.fuel_PJLV-fHtTAQ-size-small{font-size:16px}}` +
        `}`
    );
  });

  test('Renders a component with one conditional variant on two breakpoints applied', () => {
    const { css, getCssText } = createStitches(config);
    const component = css(componentConfig);
    const componentClassName = `fuel_PJLV`;
    const componentSmallBp1ClassName = `${componentClassName}-fHtTAQ-size-small`;
    const componentLargeBp2ClassName = `${componentClassName}-XwbVw-size-large`;
    const componentSmallBp1CssText = `@media (max-width: 767px){.${componentSmallBp1ClassName}{font-size:16px}}`;
    const componentLargeBp2CssText = `@media (min-width: 768px){.${componentLargeBp2ClassName}{font-size:24px}}`;

    expect(
      component({ size: { '@bp1': 'small', '@bp2': 'large' } }).className
    ).toBe(
      [
        componentClassName,
        componentSmallBp1ClassName,
        componentLargeBp2ClassName,
      ].join(' ')
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        componentSmallBp1CssText +
        componentLargeBp2CssText +
        `}`
    );
  });

  test('Renders a component with a conditional variant repeatedly', () => {
    const { css, getCssText } = createStitches(config);
    const component = css(componentConfig);

    expect(
      component({ size: { '@bp1': 'small', '@bp2': 'large' } }).className
    ).toBe(`fuel_PJLV fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large`);
    expect(getCssText()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        `@media (max-width: 767px){.fuel_PJLV-fHtTAQ-size-small{font-size:16px}}` +
        `@media (min-width: 768px){.fuel_PJLV-XwbVw-size-large{font-size:24px}}` +
        `}`
    );

    expect(
      component({ size: { '@bp1': 'small', '@bp2': 'large' } }).className
    ).toBe(`fuel_PJLV fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large`);
    expect(getCssText()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        `@media (max-width: 767px){.fuel_PJLV-fHtTAQ-size-small{font-size:16px}}` +
        `@media (min-width: 768px){.fuel_PJLV-XwbVw-size-large{font-size:24px}}` +
        `}`
    );

    expect(
      component({ size: { '@bp1': 'small', '@bp2': 'large' } }).className
    ).toBe(`fuel_PJLV fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large`);
    expect(getCssText()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        `@media (max-width: 767px){.fuel_PJLV-fHtTAQ-size-small{font-size:16px}}` +
        `@media (min-width: 768px){.fuel_PJLV-XwbVw-size-large{font-size:24px}}` +
        `}`
    );
  });

  test('Renders a component with a conditional inline variant repeatedly', () => {
    {
      const { css, getCssText } = createStitches(config);
      const component = css({
        variants: {
          size: {
            small: {
              fontSize: '16px',
            },
            large: {
              fontSize: '24px',
            },
          },
        },
      });

      expect(
        component({
          size: {
            '@media (width < 768px)': 'small',
            '@media (width >= 768px)': 'large',
          },
        }).className
      ).toBe(
        'fuel_PJLV fuel_PJLV-gjWYHE-size-small fuel_PJLV-fzmUzy-size-large'
      );

      expect(getCssText()).toBe(
        `--sxs{--sxs:4 fuel_PJLV-gjWYHE-size-small fuel_PJLV-fzmUzy-size-large}@media{` +
          `@media (max-width:767.9375px){.fuel_PJLV-gjWYHE-size-small{font-size:16px}}` +
          `@media (min-width:768px){.fuel_PJLV-fzmUzy-size-large{font-size:24px}}` +
          `}`
      );
    }

    {
      const { css, getCssText } = createStitches(config);
      const component = css({
        variants: {
          size: {
            large: {
              fontSize: '24px',
            },
            small: {
              fontSize: '16px',
            },
          },
        },
      });

      expect(
        component({
          size: {
            '@media (width < 768px)': 'small',
            '@media (width >= 768px)': 'large',
          },
        }).className
      ).toBe(
        'fuel_PJLV fuel_PJLV-gjWYHE-size-small fuel_PJLV-fzmUzy-size-large'
      );

      expect(getCssText()).toBe(
        `--sxs{--sxs:4 fuel_PJLV-gjWYHE-size-small fuel_PJLV-fzmUzy-size-large}@media{` +
          `@media (max-width:767.9375px){.fuel_PJLV-gjWYHE-size-small{font-size:16px}}` +
          `@media (min-width:768px){.fuel_PJLV-fzmUzy-size-large{font-size:24px}}` +
          `}`
      );
    }
  });
});

describe('Variant pairing types', () => {
  const componentConfigForBooleanVariant = {
    '--component': true,
    variants: {
      testBoolean: {
        true: {
          '--test-boolean': true,
        },
        false: {
          '--test-boolean': false,
        },
      },
    },
  };

  test('Renders a variant with an inactive string variant', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfigForBooleanVariant);
    const rendering = component();

    expect(rendering.className).toBe('fuel_foEXqW');
    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_foEXqW}@media{` +
        `.fuel_foEXqW{--component:true}` +
        `}`
    );
  });

  test('Renders a variant with an active string variant', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfigForBooleanVariant);
    const rendering = component({ testBoolean: 'true' });

    expect(rendering.className).toBe(
      'fuel_foEXqW fuel_foEXqW-iloXEi-testBoolean-true'
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_foEXqW}@media{` +
        `.fuel_foEXqW{--component:true}` +
        `}` +
        `--sxs{--sxs:3 fuel_foEXqW-iloXEi-testBoolean-true}@media{` +
        `.fuel_foEXqW-iloXEi-testBoolean-true{--test-boolean:true}` +
        `}`
    );
  });

  test('Renders a variant with an active boolean variant', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfigForBooleanVariant);
    const rendering = component({ testBoolean: true });

    expect(rendering.className).toBe(
      'fuel_foEXqW fuel_foEXqW-iloXEi-testBoolean-true'
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_foEXqW}@media{` +
        `.fuel_foEXqW{--component:true}` +
        `}` +
        `--sxs{--sxs:3 fuel_foEXqW-iloXEi-testBoolean-true}@media{` +
        `.fuel_foEXqW-iloXEi-testBoolean-true{--test-boolean:true}` +
        `}`
    );
  });

  test('Renders a variant with an active responsive string variant', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfigForBooleanVariant);
    const rendering = component({
      testBoolean: { '@media (min-width: 640px)': 'true' },
    });

    expect(rendering.className).toBe(
      'fuel_foEXqW fuel_foEXqW-brOaTK-testBoolean-true'
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_foEXqW}@media{` +
        `.fuel_foEXqW{--component:true}` +
        `}` +
        `--sxs{--sxs:4 fuel_foEXqW-brOaTK-testBoolean-true}@media{` +
        `@media (min-width: 640px){` +
        `.fuel_foEXqW-brOaTK-testBoolean-true{--test-boolean:true}` +
        `}` +
        `}`
    );
  });

  test('Renders a variant with an active responsive boolean variant', () => {
    const { css, getCssText } = createStitches();
    const component = css(componentConfigForBooleanVariant);
    const rendering = component({
      testBoolean: { '@media (min-width: 640px)': true },
    });

    expect(rendering.className).toBe(
      'fuel_foEXqW fuel_foEXqW-brOaTK-testBoolean-true'
    );
    expect(getCssText()).toBe(
      `--sxs{--sxs:2 fuel_foEXqW}@media{` +
        `.fuel_foEXqW{--component:true}` +
        `}` +
        `--sxs{--sxs:4 fuel_foEXqW-brOaTK-testBoolean-true}@media{` +
        `@media (min-width: 640px){` +
        `.fuel_foEXqW-brOaTK-testBoolean-true{--test-boolean:true}` +
        `}` +
        `}`
    );
  });
});
