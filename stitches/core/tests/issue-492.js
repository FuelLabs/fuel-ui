import { createStitches } from '../src/index.js';

describe('Issue #492', () => {
  test('Conditionally apply default variants as the @initial value', () => {
    const { css, getCssText } = createStitches();

    const component = css({
      variants: {
        sweet: {
          caroline: {
            '--sweet-caroline': true,
          },
          dreams: {
            '--sweet-dreams': true,
          },
        },
      },

      defaultVariants: {
        sweet: 'caroline',
      },
    });

    const componentClassName = `fuel_PJLV`;
    const variantSweetCarolineClassName = `fuel_PJLV-bVaDOZ-sweet-caroline`;
    const variantSweetDreamsClassName = `fuel_PJLV-loBWDA-sweet-dreams`;
    const variantResponsiveSweetCarolineClassName = `fuel_PJLV-iuHgfx-sweet-caroline`;
    const variantResponsiveSweetDreamsClassName = `fuel_PJLV-cNdtIU-sweet-dreams`;

    /** Rendering of the component as-is. */
    const rendering1 = component();

    expect(rendering1.className).toBe(
      `${componentClassName} ${variantSweetCarolineClassName}`
    );

    expect(getCssText()).toBe(
      `--sxs{--sxs:3 ${variantSweetCarolineClassName}}@media{` +
        `.${variantSweetCarolineClassName}{--sweet-caroline:true}` +
        `}`
    );

    /** Rendering of the component as-is. */
    const rendering2 = component({
      sweet: {
        '@media (min-width: 640px)': 'dreams',
      },
    });

    expect(rendering2.className).toBe(
      `${componentClassName} ${variantSweetCarolineClassName} ${variantResponsiveSweetDreamsClassName}`
    );

    expect(getCssText()).toBe(
      `--sxs{--sxs:3 ${variantSweetCarolineClassName}}` +
        `@media{.${variantSweetCarolineClassName}{--sweet-caroline:true}}` +
        `--sxs{--sxs:4 ${variantResponsiveSweetDreamsClassName}}@media{` +
        `@media (min-width: 640px){.${variantResponsiveSweetDreamsClassName}{--sweet-dreams:true}}` +
        `}`
    );

    /** Rendering of the component as-is. */
    const rendering3 = component({
      sweet: {
        '@media (min-width: 640px)': 'caroline',
        '@initial': 'dreams',
      },
    });

    expect(rendering3.className).toBe(
      `${componentClassName} ${variantSweetDreamsClassName} ${variantResponsiveSweetCarolineClassName}`
    );

    expect(getCssText()).toBe(
      // initial variants
      `--sxs{--sxs:3 ${variantSweetCarolineClassName} ${variantSweetDreamsClassName}}` +
        `@media{.${variantSweetCarolineClassName}{--sweet-caroline:true}.${variantSweetDreamsClassName}{--sweet-dreams:true}}` +
        // responsive variants
        `--sxs{--sxs:4 ${variantResponsiveSweetDreamsClassName} ${variantResponsiveSweetCarolineClassName}}@media{` +
        `@media (min-width: 640px){.${variantResponsiveSweetDreamsClassName}{--sweet-dreams:true}}` +
        `@media (min-width: 640px){.${variantResponsiveSweetCarolineClassName}{--sweet-caroline:true}}` +
        `}`
    );
  });

  test('Apply apply @initial styles first', () => {
    const { css, getCssText } = createStitches();

    const component = css({
      '--rock': true,
      variants: {
        heavy: {
          'iron-butterfly': {
            '--weight-iron-butterfly': true,
          },
          'led-zeppelin': {
            '--weight-led-zeppelin': true,
          },
        },
      },
    });

    /** Rendering of the component as-is. */
    const rendering1 = component({
      heavy: {
        '@media (min-width: 640px)': 'led-zeppelin',
        '@initial': 'iron-butterfly',
      },
    });

    const componentClassName = `fuel_evVBJo`;
    const variantInitialHeavyIronButterfly = `fuel_evVBJo-kiVNrc-heavy-iron-butterfly`;
    const variantMinWidth640LedZeppelin = `fuel_evVBJo-lgYcvN-heavy-led-zeppelin`;

    expect(rendering1.className).toBe(
      `${componentClassName} ${variantInitialHeavyIronButterfly} ${variantMinWidth640LedZeppelin}`
    );

    expect(getCssText()).toBe(
      '--sxs{--sxs:2 fuel_evVBJo}@media{.fuel_evVBJo{--rock:true}}--sxs{--sxs:3 fuel_evVBJo-kiVNrc-heavy-iron-butterfly}@media{.fuel_evVBJo-kiVNrc-heavy-iron-butterfly{--weight-iron-butterfly:true}}--sxs{--sxs:4 fuel_evVBJo-lgYcvN-heavy-led-zeppelin}@media{@media (min-width: 640px){.fuel_evVBJo-lgYcvN-heavy-led-zeppelin{--weight-led-zeppelin:true}}}'
    );
  });
});
