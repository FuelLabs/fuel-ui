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
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render();

    expect(expression.props.className).toBe('fuel_PJLV');
    expect(toString()).toBe('');
  });

  test('Renders a component with 1 matching variant', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression1 = component.render({ size: 'small' });

    const expression1CssText = '.fuel_PJLV-Gaggi-size-small{font-size:16px}';

    expect(expression1.props.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small'
    );
    expect(toString()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{${expression1CssText}}`
    );

    const expression2 = component.render({ color: 'blue' });

    const expression2CssText =
      '.fuel_PJLV-kaCQqN-color-blue{background-color:dodgerblue;color:white}';

    expect(expression2.props.className).toBe(
      'fuel_PJLV fuel_PJLV-kaCQqN-color-blue'
    );
    expect(toString()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small fuel_PJLV-kaCQqN-color-blue}@media{${expression1CssText}${expression2CssText}}`
    );
  });

  test('Renders a component with 2 matching variants', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render({ size: 'small', level: 1 });

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1'
    );

    const expressionSizeSmallCssText =
      '.fuel_PJLV-Gaggi-size-small{font-size:16px}';
    const expressionLevel1CssText = '.fuel_PJLV-iRwLiB-level-1{padding:0.5em}';

    expect(toString()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1}@media{${expressionSizeSmallCssText}${expressionLevel1CssText}}`
    );
  });

  test('Renders a component with a 2 matching variants and 1 matching compound', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render({ size: 'small', color: 'blue' });

    const expressionSizeSmallCssText =
      '.fuel_PJLV-Gaggi-size-small{font-size:16px}';
    const expressionColorBlueCssText =
      '.fuel_PJLV-kaCQqN-color-blue{background-color:dodgerblue;color:white}';
    const expressionCompoundCssText =
      '.fuel_PJLV-cChFtv-cv{transform:scale(1.2)}';

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small fuel_PJLV-cChFtv-cv'
    );
    expect(toString()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small}@media{` +
        expressionColorBlueCssText +
        expressionSizeSmallCssText +
        `}--sxs{--sxs:5 fuel_PJLV-cChFtv-cv}@media{` +
        expressionCompoundCssText +
        `}`
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
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render();

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small'
    );
    expect(toString()).toBe(
      '--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{.fuel_PJLV-Gaggi-size-small{font-size:16px}}'
    );
  });

  test('Renders a component with the default variant explicitly applied', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render({ size: 'small' });

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small'
    );
    expect(toString()).toBe(
      '--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{.fuel_PJLV-Gaggi-size-small{font-size:16px}}'
    );
  });

  test('Renders a component with the non-default variant explicitly applied', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render({ size: 'large' });

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-hsYHIj-size-large'
    );
    expect(toString()).toBe(
      '--sxs{--sxs:3 fuel_PJLV-hsYHIj-size-large}@media{.fuel_PJLV-hsYHIj-size-large{font-size:24px}}'
    );
  });

  test('Renders a component with the default variant applied and a different variant explicitly applied', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render({ level: 1 });

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1'
    );
    expect(toString()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small fuel_PJLV-iRwLiB-level-1}@media{` +
        // implicit size:small
        `.fuel_PJLV-Gaggi-size-small{font-size:16px}` +
        // explicit level:1
        `.fuel_PJLV-iRwLiB-level-1{padding:0.5em}` +
        `}`
    );
  });

  test('Renders a component with the default variant applied, a different variant explicitly applied, and a compound applied', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const expression = component.render({ color: 'blue' });

    expect(expression.props.className).toBe(
      'fuel_PJLV fuel_PJLV-kaCQqN-color-blue fuel_PJLV-Gaggi-size-small fuel_PJLV-cChFtv-cv'
    );
    expect(toString()).toBe(
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

  test('Returns a component selector without the default variant applied when toString is used', () => {
    const { styled, toString } = createStitches();
    const component = styled('div', componentConfig);
    const selector = component.toString();

    expect(selector).toBe('.fuel_PJLV');
    expect(toString()).toBe('');
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
    const { styled, toString } = createStitches(config);
    const component = styled('div', componentConfig);
    const componentClassName = 'fuel_PJLV';

    expect(component.render().props.className).toBe(componentClassName);
    expect(toString()).toBe('');
  });

  test('Renders a component with one variant applied', () => {
    const { styled, toString } = createStitches(config);
    const component = styled('div', componentConfig);
    const componentClassName = `fuel_PJLV`;
    const componentSmallClassName = `${componentClassName}-Gaggi-size-small`;
    const componentSmallCssText = `.${componentSmallClassName}{font-size:16px}`;

    expect(component.render({ size: 'small' }).props.className).toBe(
      [componentClassName, componentSmallClassName].join(' ')
    );
    expect(toString()).toBe(
      `--sxs{--sxs:3 fuel_PJLV-Gaggi-size-small}@media{${componentSmallCssText}}`
    );
  });

  test('Renders a component with one conditional variant on one breakpoint applied', () => {
    const { styled, toString } = createStitches(config);
    const component = styled('div', componentConfig);
    const componentClassName = `fuel_PJLV`;
    const componentSmallBp1ClassName = `${componentClassName}-fHtTAQ-size-small`;
    const componentSmallBp1CssText = `@media (max-width: 767px){.${componentSmallBp1ClassName}{font-size:16px}}`;

    expect(
      component.render({ size: { '@bp1': 'small' } }).props.className
    ).toBe([componentClassName, componentSmallBp1ClassName].join(' '));
    expect(toString()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small}@media{` +
        componentSmallBp1CssText +
        `}`
    );
  });

  test('Renders a component with one conditional variant on two breakpoints applied', () => {
    const { styled, toString } = createStitches(config);
    const component = styled('div', componentConfig);
    const componentClassName = `fuel_PJLV`;
    const componentSmallBp1ClassName = `${componentClassName}-fHtTAQ-size-small`;
    const componentLargeBp2ClassName = `${componentClassName}-XwbVw-size-large`;
    const componentSmallBp1CssText = `@media (max-width: 767px){.${componentSmallBp1ClassName}{font-size:16px}}`;
    const componentLargeBp2CssText = `@media (min-width: 768px){.${componentLargeBp2ClassName}{font-size:24px}}`;

    expect(
      component.render({ size: { '@bp1': 'small', '@bp2': 'large' } }).props
        .className
    ).toBe(
      [
        componentClassName,
        componentSmallBp1ClassName,
        componentLargeBp2ClassName,
      ].join(' ')
    );
    expect(toString()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        componentSmallBp1CssText +
        componentLargeBp2CssText +
        `}`
    );
  });

  test('Renders a component with a conditional variant repeatedly', () => {
    const { styled, toString } = createStitches(config);
    const component = styled('div', componentConfig);
    const componentClassName = `fuel_PJLV`;
    const componentSmallBp1ClassName = `${componentClassName}-fHtTAQ-size-small`;
    const componentLargeBp2ClassName = `${componentClassName}-XwbVw-size-large`;
    const componentSmallBp1CssText = `@media (max-width: 767px){.${componentSmallBp1ClassName}{font-size:16px}}`;
    const componentLargeBp2CssText = `@media (min-width: 768px){.fuel_PJLV-XwbVw-size-large{font-size:24px}}`;

    expect(
      component.render({ size: { '@bp1': 'small', '@bp2': 'large' } }).props
        .className
    ).toBe(
      [
        componentClassName,
        componentSmallBp1ClassName,
        componentLargeBp2ClassName,
      ].join(' ')
    );
    expect(toString()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        componentSmallBp1CssText +
        componentLargeBp2CssText +
        `}`
    );

    expect(
      component.render({ size: { '@bp1': 'small', '@bp2': 'large' } }).props
        .className
    ).toBe(
      [
        componentClassName,
        componentSmallBp1ClassName,
        componentLargeBp2ClassName,
      ].join(' ')
    );
    expect(toString()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        `@media (max-width: 767px){.fuel_PJLV-fHtTAQ-size-small{font-size:16px}}` +
        `@media (min-width: 768px){.fuel_PJLV-XwbVw-size-large{font-size:24px}}` +
        `}`
    );

    expect(
      component.render({ size: { '@bp1': 'small', '@bp2': 'large' } }).props
        .className
    ).toBe(`fuel_PJLV fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large`);
    expect(toString()).toBe(
      `--sxs{--sxs:4 fuel_PJLV-fHtTAQ-size-small fuel_PJLV-XwbVw-size-large}@media{` +
        `@media (max-width: 767px){.fuel_PJLV-fHtTAQ-size-small{font-size:16px}}` +
        `@media (min-width: 768px){.fuel_PJLV-XwbVw-size-large{font-size:24px}}` +
        `}`
    );
  });
});
