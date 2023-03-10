import { createStitches } from '../src/index.js';

describe('React Component with CSS prop', () => {
  test('Authors can create a component and pass it a css prop of overrides', () => {
    const { styled, toString } = createStitches();

    styled('button', {
      order: 1,
    }).render({
      css: {
        order: 2,
      },
    });

    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_hhyRYU}@media{.fuel_hhyRYU{order:1}}--sxs{--sxs:6 fuel_hhyRYU-ilhKMMn-css}@media{.fuel_hhyRYU-ilhKMMn-css{order:2}}`
    );
  });

  test('React example from Radix', () => {
    const { styled, toString } = createStitches({
      media: {
        bp2: '(min-width: 900px)',
      },
    });

    const expression = styled('button', {
      color: 'inherit',
    }).render({
      css: {
        fontWeight: 500,
        fontVariantNumeric: 'proportional-nums',
        lineHeight: '35px',
        '@bp2': {
          lineHeight: '55px',
          color: 'red',
        },
      },
    });

    expect(expression.props).toEqual({
      className: 'fuel_bHwuwj fuel_bHwuwj-ibwrayD-css',
    });

    expect(toString()).toBe(
      `--sxs{--sxs:2 fuel_bHwuwj}@media{.fuel_bHwuwj{color:inherit}}--sxs{--sxs:6 fuel_bHwuwj-ibwrayD-css}@media{.fuel_bHwuwj-ibwrayD-css{font-weight:500;font-variant-numeric:proportional-nums;line-height:35px}@media (min-width: 900px){.fuel_bHwuwj-ibwrayD-css{line-height:55px;color:red}}}`
    );
  });
});
