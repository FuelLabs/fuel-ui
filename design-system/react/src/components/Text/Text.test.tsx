import { render, testA11y } from '@fuels/jest';

import { Text } from './Text';

describe('Text', () => {
  it('a11y', async () => {
    await testA11y(<Text>Text</Text>);
  });

  it('should render a basic paragraph', () => {
    const { container } = render(<Text>Click</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });
});
