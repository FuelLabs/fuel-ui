import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createStitches } from '../src/index.js';

let RenderOf = (...typeThenPropsThenChildren) => {
  let Rendered;

  void renderer.act(() => {
    Rendered = renderer.create(
      React.createElement(...typeThenPropsThenChildren),
    );
  });

  return Rendered.toJSON();
};

describe('Issue #450', () => {
  test('Compound variants apply to composed components (basic)', () => {
    const { styled, getCssText } = createStitches();

    const Happy = styled('div', {
      '--is-happy': true,

      variants: {
        fulfilled: {
          positively: {
            '--is-fulfilled-positively': true,
          },
        },
        satisfied: {
          definitely: {
            '--is-satisfied-definitely': true,
          },
        },
      },

      defaultVariants: {
        fulfilled: 'positively',
        satisfied: 'definitely',
      },
    });

    expect(RenderOf(Happy, null).props.className).toBe(
      `fuel_fEpFmO fuel_fEpFmO-cfZmSQ-fulfilled-positively fuel_fEpFmO-FgYNE-satisfied-definitely`,
    );

    expect(getCssText()).toBe(
      // composition styles
      `--sxs{--sxs:2 fuel_fEpFmO}@media{` +
        `.fuel_fEpFmO{--is-happy:true}` +
        `}` +
        // variant styles
        `--sxs{--sxs:3 fuel_fEpFmO-cfZmSQ-fulfilled-positively fuel_fEpFmO-FgYNE-satisfied-definitely}@media{` +
        `.fuel_fEpFmO-cfZmSQ-fulfilled-positively{--is-fulfilled-positively:true}` +
        `.fuel_fEpFmO-FgYNE-satisfied-definitely{--is-satisfied-definitely:true}` +
        `}`,
    );
  });

  test('Compound variants apply to composed components (complex)', () => {
    const { styled } = createStitches();

    const Tile = styled('div', {
      '--tile': 1,

      variants: {
        appearance: {
          primary: {},
          secondary: { '--appearance': 'secondary' },
        },
        color: {
          red: {},
          purple: { '--color': 'purple' },
          lightBlue: { '--color': 'lightBlue' },
        },
      },

      compoundVariants: [
        {
          appearance: 'secondary',
          color: 'lightBlue',
          css: {
            '--compound': 'appearance secondary / color lightBlue',
          },
        },
      ],

      defaultVariants: {
        appearance: 'primary',
        color: 'red',
      },
    });

    const RoundedTile = styled(Tile, {
      '--rounded-tile': 1,

      defaultVariants: {
        appearance: 'secondary',
        color: 'lightBlue',
      },
    });

    let RenderOf = (...typeThenPropsThenChildren) => {
      let Rendered;

      void renderer.act(() => {
        Rendered = renderer.create(
          React.createElement(...typeThenPropsThenChildren),
        );
      });

      return Rendered.toJSON();
    };

    const tileComponentClass = `fuel_kTjQBa`;
    const roundedTileComponentClass = `fuel_gLsErE`;

    const variantLightBlueClass = `fuel_kTjQBa-ilDyRi-color-lightBlue`;
    const variantAppearanceSecondaryClass = `fuel_kTjQBa-cOChOn-appearance-secondary`;
    const variantCompoundClass = `fuel_kTjQBa-gYqlvA-cv`;

    // Normal variants

    // renders { appearance: "primary"; color: "red" }, neither empty variant will render
    expect(RenderOf(Tile).props.className).toBe(tileComponentClass);

    // renders { appearance: "primary"; color: "lightBlue" }, the { color: "lightBlue" } variant will render
    expect(RenderOf(Tile, { color: 'lightBlue' }).props.className).toBe(
      `${tileComponentClass} ${variantLightBlueClass}`,
    );

    // Compound variants

    // renders { appearance: "secondary"; color: "lightBlue" }, the { appearance: "secondary" } variant will render
    expect(RenderOf(Tile, { appearance: 'secondary' }).props.className).toBe(
      `${tileComponentClass} ${variantAppearanceSecondaryClass}`,
    );

    // renders { appearance: "secondary"; color: "lightBlue" }, the { appearance: "secondary" }, { color: "lightBlue" } variants will render
    expect(
      RenderOf(Tile, { appearance: 'secondary', color: 'lightBlue' }).props
        .className,
    ).toBe(
      `${tileComponentClass} ${variantAppearanceSecondaryClass} ${variantLightBlueClass} ${variantCompoundClass}`,
    );

    // Restyled compound variants (compound is activated implicitly by defaultVariants)

    // appearance: primary, color: red, +
    expect(RenderOf(RoundedTile).props.className).toBe(
      `${tileComponentClass} ${roundedTileComponentClass} ${variantAppearanceSecondaryClass} ${variantLightBlueClass} ${variantCompoundClass}`,
    );

    // Restyled compound variants (compound is activated explicitly by props)

    // appearance: secondary, compound * 2, +
    expect(
      RenderOf(RoundedTile, { appearance: 'secondary', color: 'lightBlue' })
        .props.className,
    ).toBe(
      `${tileComponentClass} ${roundedTileComponentClass} ${variantAppearanceSecondaryClass} ${variantLightBlueClass} ${variantCompoundClass}`,
    );
  });
});
