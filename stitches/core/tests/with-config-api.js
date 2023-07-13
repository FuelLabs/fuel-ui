import { createStitches } from '../src/index.js';

describe('css.withConfig', () => {
  test('Basic css calls without a config', () => {
    const { css, getCssText } = createStitches();

    expect(css.withConfig).toBeInstanceOf(Function);

    const component1of2 = css.withConfig()();
    const className1of2 = `${component1of2}`;
    const cssString1of2 = getCssText();

    expect(component1of2).toBeInstanceOf(Function);
    expect(className1of2).toBe('PJLV');
    expect(cssString1of2).toBe('');

    const componentToRender = css.withConfig()({ color: 'DodgerBlue' });
    const className = componentToRender().toString();
    const cssString = getCssText();

    expect(componentToRender).toBeInstanceOf(Function);
    expect(className).toBe('fuel_dataoT');
    expect(cssString).toBe(
      `--sxs{--sxs:2 PJLV fuel_dataoT}@media{.fuel_dataoT{color:DodgerBlue}}`,
    );
  });
  test('Creates the correct className with a componentId', () => {
    const { css, getCssText } = createStitches();

    const componentConfig = {
      componentId: 'cool-id',
    };
    const componentToRender = css.withConfig(componentConfig)({ color: 'red' });
    const className = componentToRender().toString();
    const cssString = getCssText();

    expect(componentToRender).toBeInstanceOf(Function);
    expect(className).toBe('fuel_cool-id');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_cool-id}@media{.fuel_cool-id{color:red}}`,
    );
  });

  test('Creates the correct className with a displayName', () => {
    const { css, getCssText } = createStitches();

    const componentConfig = {
      displayName: 'my-cool-display-name',
    };
    const componentToRender = css.withConfig(componentConfig)({ color: 'red' });
    const className = componentToRender().toString();
    const cssString = getCssText();

    expect(componentToRender).toBeInstanceOf(Function);
    expect(className).toBe('fuel_my-cool-display-name-gmqXFB');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_my-cool-display-name-gmqXFB}@media{.fuel_my-cool-display-name-gmqXFB{color:red}}`,
    );
  });

  test('Creates the correct className with a displayName and componentId', () => {
    const { css, getCssText } = createStitches();

    const componentConfig = {
      componentId: 'cool-id',
      displayName: 'my-cool-display-name',
    };
    const componentToRender = css.withConfig(componentConfig)({ color: 'red' });
    const className = componentToRender().toString();
    const cssString = getCssText();

    expect(componentToRender).toBeInstanceOf(Function);
    expect(className).toBe('fuel_my-cool-display-name-cool-id');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_my-cool-display-name-cool-id}@media{.fuel_my-cool-display-name-cool-id{color:red}}`,
    );
  });

  test('Creates the correct className with a componentConfig while extending components', () => {
    const { css, getCssText } = createStitches();

    const ComponentToExtend = css.withConfig({
      componentId: 'component-to-extend-id',
    })({ color: 'red' });
    const componentToRender = css.withConfig({
      componentId: 'cool-component-id',
    })(ComponentToExtend, { color: 'blue' });
    const className = componentToRender().toString();
    expect(className).toBe(
      'fuel_component-to-extend-id fuel_cool-component-id',
    );
    const cssString = getCssText();

    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_component-to-extend-id fuel_cool-component-id}@media{.fuel_component-to-extend-id{color:red}.fuel_cool-component-id{color:blue}}`,
    );
  });
});

describe('shouldForwardStitchesProp', () => {
  test('does not omit stitches props when shouldForwardStitchesProp returns true', () => {
    const { css } = createStitches();

    const componentOneConfig = {
      shouldForwardStitchesProp: () => false,
    };
    const componentOne = css.withConfig(componentOneConfig)('button', {
      variants: {
        variant: {
          red: { background: 'red' },
        },
      },
    });

    const { props: firstComponentProps } = componentOne({
      variant: 'red',
      css: {},
    });
    expect(firstComponentProps.variant).toBe(undefined);
    expect(firstComponentProps.css).toEqual(undefined);

    const componentTwoConfig = {
      shouldForwardStitchesProp: () => true,
    };

    const componentTwo = css.withConfig(componentTwoConfig)('button', {
      variants: {
        variant: {
          red: { background: 'red' },
        },
      },
    });

    const { props: secondComponentProps } = componentTwo({
      variant: 'red',
      css: {},
    });
    expect(secondComponentProps.variant).toBe('red');
    expect(secondComponentProps.css).toEqual({});
  });

  test('does not omit a non-stitches props when shouldForwardStitchesProp returns true', () => {
    const { css } = createStitches();
    const componentConfig = {
      shouldForwardStitchesProp: () => true,
    };
    const componentToRender = css.withConfig(componentConfig)('button', {
      variants: {
        variant: {
          red: { background: 'red' },
        },
      },
    });
    const props = componentToRender({ href: 'www.hello.com' }).props;
    expect(props.href).toBe('www.hello.com');
  });

  test('Omits variants when shouldForwardStitchesProp returns false', () => {
    const { css } = createStitches();
    const componentConfig = {
      shouldForwardStitchesProp: () => false,
    };
    const componentToRender = css.withConfig(componentConfig)('button', {
      variants: {
        variant: {
          red: { background: 'red' },
        },
      },
    });
    const props = componentToRender({ variant: 'red' }).props;
    expect(props.variant).toBe(undefined);
  });
});
