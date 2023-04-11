import { createStitches } from '../src/index.js';

describe('Issue #652', () => {
  test('Applying both variants from the one default variant', () => {
    const { css } = createStitches();

    const component1 = css({
      variants: {
        hue: {
          primary: {
            color: 'red',
          },
        },
      },
      defaultVariants: {
        hue: 'primary',
      },
    });

    const component2 = css(component1, {
      variants: {
        hue: {
          primary: {
            color: 'blue',
          },
        },
      },
    });

    const expression2 = component2();

    expect(expression2.className).toBe(
      `fuel_PJLV fuel_PJLV-gmqXFB-hue-primary fuel_PJLV-kydkiA-hue-primary`
    );
  });
});
