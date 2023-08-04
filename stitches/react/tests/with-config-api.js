import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createStitches } from '../src/index.js';

describe('styled.withConfig', () => {
  test('Basic css calls without a config', () => {
    const { styled, getCssText } = createStitches();

    const ComponentToRender = styled.withConfig()('button', {
      color: 'DodgerBlue',
    });
    const className = ComponentToRender.render().props.className;

    const cssString = getCssText();

    expect(className).toBe('fuel_dataoT');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_dataoT}@media{.fuel_dataoT{color:DodgerBlue}}`,
    );
  });

  test('Creates the correct className with a componentId', () => {
    const { styled, getCssText } = createStitches();

    const componentConfig = {
      componentId: 'cool-id',
    };
    const ComponentToRender = styled.withConfig(componentConfig)('button', {
      color: 'red',
    });
    const className = ComponentToRender.render().props.className;

    const cssString = getCssText();

    expect(className).toBe('fuel_cool-id');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_cool-id}@media{.fuel_cool-id{color:red}}`,
    );
  });

  test('Creates the correct className with a displayName', () => {
    const { styled, getCssText } = createStitches();

    const componentConfig = {
      displayName: 'my-cool-display-name',
    };
    const ComponentToRender = styled.withConfig(componentConfig)('button', {
      color: 'red',
    });
    const className = ComponentToRender.render().props.className;

    const cssString = getCssText();

    expect(className).toBe('fuel_my-cool-display-name-gmqXFB');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_my-cool-display-name-gmqXFB}@media{.fuel_my-cool-display-name-gmqXFB{color:red}}`,
    );
  });

  test('Creates the correct className with a displayName and componentId', () => {
    const { styled, getCssText } = createStitches();

    const componentConfig = {
      componentId: 'cool-id',
      displayName: 'my-cool-display-name',
    };
    const ComponentToRender = styled.withConfig(componentConfig)('button', {
      color: 'red',
    });
    const className = ComponentToRender.render().props.className;

    const cssString = getCssText();

    expect(className).toBe('fuel_my-cool-display-name-cool-id');
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_my-cool-display-name-cool-id}@media{.fuel_my-cool-display-name-cool-id{color:red}}`,
    );
  });

  test('Sets displayName on the component when passed as a componentConfig', () => {
    const { styled } = createStitches();

    const componentConfig = {
      componentId: 'cool-id',
      displayName: 'my-cool-display-name',
    };
    const ComponentToRender = styled.withConfig(componentConfig)('button', {
      color: 'red',
    });
    expect(ComponentToRender.displayName).toBe(componentConfig.displayName);
  });

  test('Creates the correct className with a componentConfig while extending components', () => {
    const { styled, getCssText } = createStitches();

    const ComponentToExtend = styled.withConfig({
      componentId: 'component-to-extend-id',
    })({ color: 'red' });
    const ComponentToRender = styled.withConfig({
      componentId: 'cool-component-id',
    })(ComponentToExtend, { color: 'blue' });

    const className = ComponentToRender.render().props.className;

    const cssString = getCssText();

    expect(className).toBe(
      'fuel_component-to-extend-id fuel_cool-component-id',
    );
    expect(cssString).toBe(
      `--sxs{--sxs:2 fuel_component-to-extend-id fuel_cool-component-id}@media{.fuel_component-to-extend-id{color:red}.fuel_cool-component-id{color:blue}}`,
    );
  });
});

describe('shouldForwardStitchesProp', () => {
  test('Forwards the variant to the underlying component when shouldForwardStitchesProp returns true', () => {
    const { styled } = createStitches();

    const ReactComponent = ({ isOpen }) => {
      return React.createElement('div', {}, isOpen ? 'open' : 'closed');
    };

    const componentOneConfig = {
      shouldForwardStitchesProp: () => true,
    };

    const StitchesComponent = styled.withConfig(componentOneConfig)(
      ReactComponent,
      {
        variants: {
          isOpen: {
            true: { background: 'red' },
            false: { background: 'blue' },
          },
        },
      },
    );

    let Rendered;
    renderer.act(() => {
      Rendered = renderer.create(
        React.createElement(StitchesComponent, { isOpen: true }),
      );
    });

    expect(Rendered.toJSON().children[0]).toBe('open');
  });

  test('Does not render the underlying ReactComponent when an as prop is provided and shouldForwardStitchesProp returns false', () => {
    const { styled } = createStitches();

    const ReactComponent = ({ as: asProp }) => {
      return React.createElement(asProp || 'button', {}, 'hola from child');
    };

    const componentOneConfig = {
      shouldForwardStitchesProp: () => false,
    };

    const StitchesComponent = styled.withConfig(componentOneConfig)(
      ReactComponent,
      {},
    );

    let Rendered;
    renderer.act(() => {
      Rendered = renderer.create(
        React.createElement(StitchesComponent, { as: 'a' }, ['comp']),
      );
    });

    expect(Rendered.toJSON().children[0]).toBe('comp');
  });

  test('Forwards the as prop to the underlying component when shouldForwardStitchesProp returns true and the asp prop was defined', () => {
    const { styled } = createStitches();

    const ReactComponent = ({ as: asProp }) => {
      return React.createElement('div', {}, asProp || 'no-as-prop-found');
    };

    const componentOneConfig = {
      shouldForwardStitchesProp: () => true,
    };
    const StitchesComponent = styled.withConfig(componentOneConfig)(
      ReactComponent,
      {},
    );

    let Rendered;
    renderer.act(() => {
      Rendered = renderer.create(React.createElement(StitchesComponent));
    });
    expect(Rendered.toJSON().children[0]).toBe('no-as-prop-found');

    renderer.act(() => {
      Rendered.update(React.createElement(StitchesComponent, { as: 'a' }));
    });
    expect(Rendered.toJSON().children[0]).toBe('a');
  });
});
