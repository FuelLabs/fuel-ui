import { createStitches } from '../src/index.js';

describe('Composition', () => {
  test('Renders an empty component', () => {
    const { styled, getCssText } = createStitches();
    const generic = styled();
    expect(generic.render().props).toEqual({ className: 'PJLV' });
    expect(getCssText()).toBe('');
  });

  test('Does not render a component without an explicit rendering', () => {
    const { styled, getCssText } = createStitches();
    const red = styled({ color: 'red' });
    const size14 = styled({ fontSize: '14px' });
    const bold = styled({ fontWeight: 'bold' });
    const title = styled(red, size14, bold, { fontFamily: 'monospace' });
    expect(`${title}`).toBe(
      '.fuel_gmqXFB:where(.fuel_hzkWus.fuel_cQFdVt.fuel_kngyIZ)'
    );
    expect(getCssText()).toBe('');
  });

  test('Renders a component with all compositions', () => {
    const { styled, getCssText } = createStitches();
    const red = styled({ color: 'red' });
    const size14 = styled({ fontSize: '14px' });
    const bold = styled({ fontWeight: 'bold' });
    const title = styled(red, size14, bold, { fontFamily: 'monospace' });
    expect(title.render().props.className).toBe(
      'fuel_gmqXFB fuel_hzkWus fuel_cQFdVt fuel_kngyIZ'
    );
    expect(getCssText()).toBe(
      '--sxs{--sxs:2 fuel_gmqXFB fuel_hzkWus fuel_cQFdVt fuel_kngyIZ}@media{.fuel_gmqXFB{color:red}.fuel_hzkWus{font-size:14px}.fuel_cQFdVt{font-weight:bold}.fuel_kngyIZ{font-family:monospace}}'
    );
  });
});
